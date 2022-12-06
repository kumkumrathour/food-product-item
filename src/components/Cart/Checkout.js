import {useRef , useState} from 'react';

import classes from './Checkout.module.css';

const isEmpty = value => value.trim() ==='';
const isFiveChars = value => value.trim().length === 5;


const Checkout = props => {
      const [formInputIsValidity , setFormInputIsValidity] =useState({
        name:true ,
        street:true,
        city:true,
        postalCode:true
      });
    
    const nameInputRef = useRef();
    const streetInputRef =useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef(); 


     const confirmHandler = (event) =>{
        event.preventDefault();
       const enteredName= nameInputRef.current.value;
       const enteredStreet = streetInputRef.current.value;
       const enteredPostalCode = postalCodeInputRef.current.value;
       const enteredCity = cityInputRef.current.value;

       const enteredNameIsValid = !isEmpty(enteredName);
       const enteredStreentIsValid = !isEmpty(enteredStreet);
       const enteredCityIsValid = !isEmpty(enteredCity);
       const enteredPostalCodeIsValid = !isEmpty(enteredPostalCode);

     setFormInputIsValidity({
        name:enteredNameIsValid,
        street: enteredCityIsValid,
        city:enteredCityIsValid,
        postalCode:enteredPostalCodeIsValid
     })



       const formIsValid = enteredNameIsValid &&
        enteredStreentIsValid &&
        enteredCityIsValid &&
        enteredPostalCodeIsValid 

      
        if(!formIsValid){
            return 
        }
        props.onConfirm({
            name:enteredName,
            street: enteredStreet,
            city:enteredCity,
            postalCode: enteredPostalCode
        });
     };


     const nameControlClasses =`${classes.control} 
     ${formInputIsValidity.name ? '': classes.invalid}`;

     const streetControlClasses =`${classes.control} 
     ${formInputIsValidity.street ? '': classes.invalid}`;

     const postalcodeControlClasses =`${classes.control} 
     ${formInputIsValidity.postalCode ? '': classes.invalid}`;

     const cityControlClasses =`${classes.control} 
     ${formInputIsValidity.city ? '': classes.invalid}`;

     return (
        <form className={classes.form} onSubmit={confirmHandler}>
          <div className={nameControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name'  ref={nameInputRef} />
            {!formInputIsValidity.name && <p>please enter the valid name </p>}
          </div>
          <div className={streetControlClasses}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef} />
            {!formInputIsValidity.street && <p>please entered a valid street</p>}
          </div>
          <div className={postalcodeControlClasses}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' ref={postalCodeInputRef}/>
            {!formInputIsValidity.postalCode && <p>please entered the valid postalcode</p>}
          </div>
          <div className={cityControlClasses}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef} />
            {!formInputIsValidity.city && <p> please entered the valid city name </p>}
          </div>
          <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>
              Cancel
            </button>
            <button className={classes.submit}>Confirm</button>
          </div>
        </form>
      );


};
export default Checkout;