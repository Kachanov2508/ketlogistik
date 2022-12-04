import { useContext } from "react";
import LangContext from "../../context/LangProvider";

import cls from "./Lang.module.scss";

const Lang = () => {

    const {lang, setLang} = useContext(LangContext);


	const selectHandler = (e) => {
        setLang(e.target.value)
	};



	return (
		<select onChange={(e) => selectHandler(e)} className={cls.lang} name="lang" id="lang" defaultValue={lang}>
			<option value="ru">Русский</option>
			<option value="en">English</option>
			<option value="tu">Türk</option>
		</select>
	);
};

export default Lang;
