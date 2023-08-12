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

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
    setIsValid(validResponses.includes(inputValue));
  };

  let responseMessage = "";

  if (!isValid) {
    responseMessage = "Please enter a valid health state";
  } else if (validResponses.includes(name)) {
    if (name === "physically healthy") {
      responseMessage = "Great! Make sure you're mentally healthy too!";
    } else if (name === "physically moderate" || name === "mentally moderate") {
      responseMessage = "Not bad, we could still help you though! Check out the health tips page for some suggestions and plans to add to your calendar!";
    } else if (name === "physically unhealthy") {
      responseMessage = "You should take action and keep yourself in shape, try a diet or excersice schedule on your calendar!";
    } else if (name === "mentally healthy") {
      responseMessage = "Great! Make sure you're in decent shape too!";
    }
    } else if (name === "mentally unhealthy") {
      responseMessage = "Sorry to hear that. Spend some time outside, or doing something you enjoy, or hang out with friends and family. Our health page is here to help you get back into the healthy category!";
    }
   else {
    responseMessage = "You are (health state)";
  }

  return (
    <>
      <input
        value={name}
        onChange={handleInputChange}
        style={{ color: "black" }}
      />
      <p>{responseMessage}</p>
    </>
  );
}