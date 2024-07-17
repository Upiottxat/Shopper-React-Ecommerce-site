import React from 'react';
import allProduct from "../components/Assets/all_product"
export const ShopContext = React.createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = allProduct
    return (

        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}



export default ShopContextProvider