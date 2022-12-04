import { useContext } from "react";
import LangContext from "../../context/LangProvider";
import HomePageContext from "../../context/Pages/HomePageProvider";
import Slider from "../Slider/Slider";
import classes from "./Order.module.scss";

const Order = () => {

	const homePageContext = useContext(HomePageContext);
	const { lang } = useContext(LangContext);

	let heading = '';
	let from = '';
	let to = '';
	let size = '';
	let phone = '';
	let button = '';

	if(lang == 'ru') {
		heading = homePageContext.order.heading.ru
		from = homePageContext.order.from.ru
		to = homePageContext.order.to.ru
		size = homePageContext.order.size.ru
		phone = homePageContext.order.phone.ru
		button = homePageContext.order.button.ru
	}

	if(lang == 'en') {
		heading = homePageContext.order.heading.en
		from = homePageContext.order.from.en
		to = homePageContext.order.to.en
		size = homePageContext.order.size.en
		phone = homePageContext.order.phone.en
		button = homePageContext.order.button.en
	}

	if(lang == 'tu') {
		heading = homePageContext.order.heading.tu
		from = homePageContext.order.from.tu
		to = homePageContext.order.to.tu
		size = homePageContext.order.size.tu
		phone = homePageContext.order.phone.tu
		button = homePageContext.order.button.tu
	}

	return (
		<div className={classes.order}>
			<div className={classes.form}>
				<h4>{heading}</h4>
				<form action="">
					<input type="text" placeholder={from} />
					<input type="text" placeholder={to} />
					<input type="text" placeholder={size} />
					<input type="text" placeholder={phone} />
					<input type="submit" value={button} className={classes.submit} />
				</form>
			</div>
			<Slider>
				<img src="/images/slide-2.jpg" alt="" />
				<img src="/images/slide-1.jpg" alt="" />
				<img src="/images/slide-3.jpg" alt="" />
				<img src="/images/slide-4.jpg" alt="" />
				<img src="/images/slide-5.jpg" alt="" />
			</Slider>
		</div>
	);
};

export default Order;
