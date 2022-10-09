import CartIcon from "../Cart/Cartlcon";
import classes from './HeaderCartButton.module.css'
const HeaderCardButton = () =>{
    return <button className={classes.button}>
        <span className={classes.icon} >
            <CartIcon/>
        </span>
        <span> Your Card </span>
        <span className={classes.badge}>3</span>
    </button>
}
export default HeaderCardButton;