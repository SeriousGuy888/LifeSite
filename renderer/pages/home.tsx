import React from "react"
import Head from "next/head"
import Link from "next/link"
import Calendar from "../modules/Calendar/Calendar"
import UserInput from "../modules/Calendar/healthStateInput/healthStateInput"

function Home() {
  return (
    <>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <div className="flex justify-center">
        <div className="max-w-4xl">
          <Calendar />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-4xl">
          <UserInput />
        </div>
      </div>
      {/* <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/next">
          <a className="btn-blue">Go to next page</a>
        </Link>
      </div> */}
    </>
  )
}

export default Home
