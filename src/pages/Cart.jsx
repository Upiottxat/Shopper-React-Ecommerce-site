import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem/CartItem';
import { useCartContext } from '../context/CartContext';
import "./css/Cart.css";
import useCart from '../hooks/useCart';

const Cart = () => {
    const { cartData } = useCartContext();
    const [totalPrice, setTotalPrice] = useState(0);
    const StandardDelivery = 5;

    useEffect(() => {
        const calculateTotalPrice = () => {
            const total = cartData.reduce((acc, item) => acc + item.new_price * item.quantity, 0);
            setTotalPrice(total);
        };
        calculateTotalPrice();
    }, [cartData]);

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: '#FFF5E1' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="fw-bold mb-0">Shopping Cart</h1>
                                                <h6 className="mb-0 text-muted">{cartData.length} items</h6>
                                            </div>
                                            <hr className="my-4" />
                                            {cartData.map((product, index) => (
                                                <CartItem
                                                    key={index}
                                                    imgSrc={product.image}
                                                    imgAlt={product.name}
                                                    productName={product.name}
                                                    productDescription={product.description}
                                                    price={product.new_price}
                                                    new_price={product.new_price}
                                                    Quantity={product.quantity}
                                                    id={product.id}
                                                />
                                            ))}
                                            <div className="pt-5">
                                                <h6 className="mb-0"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 bg-body-tertiary">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                            <hr className="my-4" />
                                            <div className="d-flex justify-content-between mb-4">
                                                <h5 className="text-uppercase">{cartData.length} items</h5>
                                                <h5>₹{totalPrice}</h5>
                                            </div>
                                            <h5 className="text-uppercase mb-3">Shipping</h5>
                                            <div className="mb-4 pb-2">
                                                <select>
                                                    <option value="1">Standard-Delivery- ₹{StandardDelivery}</option>
                                                </select>
                                            </div>
                                            <h5 className="text-uppercase mb-3">Give code</h5>
                                            <div className="mb-5">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                                                </div>
                                            </div>
                                            <hr className="my-4" />
                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">Total price</h5>
                                                <h5>₹{totalPrice + StandardDelivery}</h5>
                                            </div>
                                            <button type="button" className="btn btn-dark btn-block btn-lg">Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
