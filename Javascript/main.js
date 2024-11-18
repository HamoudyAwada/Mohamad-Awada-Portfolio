const footer = document.getElementById("footer");
const x = new Date();
footer.textContent = x.getFullYear();
//to log the full date to the developer console, I performed: conosle.log(x.toDateString());, and that will print the full date to console

const hour = x.getHours();
const greetingElement = document.getElementById("greeting");
const greetingText = () => {
    if (hour < 12) {
        greetingElement.className = "morning";
        return ("Good morning!");
    } else if (hour < 17) {
        greetingElement.className = "afternoon";
        return ("Good, afternoon!");
    } else {
        greetingElement.className = "evening";
        return ("Good evening!");
    }
};
greetingElement.textContent = greetingText();
