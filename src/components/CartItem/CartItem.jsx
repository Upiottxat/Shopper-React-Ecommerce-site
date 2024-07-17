import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';

const CartItem = ({ imgSrc, imgAlt, productName, productDescription, price, Quantity, id, new_price }) => {
    const [QuantityState, setQuantityState] = useState(Quantity);
    const { changeQuantityOfProduct } = useCart();

    const changeQuantity = (action) => {
        let newQuantity = QuantityState;
        if (action === "minus" && QuantityState > 1) {
            newQuantity = QuantityState - 1;
        } else if (action === "plus") {
            newQuantity = QuantityState + 1;
        } else if (typeof action === "object") {
            newQuantity = Number(action.target.value);
        }

        setQuantityState(newQuantity);
        changeQuantityOfProduct(id, newQuantity, new_price);
    }

    return (
        <React.Fragment>
            <div className="row mb-4 d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                    <img src={imgSrc} className="img-fluid rounded-3" alt={imgAlt} />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                    <h6 className="text-muted">{productName}</h6>
                    <h6 className="mb-0">{productDescription}</h6>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button className="btn btn-link px-2" onClick={() => changeQuantity("minus")}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <input id="form1" min="0" name="quantity" value={QuantityState} type="text" className="form-control form-control-sm" style={{ boxShadow: 'none' }} onChange={changeQuantity} />
                    <button className="btn btn-link px-2" onClick={() => changeQuantity("plus")}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h6 className="mb-0">₹{price}</h6>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                </div>
            </div>
            <hr className="my-4" />
        </React.Fragment>
    );
};

export default CartItem;
