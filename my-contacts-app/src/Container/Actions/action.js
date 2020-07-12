export function AddContacts(payload){
    return{
        type:"ADD_CONTACTS",
        payload: payload
    }
}

export function GetContacts(id){
    console.log(id);
    return{
        type:"GET_CONTACTS",
        id : id
    }
}

export function AddToContactClicked(){
    return{
        type:"ADD_TO_CONTACT_CLICKED",
    }
}

export function CloseAddToContact(){
    return{
        type:"CLOSE_ADD_TO_CONTACT"
    }
}