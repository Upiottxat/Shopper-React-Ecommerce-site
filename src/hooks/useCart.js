
import { toast } from "react-hot-toast"
import { useCartContext } from "../context/CartContext";
const useCart = () => {
    const { cartData, setCartData } = useCartContext();

    const addToCart = (productDetails) => {
        const { quantity, size, price, id } = productDetails;

        if (!quantity || quantity <= 0) {
            toast.error("Please select a quantity");
            return;
        }

        if (!size) {
            toast.error("Please select a size");
            return;
        }

        if (!price) return;

        const existingProduct = cartData.find(item => item.id === id);

        if (existingProduct) {
            const updatedCart = cartData.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
            setCartData(updatedCart);
            toast.success("Item quantity updated in cart");
        } else {
            setCartData([...cartData, productDetails]);
            toast.success("Item added to cart");
        }

        console.log(cartData);
    };

    const changeQuantityOfProduct = (id, quantity, new_price) => {
        const updatedCart = cartData.map(item =>
            item.id === id
                ? { ...item, quantity: quantity, price: quantity * new_price }
                : item
        );
        setCartData(updatedCart);
        console.log("Updated cart data for quantity and price" + quantity, updatedCart);
    }

    return { addToCart, changeQuantityOfProduct };
};

export default useCart;
