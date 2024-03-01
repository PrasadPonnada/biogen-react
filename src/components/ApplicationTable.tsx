import { AppControlInfo, getAppControlData, } from "@/lib/utils"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "./ui/input"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ApplicationTableProps {
    id: number
}
export default function ApplicationTable({ id }: ApplicationTableProps) {
    const [appControlItems, setAppControlItems] = useState<AppControlInfo[] | undefined>(undefined);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (id !== 0) {
            const selectedApp = id === 0 ? undefined : getAppControlData()
          
            setAppControlItems(selectedApp);
            
        }

    }, [id]);

    const saveChanges = () => {
        setIsSaving(true)
        setTimeout(() => {
            setIsSaving(false)
            notify()
        }, 1000);
    }

    const handleUpdate = (id: number, field: string, value: any) => {
        setAppControlItems((prevControls) =>
            prevControls?.map((control) =>
                control.id === id ? { ...control, [field]: value } : control
            )
        );
    };

    const notify = () => {
        toast.success('Successfully Saved!', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "light",
            transition: Bounce,
        });
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
                        {
                            appControlItems === undefined ? (
                                <tr className="border-b">
                                    <td colSpan={5} className="py-4 text-center text-gray-500">
                                        No Records Found , Please Select the Application.
                                    </td>
                                </tr>
                            ) :

                                <>
                                    {appControlItems?.map((item) => (
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

                                                <RadioGroup value={item.exceptions ? 'Yes' : 'No'}
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
                                    ))}</>
                        }


                    </tbody>
                </table>
            </section>
            <div className="w-full flex justify-center items-center">
                {appControlItems && appControlItems.length > 0 &&
                    (
                        <Button variant={'default'}
                            onClick={() => saveChanges()}
                            className="w-48 m-2 bg-gradient-to-r from-green-800 via-green-700 to-green-600
                                        text-[18px] font-bold hover:opacity-80">
                            {isSaving ? "Submitting.." : "Submit"}
                        </Button>)
                }
            </div>
            <ToastContainer />

        </>
    )
}
