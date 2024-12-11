const showPopUpbtn = document.querySelector(".login")
const formPopup =document.querySelector("form__popup")
const hidePopUpbtn = document.querySelector(".form__popup .close__btn")
const loginSignUpLink = document.querySelectorAll(".form__box .bottom__link a")
// show form popup
showPopUpbtn.addEventListener("click", () => {
  document.body.classList.toggle("show__popup")
})

// hide form popup
hidePopUpbtn.addEventListener("click", () => showPopUpbtn.click())

loginSignUpLink.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup__link" ? 'add' : 'remove']("show__signup")
  })
})