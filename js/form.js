const form = document.getElementById("form")
const fNameInput = document.getElementById("fname")
const lNameInput = document.getElementById("lname")
const emailInput = document.getElementById("email")
const subjectInput = document.getElementById("subject")
const message = document.getElementById("message")
const regex = /^[A-Za-z\s]+$/;

form.addEventListener("submit",function(event){
    event.preventDefault();

    if(emailInput.value === "" || fNameInput.value === "" || lNameInput.value === "" || message.value === ""){
        alert("❌ Please fill in all fields.")
        return
    }
    if(!emailInput.value.includes("@") || !emailInput.value.includes(".")){
        alert("⚠️ Please enter a valid email address.")
        return
    }
    if(!regex.test(fNameInput.value)){
        alert("The First Name containe numbers")
        return
    }
    if(!regex.test(lNameInput.value)){
        alert("The Last Name containe numbers")
        return
    }
    if(fNameInput.value.includes(" ")){
        alert("⚠️ The First Name contain space.")
        return
    }
    if(lNameInput.value.includes(" ")){
        alert("⚠️ The Last Name contain space.")
        return
    }
    if(message.value.length < 6){
        alert("Please Enter the at least 6 letters in the Message Box")
        return
    }
    emailjs.send("service_ve7eymo", "template_0vdynte",{
        user_fName: fNameInput.value,
        user_lName:lNameInput.value,
        user_email: emailInput.value,
        message: message.value,
        user_subject:subjectInput.value
    })
    .then(() => {
        alert("✅ Email sent successfully!")
        form.reset();
    })
    .catch((error) => {
        alert("❌ Something went wrong. Try again.")
        console.log("EmailJS Error:",error)
    })
})
