import React from "react"
import Link from "next/link"

const HealthTipsPage: React.FC = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="prose prose-invert">
        <h1>- Physical Health Tips -</h1>

        <section>
          <p>Here are some tips to maintain your physical well-being:</p>
          <ul>
            <li>
              If you are struggling to lose weight, there are diets and workout
              schedules. Keep in mind that your dietary needs may vary and you
              should consult a professional if you plan to go on a strict diet.
              We're just some dudes who made a website. We recommend:
            </li>
            <li>
              The beefy diet: This diet is focused on protein. Of course,
              include other things like carbs and fats, but protein is the name
              of the game. Work out as much as you can each week and focus your
              goals on lifting heavier weights each week. Set a realistic(not
              too fast - It should be at a nice, steady pace) achievement goal
              with the Calendar at the home page.
            </li>
            <li>
              Vegetarian diet: If you're a vegetarian trying to get back into
              shape, we recommend high-fiber veggies like brocolli, cauliflower,
              and zucchini. Of course, you'll need protein like beans, eggs,
              nuts, and seeds.
            </li>
            <li>
              Balanced diet: This diet focuses on returning to a healthy body,
              as well as maintaining your health. YAim for about 1-2 pounds of
              weight loss a week, or how much you think you can do without
              burning out. Your dishes should be limited from sugar and
              processed foods. Lean proteins, whole grains, healthy fats(like
              avocadoes), and fruits and vegetables. Make sure you're setting
              your meal portions properly, and be mindful to avoid overeating.
              Your excersice routine should be consistent but not too vigorous.
              Something like jogging every morning and evening lightly is
              sufficient for this diet.
            </li>
          </ul>
        </section>

        <section>
          <h2>- Mental Health Tips -</h2>
          <p>
            if you're finding yourself feeling down, there are ways to clear
            your head and improve your mental health.
          </p>
          <ul>
            <li>
              Spend time with people face-to-face. Sharing your concerns or
              worries with people you know can help you get a lot off your
              chest.
            </li>
            <li>
              Stay active. Excersice is known to improve your motivation while
              you continue to attempt to improve your health. It also helps to
              clear your mind. Often, doing this outside helps the most as you
              are closer to nature and without other people there to judge you.
            </li>
            <li>
              GET ENOUGH SLEEP. This can't be stressed enough. Burning out from
              lack of sleep or rest if one of the biggest mental health problems
              you can face. It affects your mood and appetite, which are crucial
              factors. Balance your schedule to get a decent amount.
            </li>
            <li>
              Manage your stress. Do yoga, deep breathing, or something that
              helps you relax. Gaming doesn't usually count, because it can make
              you more excited, but something that helps you slow your breathing
              and look away from your problems is a great way to improve your
              mental health.
            </li>
          </ul>
        </section>
        <Link href="/home">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default HealthTipsPage
