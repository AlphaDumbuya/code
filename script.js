function showBotMessage(message) {
    const conversation = document.getElementById("conversation");
    const botMessage = document.createElement("p");
    botMessage.classList.add("bot");
    botMessage.textContent = "Bot: " + message;
    conversation.appendChild(botMessage);
}

function tellJoke() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    document.getElementById("userInput").value = "";

    if (userInput === "dad jokes") {
        showBotMessage("Please choose either 'pun', 'programming', or 'anti'.");
    } else if (userInput === "pun") {
        showBotMessage("Why did Adele cross the road? To say hello from the other side.");
        showBotMessage("Do you want to hear another joke? Just type 'yes' or 'no'.");
    } else if (userInput === "yes") {
        showBotMessage("Please choose either 'pun', 'programming', or 'anti'.");
    } else if (userInput === "programming") {
        showBotMessage("What do you call a programmer from Finland? Nerdic.");
        showBotMessage("Do you want to hear another joke? Just type 'yes' or 'no'.");
    } else if (userInput === "no") {
        showBotMessage("See you next time!");
    } else {
        showBotMessage("I'm sorry, I don't understand. Please follow the conversation prompts.");
    }
}
