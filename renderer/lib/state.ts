import { atom } from "jotai"

const currDate = new Date()
export const selectedDayAtom = atom<Date>(
  new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate()),
)

export const journalTextAtom = atom<string>("")