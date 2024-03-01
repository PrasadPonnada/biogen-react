import { AppControlInfo, getAppControlData } from "@/lib/utils"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "./ui/input"
import { useState } from "react"
export default function ApplicationTable() {

    const appControlInfo = getAppControlData()

    const [appControls, setAppControls] = useState<AppControlInfo[]>(appControlInfo);

    const handleUpdate = (id: Number, field: string, value: any) => {
        setAppControls((prevControls) =>
            prevControls.map((item) => item.id === id ? { ...item, [field]: value } : item)
        )
    }

    return (
        <>
            <section className="overflow-x-auto">
                <table className="w-full border-collapse border-t">
                    <thead>
                        <tr className="font-bold border-b text-grey-500">
                            <th className="min-w-[200px] py-3 text-left">Control</th>
                            <th className="min-w-[150px] flex-1 py-3 pr-4 text-left">Complaint %</th>
                            <th className="min-w-[100px] py-3 text-left">Exception</th>
                            <th className="min-w-[150px] py-3 text-left">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appControls.map((item) => (
                            <tr key={item.id} className="border-b  
                                                        text-[14px] leading-[20px] 
                                                        md:text-[16px] md:leading-[24px] font-normal ">
                                <td className="min-w-[200px]  py-3">
                                    {item.name}
                                </td>
                                <td className="min-w-[150px] py-3">
                                    <Input type="number"
                                        className="w-20"
                                        value={item.complaince}
                                        onChange={(e) => handleUpdate(item.id, 'complaince', e.target.value)} />

                                </td>
                                <td className="min-w-[100px] py-3">
                                    <RadioGroup defaultValue={`${item.exceptions ? "Yes" : "No"}`}
                                        onValueChange={(value) => handleUpdate(item.id, 'exceptions', value === 'Yes')} >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="Yes" id="r2" />
                                            <Label htmlFor="r2">Yes</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="No" id="r3" />
                                            <Label htmlFor="r3">No</Label>
                                        </div>
                                    </RadioGroup>
                                    {item.exceptions}
                                </td>
                                <td className="min-w-[150px] py-3">
                                    {
                                        item.exceptions &&
                                        <Input type="text"
                                            value={item.description || ''}
                                            onChange={(e) => handleUpdate(item.id, 'description', e.target.value)} />
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}
