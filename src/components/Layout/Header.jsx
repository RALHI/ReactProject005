import { Fragment } from "react";
import classes from './Header.module.css';
import BannerImage from '../../assets/HeaderImage.jpg';
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props){
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>FoodJunction</h1>
                <HeaderCartButton onShowCart={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={BannerImage} alt="BannerImage"></img>
            </div>
        </Fragment>
    );
}