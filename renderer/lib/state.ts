import { atom } from "jotai"

interface DayData {
  date: Date
  mood: number
  journal: string
}

const currDate = new Date()
export const selectedDayAtom = atom<Date>(
  new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate()),
)
