import React, { useState } from "react"
import MDEditor from "@uiw/react-md-editor"
import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"
import { useAtom } from "jotai"
import { journalTextAtom } from "../../lib/state"

const JournalField = () => {
  const [text, setText] = useAtom(journalTextAtom)

  return (
    <textarea
      name="journal-entry"
      id="journal-entry"
      rows={10}
      className="text-white w-full p-4 resize-none border-2 rounded-md focus:outline-none border-gray-600 focus:border-blue-400 bg-gray-700"
      value={text}
      onChange={(e) => setText(e.target.value)}
    ></textarea>
  )
}

export default JournalField
