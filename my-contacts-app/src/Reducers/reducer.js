const initialState = {
    contactDeatils:[
        {
            id:1,
            name:"venkhat balaji",
            emailId:'venkhatbalaji@gmail.com',
            phoneNumber:'9003164637',
            companyDetails:'Cognizant'
        },        
    ],
    addToContact: false,
    selectedItem:[ ],
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "GET_CONTACTS":
            const contact = state.contactDeatils.filter((contacts)=>{
                   return contacts.id === action.id;
            });
            return{
                ...state,
                selectedItem:contact
            };
        case "ADD_CONTACTS":
            console.log(state);
            action.payload.id = state.contactDeatils[state.contactDeatils.length - 1].id + 1;
            return{
                ...state,
                contactDeatils:[
                    ...state.contactDeatils,
                    action.payload
                ]
            }
        case "ADD_TO_CONTACT_CLICKED":
            state.addToContact = true;
            return{
                ...state
            }
        case "CLOSE_ADD_TO_CONTACT":
            state.addToContact = false;
            return{
                ...state
            }
        default: 
            return state;
    }
}

export default reducer;