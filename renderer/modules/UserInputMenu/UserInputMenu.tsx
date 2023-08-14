import { useState } from "react";
import Link from "next/link";
import { useAtom } from "jotai";
import { dayDataAtom } from "../../lib/state";

const validResponses = [
  "physically healthy",
  "physically moderate",
  "physically unhealthy",
  "mentally healthy",
  "mentally moderate",
  "mentally unhealthy",
];

declare var healthState: string;

export default function UserInput() {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [savedResponse, setSavedResponse] = useState("");
  const [dayData, setDayData] = useAtom(dayDataAtom);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
    setIsValid(validResponses.includes(inputValue));

    let dayDataCopy = { ...dayData };
    dayDataCopy.healthState = e.target.value;
    setDayData(dayDataCopy);
    saveResponse();
    healthState = e.target.value;
  };

  const saveResponse = () => {
    if (validResponses.includes(name)) {
      setSavedResponse(name);
    }
  };

  let responseMessage = "";
  let healthTip = "";

  if (!validResponses.includes(healthState)) {
    if (healthState == "" || healthState == undefined || healthState == null) {
      responseMessage = "";
    } else {
      responseMessage = "Please enter a valid health state";
    }
  } else if (validResponses.includes(healthState)) {
    switch (healthState) {
      case "physically healthy":
        responseMessage = "Great job on maintaining a healthy physical state!";
        healthTip = "Consider visiting our health tips page for more advice.";
        break;
      case "physically moderate":
        responseMessage = "Moderation is key to a balanced physical state.";
        healthTip =
          "For tips on maintaining a moderate physical state, check out our health tips page.";
        break;
      case "physically unhealthy":
        responseMessage =
          "Consider adopting healthier habits for your physical well-being.";
        healthTip =
          "Looking for ways to improve your physical health? Our health tips page can help.";
        break;
      case "mentally healthy":
        responseMessage = "Your mental well-being is in a good place!";
        healthTip =
          "Continue nurturing your mental health. Our health tips page offers insights.";
        break;
      case "mentally moderate":
        responseMessage =
          "Strive for balance in maintaining your mental health.";
        healthTip =
          "Maintaining a balanced mental state is important. Get tips from our health tips page.";
        break;
      case "mentally unhealthy":
        responseMessage =
          "Take steps to improve your mental well-being and seek support if needed.";
        healthTip =
          "If you're struggling, don't hesitate to seek help. Our health tips page has resources.";
        break;
      default:
        responseMessage = "You are in an undefined health state.";
        break;
    }
  }

  return (
    <>
      <input
        value={dayData.healthState ?? ""}
        onChange={handleInputChange}
        style={{ color: "black" }}
      />
      <button onClick={saveResponse}>Set your health state</button>
      <p>{responseMessage}</p>
      {healthTip && (
        <p>
          {healthTip}{" "}
          <Link href="/health-tips-page">
            <a>Visit our health tips page</a>
          </Link>
        </p>
      )}
      {validResponses.includes(healthState) && (
        <p>Health state: {healthState}.</p>
      )}
    </>
  );
}
