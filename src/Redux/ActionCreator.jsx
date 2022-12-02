export function increamentNumber(payload){
    return{
        type:"INCREAMENET_NUMBER",
        payload:payload
    }
}

export function decreamentNumber(payload){
    return{
        type:"DECREAMENET_NUMBER",
        payload:payload
    }
}

export function checkChange(payload){
    return{
        type:"CHECK_CHANGE"
       
    }
}

export function setUserName(payload){
    return{
        type:"SET_USER_NAME",
        payload
    }
}