/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded",function() {
    const email=document.getElementById("email");
    let message=document.querySelector(".message");
    const form = document.querySelector("form");

    form.addEventListener("submit",function(event){
       
        let userEmailAddress = email.value;

        if(userEmailAddress.trim()===""){
            message.innerHTML="Please enter a valid email address.";
        }
        else{
            message.innerHTML="Thank you! Your email address" + " " +userEmailAddress+ " " + " has been added to our mailing list!";
        }
    });
});
    