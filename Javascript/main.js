const footer = document.getElementById("footer");
const x = new Date();
footer.textContent = x.getFullYear();
//to log the full date to the developer console, I performed: conosle.log(x.toDateString());, and that will print the full date to console


//creates a text that displays and returns a different message based on the time of day
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

//makes an alert button that displays the value within the alert function
greetingElement.textContent = greetingText();

const clickme = document.getElementById('btn-alert')
clickme.addEventListener('click', function(){
    alert('Welcome to my online portfolio!')
})

