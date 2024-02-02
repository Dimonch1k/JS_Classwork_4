
// start point
document.addEventListener("DOMContentLoaded", (e) => {
    const BTN_PRESS = document.querySelector("#btn_press")
    const BTN_FONTS = document.querySelector("#btn_fonts")
    const BTN_GITHUB = document.querySelector("#btn_gitHub")

    BTN_PRESS.addEventListener("click", () => {
        alert("GOOD!")
        window.close()
    })

    BTN_FONTS.addEventListener("click", () => {
        window.open("https://fonts.google.com/", "blank")
    })

    BTN_GITHUB.addEventListener("click", () => {
        window.open("https://github.com/Dimonch1k/", "blank")
    })
})