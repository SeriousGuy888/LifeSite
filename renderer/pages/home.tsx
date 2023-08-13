import React from "react";
import Head from "next/head";
import Link from "next/link";
import Calendar from "../modules/Calendar/Calendar";
import UserInput from "../modules/UserInputMenu/UserInputMenu";
import { useAtom } from "jotai";
import { selectedDayAtom } from "../lib/state";
import MoodInput from "../modules/MoodInput.tsx/MoodInput";
import StoringTest from "../modules/Storing/StoringTest";

function Home() {
  const [selectedDay] = useAtom(selectedDayAtom);

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
          <h1 className="text-2xl text-white mb-4">Selected Day</h1>
          <p className="text-white mb-4">{selectedDay.toDateString()}</p>
          <UserInput />
          <br />
          <br />
          <MoodInput />
          <br />
          <br />
          <>
            <StoringTest />
          </>
        </section>
      </main>
    </>
  );
}

export default Home;
