let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyfieldMessages = document.querySelectorAll(".empty-field");

let showPasswordBtn = document.querySelector(".btn")

let firstName, lastName, email, password;
let field;

let fnTarget, lnTarget, eTarget, pwdTarget;
let fnFlag, lnFlag, eFlag, pwdFlag;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


for (let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}

for (let emptyFieldMessage of emptyfieldMessages){
    emptyFieldMessage.classList.add("d-none");
}


formData.addEventListener("keyup", (event) => {
    event.preventDefault();
    field = event.target.dataset.key;
    switch(field){
        case "firstName":
            firstName = event.target.value;
            fnTarget = event.target;
            break;
        case "lastName":
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email":
            email = event.target.value;
            eTarget = event.target;
            break;
        case "password":
            password = event.target.value;
            pwdTarget = event.target;
            break;     
        default:
            firstName = lastName = email = password = "";
            break;       
    }
})

submitButton.addEventListener("click", (event => {
    event.preventDefault();
    console.log(firstName, lastName, email, password);
    if (firstName){
        emptyfieldMessages[0].classList.add("d-none");
        if (!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
            //console.log("Name must contain only alphabets");
            fnFlag = false;
        }
        else{
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            //console.log("Good to go");
            fnFlag = true
        }
    }else {
        emptyfieldMessages[0].classList.remove("d-none");
        //console.log("FirstName Empty");
    }
    
    if (lastName){
        emptyfieldMessages[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none");
            //console.log("Name must contain only laphabets");
            lnFlag = false;
        }
        else{
            lnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            //console.log("Good to go");
            lnFlag = true;
        }
    }else{
        emptyfieldMessages[1].classList.remove("d-none");
        //console.log("LastName Empty");
    }

    if (email){
        emptyfieldMessages[2].classList.add("d-none");
        if (!emailRegex.test(email)){
            eTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none");
            //console.log("Invalid Email");
            eFlag = true;
        }
        else{
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            //console.log("Good to go");
            eFlag = true;
        }

    }else{
        emptyfieldMessages[2].classList.remove("d-none");
        //console.log("Email Empty");
    }
    
    if (password){
        emptyfieldMessages[3].classList.add("d-none");
        if (!pwdRegex.test(password)){
            pwdTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none");
            //console.log("Invalid password");
            pwdFlag = false;
        }
        else{
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            //console.log("Good to go");
            pwdFlag = true;
        }

    }else{
        emptyfieldMessages[3].classList.remove("d-none");
        //console.log("Password Empty");
    }

    if(fnFlag && lnFlag && eFlag && pwdFlag){
        fnTarget.value = lnTarget.value = eTarget.value = pwdTarget = "";
        window.location.href = "/success.html";
    }

}))


showPasswordBtn.addEventListener("click", (event) => {
event.preventDefault();
if (pwdTarget.getAttribute("type") === "text"){
    pwdTarget.setAttribute("type", "password");
}else{
    pwdTarget.setAttribute("type", "text")
}
})