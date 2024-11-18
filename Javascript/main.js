const footer = document.getElementById("footer");
const x = new Date();
footer.textContent = x.getFullYear();
console.log(x.toDateString());
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
console.log(greetingText());

//makes an alert button that displays the value within the alert function
greetingElement.textContent = greetingText();

const clickme = document.getElementById('btn-alert');
clickme.addEventListener('click', function(){
    alert('Welcome to my online portfolio!')
})

//changes the button when hovered over and change back after
clickme.onmouseover = function(){
    clickme.innerText = 'Do it!'
};
clickme.onmouseout = function(){
    clickme.innerText = 'Click Me!'
};

//populate and ordered list in the browser that presents even and odd values
const numberlist = document.getElementById('numbers');
for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement("li");

    if (i % 2 === 0) {
        listItem.textContent = `${i} - even`;
    } else {
        listItem.textContent = `${i} - odd`;
    }
    numberlist.appendChild(listItem);
    }
