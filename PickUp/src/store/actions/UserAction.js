
export const actionLogin = (tokken) => {
    return { 
        type: "IS_LOGGED_IN", 
        value : tokken 
    };
}



// export const actionLogin = () => ({ 
//         type: "IS_LOGGED_IN", 
//         value : false  
// });
