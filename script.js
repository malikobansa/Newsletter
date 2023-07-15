let body = document.getElementsByTagName('body')
const Btn = document.getElementById('Btn');
let subscribe = document.getElementById('subscribed');

Btn.addEventListener('click', () => {
    subscribe.style.display = "block";
})

const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', () => {
    subscribe.style.display = "none"
})
