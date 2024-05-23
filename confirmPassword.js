const firstField = document.getElementById("password");
const secondField = document.getElementById("confirmPassword");

function comparePasswords(){
    if(firstField.value == secondField.value){
        return true;
    }
    return false;
}
firstField.addEventListener("change", ()=>{
    if(comparePasswords()){
        console.log("passwords match");
    }else{
        secondField.setAttribute("isvalid", "false");
    }

});
secondField.addEventListener("change", ()=>{
    if(comparePasswords()){
        console.log("passwords matchy");
    }else{
        secondField.setAttribute("isvalid", "false");
    }
});