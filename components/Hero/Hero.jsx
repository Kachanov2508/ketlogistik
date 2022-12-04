import Button from "../Button/Button";
import classes from "./Hero.module.scss";
import { FaAngleRight } from 'react-icons/fa';
import { useContext } from "react";
import HomePageContext from "../../context/Pages/HomePageProvider";
import LangContext from "../../context/LangProvider";

const Hero = () => {

	const homePageContext = useContext(HomePageContext);
	const { lang } = useContext(LangContext);



	// Выбор языка
	let heading = '';
	let list = [];
	let button = '';

	if(lang === 'ru') {
		heading = homePageContext.hero.heading.ru;
		list = homePageContext.hero.list.ru;
		button = homePageContext.hero.button.ru;
	}

	if(lang === 'en') {
		heading = homePageContext.hero.heading.en;
		list = homePageContext.hero.list.en;
		button = homePageContext.hero.button.en;
	}

	if(lang === 'tu') {
		heading = homePageContext.hero.heading.tu;
		list = homePageContext.hero.list.tu;
		button = homePageContext.hero.button.tu;
	}

	

	return (
		<div className={classes.hero}>
			<div className={classes.left}>
				{heading}
			</div>

			<div className={classes.right}>
				<ul>
					{ list.map((item, index) => <li key={index}><FaAngleRight/>{item}</li>) }
				</ul>
				<Button link="/about" text={button} width="100%" />
			</div>
		</div>
	);
};

export default Hero;
