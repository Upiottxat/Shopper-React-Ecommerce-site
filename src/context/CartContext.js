import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const cartContext = createContext(null)
export const useCartContext = () => {
    return useContext(cartContext)
}

const CartContextProvider = (props) => {
    const [cartData, setCartData] = useState([]);

    return (
        <cartContext.Provider value={{ cartData, setCartData }}>{props.children}</cartContext.Provider>
    )
}
export default CartContextProvider;