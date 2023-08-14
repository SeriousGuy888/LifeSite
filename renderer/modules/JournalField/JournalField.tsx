import React from "react"
import { useAtom } from "jotai"
import { dayDataAtom } from "../../lib/state"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

declare var journalEntry: string

const JournalField = () => {
  const [dayData, setDayData] = useAtom(dayDataAtom)

  const handleTextUpdate = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value
    journalEntry = text

    let dayDataCopy = { ...dayData }
    dayDataCopy.journalEntry = text
    setDayData(dayDataCopy)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4 w-full max-w-full overflow-x-auto">
      <textarea
        name="journal-entry"
        id="journal-entry"
        rows={10}
        className="text-white w-full p-4 resize-none border-2 rounded-md focus:outline-none border-gray-600 focus:border-blue-400 bg-gray-700 break-words"
        value={dayData.journalEntry ?? ""}
        onChange={handleTextUpdate}
        placeholder="Write any additional thoughts here. Markdown supported."
      ></textarea>
      <div className="prose prose-invert break-words">
        <ReactMarkdown
          children={dayData.journalEntry ?? ""}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  )
}

export default JournalField
