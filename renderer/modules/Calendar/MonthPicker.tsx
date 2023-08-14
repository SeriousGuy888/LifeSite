import { NextPage } from "next"
import React from "react"
import { Month } from "./Calendar"

const MonthPicker: NextPage<{
  month: Month
  setMonth: React.Dispatch<React.SetStateAction<Month>>
  currMonth: Month
}> = ({ month, setMonth, currMonth }) => {
  return (
    <div className="flex items-center gap-2 select-none [&>*]:cursor-pointer">
      <span onClick={() => setMonth(getPrevMonth(month))}>{"<"}</span>
      <span onClick={() => setMonth(currMonth)}>Today</span>
      <span onClick={() => setMonth(getNextMonth(month))}>{">"}</span>
    </div>
  )
}

function getPrevMonth(month: Month) {
  if (month.month === 1) {
    return {
      year: month.year - 1,
      month: 12,
    }
  } else {
    return {
      year: month.year,
      month: month.month - 1,
    }
  }
}

const getNextMonth = (month: Month) => {
  if (month.month === 12) {
    return {
      year: month.year + 1,
      month: 1,
    }
  } else {
    return {
      year: month.year,
      month: month.month + 1,
    }
  }
}

export default MonthPicker
