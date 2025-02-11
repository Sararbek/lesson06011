export const initialValue = {
    wishlist: []
}

export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_WISH":
            let index = state.wishlist.findIndex(item => item.id === action.payload.id)
            if(index < 0){
                return {...state, wishlist: [...state.wishlist, action.payload]}
            }else{
                return {...state, wishlist: [...state.wishlist.filter(({id}) => id !== action.payload.id)]}
            }
        default: 
            return state
    }
}