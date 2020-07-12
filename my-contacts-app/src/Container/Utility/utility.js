export const PhoneNumberValidation = (phoneNumber) =>{
    if(phoneNumber){
        let phoneno = /^\d{10}$/;
        if((phoneno.test(phoneNumber))){
            return true;
        }else{
            document.getElementById("phoneNumber-Id").style.border = "2px solid red";
            return false;
        }
    }
    else{
        document.getElementById("phoneNumber-Id").style.border = "2px solid red";
        return false;
    }

}

export const NameValidation = (fullName) =>{
    if(fullName){
        let regName = /^[a-zA-Z].*[\s]*$/g;;
        if(regName.test(fullName)){
            return true;
        }else{
            document.getElementById("name-Id").style.border = "2px solid red";
            return false;
        }
    }else{
        document.getElementById("name-Id").style.border = "2px solid red";
        return false;
    }
}

export const CompanyNameValidation = (fullName) =>{
    if(fullName){
        let regName = /^[a-zA-Z].*[\s]*$/g;;
        if(regName.test(fullName)){
            return true;
        }else{
            document.getElementById("companyDetails-Id").style.border = "2px solid red";
            return false;
        }
    }else{
        document.getElementById("companyDetails-Id").style.border = "2px solid red";
        return false;
    }
}


export const EmailValidation = (emailId) =>{
    if(emailId){
        let regEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        if(regEmail.test(emailId)){
            return true;
        }else{
            document.getElementById("emailId-Id").style.border = "2px solid red";
            return false;
        }
    }else{
        document.getElementById("emailId-Id").style.border = "2px solid red";
        return false;
    }
}