//  Access elements
let heading = document.getElementById("main");
let message = document.querySelector(".message");

console.log("Heading text:", heading.textContent);
console.log("Message text:", message.textContent);

//  Change content
heading.textContent = "Welcome to JavaScript DOM!";
message.textContent = "This message has been updated.";

//  Change styles
heading.style.color = "blue";
message.style.backgroundColor = "#f0f0f0";

// Add new element
let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph added with JS.";
document.body.appendChild(newPara);

// Remove element
// document.body.removeChild(message); 

//  Event Handling
function changeText() {
  heading.textContent = "Button was clicked!";
  heading.style.color = "green";
}
