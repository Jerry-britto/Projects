const products = []

export const getProductsReducer = (state={products},action) =>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTS":
            return {products:action.payload}
        case "FAIL_TO_GET_PRODUCTS":
            return {products:action.payload}
        default:
            return state
    }
}