import { useState } from "react";

const validResponses = [
  "physically healthy",
  "physically moderate",
  "physically unhealthy",
  "mentally healthy",
  "mentally moderate",
  "mentally unhealthy"
];

export default function UserInput() {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [savedResponse, setSavedResponse] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
    setIsValid(validResponses.includes(inputValue));
  };

  const saveResponse = () => {
    if (validResponses.includes(name)) {
      setSavedResponse(name);
    }
  };

  let responseMessage = "";
  let healthTip = "";

  if (!isValid) {
    responseMessage = "Please enter a valid health state";
  } else if (validResponses.includes(name)) {
    switch (name) {
      case "physically healthy":
        responseMessage = "Great job on maintaining a healthy physical state!";
        healthTip = "Consider visiting our health tips page for more advice.";
        break;
      case "physically moderate":
        responseMessage = "Moderation is key to a balanced physical state.";
        healthTip = "For tips on maintaining a moderate physical state, check out our health tips page.";
        break;
      case "physically unhealthy":
        responseMessage = "Consider adopting healthier habits for your physical well-being.";
        healthTip = "Looking for ways to improve your physical health? Our health tips page can help.";
        break;
      case "mentally healthy":
        responseMessage = "Your mental well-being is in a good place!";
        healthTip = "Continue nurturing your mental health. Our health tips page offers insights.";
        break;
      case "mentally moderate":
        responseMessage = "Strive for balance in maintaining your mental health.";
        healthTip = "Maintaining a balanced mental state is important. Get tips from our health tips page.";
        break;
      case "mentally unhealthy":
        responseMessage = "Take steps to improve your mental well-being and seek support if needed.";
        healthTip = "If you're struggling, don't hesitate to seek help. Our health tips page has resources.";
        break;
      default:
        responseMessage = "You are in an undefined health state.";
        break;
    }
  }

  return (
    <>
      <input
        value={name}
        onChange={handleInputChange}
        style={{ color: "black" }}
      />
      <button onClick={saveResponse}>Save Response</button>
      <p>{responseMessage}</p>
      {healthTip && (
        <p>
          {healthTip}{" "}
          <a href="/health-tips-page">Visit our health tips page</a>
        </p>
      )}
      {savedResponse && (
        <p>
          Saved Response: {savedResponse}.
        </p>
      )}
    </>
  );
}
