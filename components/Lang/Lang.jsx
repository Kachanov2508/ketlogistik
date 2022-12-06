import { useContext, useRef, useState } from "react";
import LangContext from "../../context/LangProvider";
import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import cls from "./Lang.module.scss";

// При фокусе на элемент dropdown открывается, если пропадает фокус то закрывается
// Без tabIndex не работает
// После выбора элемента нужно снять фокус, иначе повторно будет открываться только после клика по пустой области (снимет фокус)
const Lang = () => {
	const { lang, setLang } = useContext(LangContext);

	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(() => {
		if(lang == 'ru') return 'Русский';
		if(lang == 'en') return 'English';
		if(lang == 'tu') return 'Türk';
	});
	const dropdownRef = useRef();

	const openDropdown = () => {
		setOpen(!open);
		// Ставим фокус на ref, что бы при клике вне элемента окно закрылось
		dropdownRef.current.focus();
	};

	const closeDropdown = () => {
		setOpen(false);
	};

	const selectDropdown = (e) => {
		setSelected(e.target.innerText);
		setOpen(false);
		dropdownRef.current.blur();

		setLang(e.target.dataset.lang);
	};

	return (
		<div className={cls.dropdown} ref={dropdownRef} tabIndex={1} onClick={openDropdown} onBlur={closeDropdown}>
			<div className={cls.selected}>{selected} {open ? <FaCaretDown/> : <FaCaretUp />}</div>
			{open && (
				<div className={cls.dropdown_items}>
					<div onClick={(e) => selectDropdown(e)} data-lang='en'>English</div>
					<div onClick={(e) => selectDropdown(e)} data-lang='tu'>Türk</div>
					<div onClick={(e) => selectDropdown(e)} data-lang='ru'>Русский</div>
				</div>
			)}
		</div>
	);
};

export default Lang;
