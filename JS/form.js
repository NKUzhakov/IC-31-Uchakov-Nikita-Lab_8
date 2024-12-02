formData = { email: "", message: "" };

let userForm = document.querySelector(".feedback-form");
userForm.addEventListener("input", inputUpdater);

function inputUpdater(event){
    let targetElement = event.target
    if(targetElement == document.querySelector(".feedback-form input[type = 'email']")){
        formData.email = targetElement.value;
    }
    if(targetElement == document.querySelector(".feedback-form textarea[name = 'message']")){
        formData.message = targetElement.value;
    }
    console.log(formData);
}