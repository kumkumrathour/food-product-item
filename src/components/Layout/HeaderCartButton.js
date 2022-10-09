import {useContext} from "react";
import CartIcon from "../Cart/Cartlcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";
const HeaderCardButton = (props) =>{
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber , item) => {
        return curNumber + item.amount ;
    }, 0)
    return <button className={classes.button}   
                onClick = {props.onClick}>
            <span className={classes.icon} >
                    <CartIcon/>
            </span>
            <span> Your Card </span>
            <span className={classes.badge}>{numberOfCartItems}</span>
                 </button>
}
export default HeaderCardButton;