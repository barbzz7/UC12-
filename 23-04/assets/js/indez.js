
const btn = document.getElementById("id")
const img = document.getElementById("img")


const link1 = './assets/images/alcina antes.webp'
const link2 = './assets/images/alcina depois.jpg'




    btn.addEventListener("click", () => {
    if (img.getAttribute('src') == link2) {
        img.setAttribute('src', link1)
    } else {
        img.setAttribute('src', link2)
    }
})


