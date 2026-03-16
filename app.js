let typed = new Typed('.text', {
    strings: ["Frontend Developer", "Web Designer", "Youtuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})

let date = document.querySelector('.date');

setInterval(() => {
    let vaqt = new Date()


    let hour = String(vaqt.getHours()).padStart(2, "0")
    let minute = String(vaqt.getMinutes()).padStart(2, "0")
    let second = String(vaqt.getSeconds()).padStart(2, "0")

    date.innerHTML = `
    <p class="text">${hour}:${minute}:${second}</p>
`
}, 1000)