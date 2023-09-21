"use client"
import { playFairFont } from "@/utils";
import { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

interface IDate {
  startDate: string | Date;
  endDate: string | Date;
}

export default function MyDatePicker() {
  const [value, setValue] = useState<IDate>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue: DateValueType) => {
    // Adapt the DateValueType value to IDate
    const adaptedValue: IDate = {
      startDate: newValue?.startDate || new Date(), 
      endDate: newValue?.endDate || new Date(),     
    };

    console.log("newValue:", newValue);
    setValue(adaptedValue);
  };

  return (
    <div className={`date-picker ${playFairFont.className}`}>
      <Datepicker primaryColor="orange" value={value} onChange={handleValueChange} />
    </div>
  );
}
