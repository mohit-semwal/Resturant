let bookBtn = document.querySelector("#tableBookBtn")
let Name = document.querySelector("#name")
let Email = document.querySelector("#email")
let mobileNumber = document.querySelector("#mobileNumber")
let date = document.querySelector("#date")
let time = document.querySelector("#time")
let thankYouDiv = document.querySelector(".thankYouDiv")
let paymentDiv = document.querySelector(".paymentDiv")
let closeIcon = document.querySelector(".close")
let paymentBtn = document.querySelector("#paymentBtn")


let nameError = document.getElementById("NameError")
let emailError = document.getElementById("emailError")
let mobileError = document.getElementById("mobileError")
let dateError = document.getElementById("dateError")
let timeError = document.getElementById("timeError")

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
   if(Name.value==""){
    nameError.style.display="block"
   }
   if(Email.value ==""){
    emailError.style.display="block"
   }
   if(mobileNumber.value ==""){
    mobileError.style.display="block"
   }
   if(date.value ==""){
    dateError.style.display="block"
   }
   if(time.value ==""){
    timeError.style.display="block"
   }
   if(Name.value !== "" && Email.value !== ""&& mobileNumber.vlaue !== "" 
    && date.value !=="" && time.value !==""){
        thankYouDiv.style.display="block"
    }
    closeIcon.addEventListener("click",()=>{
        thankYouDiv.style.display="none"
     })
})
paymentBtn.addEventListener("click",()=>{
    setTimeout(()=>{
        paymentDiv.style.display="block"
    },1000)
    thankYouDiv.style.display="none"
})