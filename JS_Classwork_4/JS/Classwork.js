 class Form {
    constructor() {
        this.#initElements()
        this.#addListeners()
    }

    #initElements() {
        this.NAME = document.querySelector("#name")
        this.SURNAME = document.querySelector("#surname")
        this.PHONE = document.querySelector("#phone")
        this.EMAIL = document.querySelector("#email")
        this.SELECT = document.querySelector("#dist")
        this.FILE = document.querySelector("#file")

        // show places
        this.SHOW_NAME = document.querySelector("#show_name")
        this.SHOW_SURNAME = document.querySelector("#show_surname")
        this.SHOW_PHONE = document.querySelector("#show_number")
        this.SHOW_EMAIL = document.querySelector("#show_email")
        this.SHOW_SELECT = document.querySelector("#show_dist")
        this.SEND_BTN = document.querySelector("#send_btn")

    }
    #addListeners() {
        this.SEND_BTN.addEventListener("click", (e) => {
            e.preventDefault()
            let data = this.#getDataFromFields()
            console.log("DATA", data)
            const IS_VALID = this.#validDateData(data)
            IS_VALID ? this.#sendToServer(data) : alert("Field is not valid!")
        })

        this.FILE.addEventListener("input", (e) => {
            const file = e.target.files[0] // [[Some]].flat()
            let formData = new FormData()
            formData.append("files", file)
        })


        // SHOW PARAMETERS
        this.NAME.addEventListener("input", (e) => {
            if (!this.NAME.value.length) {
                this.SHOW_NAME.innerHTML = "some name"
            }
            else {
                this.SHOW_NAME.innerHTML = e.target.value
            }
        })

        this.SURNAME.addEventListener("input", (e) => {
            if (!this.SURNAME.value.length) {
                this.SHOW_SURNAME.innerHTML = "some surname"
            }
            else {
                this.SHOW_SURNAME.innerHTML = e.target.value
            }
        })

        this.PHONE.addEventListener("input", (e) => {
            if (!this.PHONE.value.length) {
                this.SHOW_PHONE.innerHTML = "some number"
            }
            else {
                this.SHOW_PHONE.innerHTML = e.target.value
            }
        })

        this.EMAIL.addEventListener("input", (e) => {
            if (!this.NAME.value.length) {
                this.SHOW_EMAIL.innerHTML = "some email"
            }
            else {
                this.SHOW_EMAIL.innerHTML = e.target.value
            }

        })

        this.SELECT.addEventListener("input", (e) => {
            this.SHOW_SELECT.innerHTML = e.target.value
            if (!this.NAME.value.length) {
                this.SHOW_NAME.innerHTML = "some name"
            }
        else {
                this.SHOW_NAME.innerHTML = e.target.value
            }

        })
    }
    #getDataFromFields() {
        return {
            name: this.NAME.value,
            surname: this.SURNAME.value,
            phone: this.PHONE.value,
            email: this.EMAIL.value,
            select: this.SELECT,
            file: this.FILE
        }
    }
    #validDateData(data) {
        return data.name.length >= 3;

    }
    #sendToServer(data) {
        return {
            status: true,
            txt: "Some text"
        }
    }
 }





 // start point

 document.addEventListener("DOMContentLoaded", (e) => {
     const form = new Form()
     const email = document.querySelector("#email")
     console.log(email)
 })
