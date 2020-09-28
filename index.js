const body = document.querySelector("body")
const start = document.querySelector('[data-action="start"]')
const stop = document.querySelector('[data-action="stop"]')
let starter;

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const switchColor = () => {
    starter = setInterval(() => {
        body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000)
    start.disabled = true
}
const stopSwich = () => {
    clearInterval(starter);
    start.disabled = false
}


start.addEventListener("click", switchColor);

stop.addEventListener("click", stopSwich)




