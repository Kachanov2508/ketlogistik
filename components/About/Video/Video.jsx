import HeadingSection from "../../HeadingSection/HeadingSection";
import classes from "./Video.module.scss";

const Video = () => {
	return (
		<>
			<div className={classes.video}>
				<HeadingSection>
					<h4>О компании</h4>
					<h2><span>Ketlogistik</span> одна из ведущих логистических компаний</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatem nam voluptatum, labore animi eos quos veniam, officiis consectetur, atque aliquam sunt rerum ullam autem vel maxime optio temporibus molestias sint porro incidunt earum pariatur! Numquam dolorum fuga, officiis perferendis quos quod sunt obcaecati culpa error mollitia aut aperiam voluptates.</p>
				</HeadingSection>
				<div className={classes.steps}>
					<div>
						<h4>10K+</h4>
						<p>Грузовых автомобилей</p>
					</div>
					<div>
						<h4>1K+</h4>
						<p>Магазинов</p>
					</div>
					<div>
						<h4>10+</h4>
						<p>Лет на рынке</p>
					</div>
					<div>
						<h4>3M+</h4>
						<p>Довольных клиентов</p>
					</div>
				</div>
			</div>
			<div className={classes.youtube}>
				<iframe width="820" height="315" src="https://www.youtube.com/embed/YOLeoQDvKUA?start=23" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
		</>
	);
};

export default Video;
