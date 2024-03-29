import { getApplicationData } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type DropdownProps = {
    onChangeHandler?: (id: number) => void;
    value?: string
}

const Dropdown = ({ onChangeHandler, value }: DropdownProps) => {

    const applications = getApplicationData();

    return (
        <Select onValueChange={(name) => {
            const selectedApp = applications.find((app) => app.name === name);
            if (onChangeHandler && selectedApp) {
                onChangeHandler(selectedApp.id);
            }
            
        }} defaultValue={value}>
            <SelectTrigger >
                <SelectValue placeholder="Select Application" />
            </SelectTrigger>
            <SelectContent className="w-7/12 ">
                {applications.length > 0 &&
                    applications.map((app) => {
                        return <SelectItem key={app.id} value={app.name} className="text-sm font-medium">
                            {app.name}
                        </SelectItem>
                    })
                }
            </SelectContent>
        </Select>

    )
}

export default Dropdown