import { atom } from "jotai"

export interface DayData {
  healthState: string
  journalEntry: string
  moodMeter: number
  theDate: Date
}

const currDate = new Date()
export const selectedDayAtom = atom<Date>(
  new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate()),
)

export const dayDataAtom = atom<DayData>({
  healthState: "",
  journalEntry: "",
  moodMeter: 50,
  theDate: new Date(0),
})

export const journalTextAtom = atom<string>("")
