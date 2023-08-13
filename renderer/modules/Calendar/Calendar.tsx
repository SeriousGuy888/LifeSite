import React, { useEffect } from "react";
import CalendarDay from "./CalendarDay";

import { useAtom } from "jotai";
import { selectedDayAtom } from "../../lib/state";

declare var theDate: Date;

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useAtom(selectedDayAtom);

  const currDate = new Date();

  const [month, setMonth] = React.useState<Date>(
    new Date(currDate.getFullYear(), currDate.getMonth())
  );
  const handleChangeMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const year = event.target.valueAsDate.getUTCFullYear();
    const month = event.target.valueAsDate.getUTCMonth();
    setMonth(new Date(year, month));
  };

  const handleSelectDay = (date: Date) => {
    setSelectedDay(date);
    theDate = date;
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <input
        className="bg-gray-700"
        value={month.toISOString().slice(0, 7)}
        onChange={handleChangeMonth}
        type="month"
      />
      <section className="grid grid-cols-7 grid-rows-6 gap-2 select-none">
        {[...Array(month.getDay())].map((_, i) => (
          <span key={"blank" + i}></span> // NOSONAR
        ))}
        {[...Array(getNumDaysInMonth(month))].map((_, i) => {
          const date = new Date(month.getFullYear(), month.getMonth(), i + 1);
          return (
            <CalendarDay
              key={date.toISOString()}
              date={date}
              selectDayFunc={handleSelectDay}
              isSelected={selectedDay?.toISOString() === date.toISOString()}
            />
          );
        })}
      </section>
    </div>
  );
};

function getNumDaysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export default Calendar;
