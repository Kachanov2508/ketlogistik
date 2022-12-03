import Slider from "../Slider/Slider";
import classes from "./Order.module.scss";

const Order = () => {
	return (
		<div className={classes.order}>
			<div className={classes.form}>
				<h4>Заявка на рассчет</h4>
				<form action="">
					<input type="text" placeholder="Откуда" />
					<input type="text" placeholder="Куда" />
					<input type="text" placeholder="Вес/Объем" />
					<input type="text" placeholder="Телефон" />
					<input type="submit" value="Заказать" className={classes.submit} />
				</form>
			</div>
			<Slider>
				<img src="/images/slide-1.jpg" alt="" />
				<img src="/images/slide-2.jpg" alt="" />
				<img src="/images/slide-3.jpg" alt="" />
				<img src="/images/slide-4.jpg" alt="" />
				<img src="/images/slide-5.jpg" alt="" />
			</Slider>
		</div>
	);
};

export default Order;
