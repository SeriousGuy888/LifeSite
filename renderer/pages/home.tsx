import React from "react"
import Head from "next/head"
import Link from "next/link"
import Calendar from "../modules/Calendar/Calendar"
import UserInput from "../modules/Calendar/UserInputMenu/UserInputMenu"

function Home() {
  return (
    <>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <main className="grid grid-cols-2 h-screen">
        <section className="bg-gray-900 p-8">
          <Calendar />
        </section>
        <section className="bg-gray-800 p-8">
          <UserInput />
        </section>
      </main>
    </>
  )
}

export default Home
