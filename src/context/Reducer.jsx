 const reducer = (state, action) =>{

if(action.type==="HOME_UPDATE"){
    return{
        ...state,
        name:action.payload.name,
        image:action.payload.image,
        description:action.payload.description,  

    };
}

if(action.type==="ABOUT_UPDATE"){
    return{
        ...state,
        name:action. payload.name,
        image:action. payload.image,
        description:action.payload.description,  
    };
}

if(action.type==="GET_SERVICES"){
    return{
        ...state,
        services: action.payload,
    };
}
return state;
}
export default reducer;