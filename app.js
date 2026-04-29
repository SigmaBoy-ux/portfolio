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



const submitButton = document.querySelector(".send");


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        disableSubmit();

        const name = form.querySelector(".name").value.trim();
        const email = form.querySelector(".email").value.trim();
        const message = form.querySelector(".textarea").value.trim();

        // Telegram API uchun kerakli ma’lumotlar
        const token = "8765513285:AAFSmWwzWSt7hUEN0X1zqcWUGNg2hjyZDQ0";
        const chat_id = "5964694487";
        const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

        const text = `
📩 *Yangi ariza!*
👤 Ismi: *${name}*
✉️ Email: *${email}*
💬 Izoh: ${message}
    `;
        console.log(text);

        // API orqali yuborish
        fetch(telegramUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chat_id,
                text: text,
            }),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTimeout(() => {
                enableSubmit();
                }, 1000);
                if (data.ok) {
                    setTimeout(() => {
                        Swal.fire({
                            title: "Yuborildi",
                            text: "Xabar muvaffaqiyatli jo'natildi",
                            icon: "success"
                        });
                    }, 1000);
                    form.reset();
                } else {
                    Swal.fire({
                        title: "Xatolik",
                        text: data.description || "Xatolik yuz berdi",
                        icon: "error"
                    });
                }
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: "Xatolik",
                    text: "Server bilan ulanishda muammo",
                    icon: "error"
                });
            });
    });
});


function disableSubmit() {
    submitButton.disabled = true
    submitButton.style.opacity = '0.5'
    submitButton.style.cursor = 'not-allowed'
    submitButton.textContent = 'Yuborilmoqda...'
}

function enableSubmit() {
    submitButton.disabled = false
    submitButton.style.opacity = '1'
    submitButton.style.cursor = 'pointer'
    submitButton.textContent = 'Yuborish'
}


window.addEventListener('scroll', function () {
    const arrowUp = document.querySelector('.top');
   if (window.scrollY > 800) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
});


let skills = document.querySelectorAll(".progress-line span");


let observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {


      if (entry.target.classList.contains("html-bar")) {
        entry.target.style.width = "90%"
      }

      else if (entry.target.classList.contains("css-bar")) {
        entry.target.style.width = "96%"
      }

      else if (entry.target.classList.contains("javascript-bar")) {
        entry.target.style.width = "90%"
      }

      else if (entry.target.classList.contains("python-bar")) {
        entry.target.style.width = "75%"
      }

    }
    else {
      if (entry.target.classList.contains("html-bar")) {
        entry.target.style.width = "0"
      }

      else if (entry.target.classList.contains("css-bar")) {
        entry.target.style.width = "0"
      }

      else if (entry.target.classList.contains("javascript-bar")) {
        entry.target.style.width = "0"
      }

      else if (entry.target.classList.contains("python-bar")) {
        entry.target.style.width = "0"
      }

    }

  })
})

skills.forEach((skill) => {
  observer.observe(skill)
})
