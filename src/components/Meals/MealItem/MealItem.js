import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem = props => {
    const price = `$${props.price.toFixed(2)}`
    return <li className={classes.meal}>
        <div>{props.name}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div>
            <MealItemForm/>
        </div>
    </li>
}
export default MealItem;