const inputs = document.querySelectorAll(".input-form");
const inputName = document.querySelector(".input-name");
const inputLastname = document.querySelector(".input-lastname");
const inputEmail = document.querySelector(".input-email");
const inputPassword = document.querySelector(".input-password");
const btn = document.querySelector(".btn-submit");
const messages = document.querySelectorAll(".msg");
const images = document.querySelectorAll(".error-img")

btn.addEventListener("click",(e)=> {
    e.preventDefault();
    const email = inputEmail.value;
    const inputsArr = ["First Name","Last Name","Password"]
    const regExp1 = /[a-zA-z0-9]+/
    const regExp2 = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2}/

    /*VALIDATIONS*/
     inputs.forEach((input,i) => {
        if(input.value === "" || !regExp1.test(input.value)){
            messages[i].textContent = `${inputsArr[i]} cannot be empty`;
            input.style.border = "2px solid var(--red400)"
            images[i].style.visibility = "visible";
        }else{
             messages[i].textContent = "";
             input.style.border = "1px solid var(--purple350)"
             images[i].style.visibility = "hidden";
        }
    })
    
    
    if(email === ""){
        document.querySelector(".msg-email").textContent = "Email cannot be empty";
        inputEmail.style.border = "2px solid var(--red400)"
        document.querySelector(".email-img").style.visibility = "visible";
    }else if(!regExp2.test(email)){
        document.querySelector(".msg-email").textContent = "Looks like this is not an email";
        inputEmail.style.border = "2px solid var(--red400)"
        document.querySelector(".email-img").style.visibility = "visible";
    }else{
        document.querySelector(".msg-email").textContent = "";
        inputEmail.style.border = "1px solid var(--purple350)"
        document.querySelector(".email-img").style.visibility = "hidden";
    }
    

})

/*Looks like this is not an email*/
/*cannot be empty*/