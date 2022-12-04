import Button from "../Button/Button";
import classes from "./Hero.module.scss";
import { FaAngleRight } from 'react-icons/fa';

const Hero = () => {
	return (
		<div className={classes.hero}>
			<div className={classes.left}>
				Мы <span>доставим</span> вашу <span>посылку</span> по всему <span>миру</span>
			</div>

			<div className={classes.right}>
				<ul>
					<li><FaAngleRight/>Грузовые перевозки</li>
					<li><FaAngleRight/>Страхование грузов</li>
					<li><FaAngleRight/>Собственный автопарк</li>
					<li><FaAngleRight/>Автомобили от 2 до 20 тонн</li>
				</ul>
				<Button link="/about" text="Подробнее" width="100%" />
			</div>
		</div>
	);
};

export default Hero;
