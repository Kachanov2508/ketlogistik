import { useRouter } from "next/router";
import { useContext } from "react";

import LangContext from "../../context/LangProvider";
import HomePageContext from "../../context/Pages/HomePageProvider";

import Lang from "../Lang/Lang";
import MyLink from "../MyLink/MyLink";
import classes from "./Navbar.module.scss";

import {FaLanguage} from 'react-icons/fa';

const Navbar = () => {

	const router = useRouter();
	const { lang } = useContext(LangContext);
	const homePageContext = useContext(HomePageContext);

	let home = '';
	let about = '';
	let contact = '';

	if(lang == 'ru') {
		home = homePageContext.navbar.links.home.ru;
		about = homePageContext.navbar.links.about.ru;
		contact = homePageContext.navbar.links.contacts.ru;
	}

	if(lang == 'en') {
		home = homePageContext.navbar.links.home.en;
		about = homePageContext.navbar.links.about.en;
		contact = homePageContext.navbar.links.contacts.en;
	}

	if(lang == 'tu') {
		home = homePageContext.navbar.links.home.tu;
		about = homePageContext.navbar.links.about.tu;
		contact = homePageContext.navbar.links.contacts.tu;
	}



	return (
		<div className={classes.navbar}>
			<div className={classes.logo}>
				<figure>
					<img src="/images/omega.png" alt="omega" />
				</figure>
			</div>
			<div className={classes.lang}>
				<div className={classes.icon}>
					<FaLanguage />
				</div>
				<Lang />
			</div>
			<ul>
				<li><MyLink className={router.pathname == '/' && 'active'} href='/' text={home} /></li>
				<li><MyLink className={router.pathname == '/about' && 'active'} href='/about' text={about} /></li>
				<li><MyLink className={router.pathname == '/contacts' && 'active'} href='/contacts' text={contact} /></li>
			</ul>
		</div>
	);
};

export default Navbar;
