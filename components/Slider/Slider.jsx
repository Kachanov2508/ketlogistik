import { useState } from "react";
import cls from "./Slider.module.scss";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ children }) => {
	const slideSize = 560;
	const [offset, setOffset] = useState(0);

	const leftClickHandler = () => {
		setOffset((offset) => {
			return Math.min(offset + slideSize, 0);
		});
	};

	const rightClickHandler = () => {
		setOffset((offset) => {
			const newOffset = offset - slideSize;
			const maxSize = -(children.length - 1) * slideSize;

			if (newOffset < maxSize) {
				return 0;
			}

			return Math.max(newOffset, maxSize);
		});
	};

	return (
		<div className={cls.slider}>
			<div onClick={leftClickHandler} className={`${cls.arrow} ${cls.left}`}>
				<FaArrowCircleLeft />
			</div>
			<div className={cls.slides}>
				{children.map((item, index) => {
					return (
						<figure className={cls.slide} style={{ transform: `translateX(${offset}px)` }} key={index}>
							{item}
						</figure>
					);
				})}
			</div>
			<div onClick={rightClickHandler} className={`${cls.arrow} ${cls.right}`}>
				<FaArrowCircleRight />
			</div>
		</div>
	);
};

export default Slider;
