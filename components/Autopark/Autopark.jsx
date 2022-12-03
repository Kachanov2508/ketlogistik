import HeadingSection from '../HeadingSection/HeadingSection';
import cls from './Autopark.module.scss';
import Card from './Card/Card';

const Autopark = () => {



  return (
    <>
        <HeadingSection>
            <h4>Наш автопарк</h4>
            <h2>Отпровляйте свой груз по стране или <span>по миру</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatem nam voluptatum, labore animi eos quos veniam, officiis consectetur, atque aliquam sunt rerum ullam autem vel maxime optio temporibus molestias sint porro incidunt earum!</p>
        </HeadingSection>
        
        <div className={cls.autopark}>
            <Card photo='folksvagen-krafter.jpg' title='Folksvagen Krafter' characteristics={['Грузоподъемность - 20 т.', 'Вместительность - 300 л.', 'Скорость - 350 км/ч', 'Тонировка окон - есть', 'Радио приемник - есть']} />
            <Card photo='man-daf.jpg' title='Man Daf' characteristics={['Грузоподъемность - 60 т.', 'Вместительность - 3500 л.', 'Скорость - 230 км/ч', 'Тонировка окон - нет', 'Радио приемник - есть']} />
            <Card photo='skaniya-man.jpg' title='Mercedes Man' characteristics={['Грузоподъемность - 200 т.', 'Вместительность - 4800 л.', 'Скорость - 310 км/ч', 'Тонировка окон - есть', 'Радио приемник - нет']} />
        </div>
    </>
  )
}

export default Autopark