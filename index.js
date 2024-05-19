const colors = ["green", "red", "blue", "rgba(133, 244, 123)"];
const btn = document.getElementById("btn");
console.log(btn);
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = 2
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    console.log(color);
});