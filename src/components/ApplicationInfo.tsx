import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import Dropdown from "./Dropdown";
import ApplicationTable from "./ApplicationTable";


export default function ApplicationInfo() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [selectedAppName, setSelectedAppName] = useState("");

    const onAppNameChange = (appname: string) => {
        setSelectedAppName(appname)
    }

    return (
        <div className="bg-white w-full h-full flex flex-col gap-5 space-y-2 p-10">
            <div className="flex flex-col ">
                <h3 className="md:text-2xl text-sm font-bold p-1 ">Select Month</h3>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            {date ? (
                                format(date, "PPP")
                            ) : (
                                <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus

                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="flex flex-col w-full">
                <h3 className="md:text-2xl text-sm  font-bold p-1 ">Select Application Name</h3>
                <div className="w-full md:w-1/2" >
                    <Dropdown onChangeHandler={onAppNameChange} />
                </div>
            </div>
            <div>
                <ApplicationTable />
            </div>
        </div>
    )
}
