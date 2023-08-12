import { useState } from "react";

const validResponses = ["physically healthy", "physically moderate", "physically unhealthy", "mentally healthy", "mentally unhealthy", "mentally moderate"]; // Array of valid names

export default function UserInput() {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
    setIsValid(validResponses.includes(inputValue)); // Check if input is in validResponses
  };

  let responseMessage;

  if (!isValid) {
    responseMessage = "Please enter a valid health state: " + validResponses.join(", ");
  } else if (validResponses.includes(name)) {
    if (name === "physically healthy") {
      responseMessage = "You're doing great! Keep it up!";
    } else if (name === "physically moderate" || name === "mentally moderate") {
      responseMessage = "You could be healthier, why don't you try looking at the Health Tips page to see how you can be the best you you can be!";
    } else if (name === "physically unhealthy") {
      responseMessage = "Let's try to get into the healthy category! That's why we're here! Try a diet, or an excersice routine. Check out the Health Tips page for more in-depth diets, excersice routines, and health checks!";
    } else if (name === "mentally healthy") {
        responseMessage = "That's awesome to hear! Keep it up!";
      } else if (name === "mentally unhealthy") {
        responseMessage = "If you are feeling down, try taking a walk. Have fun with some friends. Do something you enjoy. The Health Tips page might provide solutions to feeling better.";
      }
  } else {
    responseMessage = "You are (health state)";
  }

  return (
    <>
      <input
        value={name}
        onChange={handleInputChange}
        style={{ color: 'blue' }} // Set the text color of the input
      />
      <p>{responseMessage}</p>
    </>
  );
}






