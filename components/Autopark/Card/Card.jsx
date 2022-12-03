import cls from "./Card.module.scss";

const Card = ({ photo, title, characteristics }) => {
	return (
		<div className={cls.card}>
			<div className={`${cls.side} ${cls.front}`}>
				<figure>
					<img src={`/images/${photo}`} alt={title} />
				</figure>
				<h4>
					<span>{title}</span>
				</h4>
				<div className={cls.characteristics}>
					<ul>
                        {characteristics.map((item, index) => <li key={index}>{item}</li>)}
					</ul>
				</div>
			</div>
			<div className={`${cls.side} ${cls.back}`}>
				<div className={cls.form}>
					<h4>Заявка на рассчет</h4>
					<form action="">
						<div>
                            <label htmlFor="auto">Тип авто</label>
                            <input type="text" id="auto" value={title} disabled />
                        </div>
						<div>
                            <label htmlFor="from">Место отправки груза</label>
                            <input type="text" id="from" placeholder="Откуда" />
                        </div>
						<div>
                            <label htmlFor="to">Место прибытия груза</label>
                            <input type="text" id="to" placeholder="Куда" />
                        </div>
						<div>
                            <label htmlFor="weight">Масса отправляемого груза</label>
                            <input type="text" id="weight" placeholder="Вес/Объем" />
                        </div>
						<div>
                            <label htmlFor="phone">Телефон для связи</label>
                            <input type="text" id="phone" placeholder="Телефон" />
                        </div>

                        <input type="submit" value="Заказать" className={cls.submit} />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Card;
