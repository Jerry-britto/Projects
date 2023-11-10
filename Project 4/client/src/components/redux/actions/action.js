//redux thunk is used to place an asynchrounous call since we cannot directly place a asynchronous call in redux

export const getProducts = ()=>async(dispatch)=>{
    try {
        const data = await fetch("/getProducts",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const response = await data.json();
        console.log(response)
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:response})
    } catch (error) {
        dispatch({type:"FAIL_TO_GET_PRODUCTS",payload:error.response})
    }
}