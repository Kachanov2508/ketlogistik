import classes from "./Sidebar.module.scss";

const Sidebar = () => {
	return (
		<div className={classes.sidebar}>
			<div className={classes.logo}>Ketlogistik</div>
			<ul>
				<li>Главная</li>
				<li>О компании</li>
				<li>Контакты</li>
			</ul>
		</div>
	);
};

export default Sidebar;
