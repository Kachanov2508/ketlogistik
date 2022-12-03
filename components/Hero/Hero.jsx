
import Button from '../Button/Button';
import classes from './Hero.module.scss';



const Hero = () => {
  return (
    <div className={classes.hero}>
        <div className={classes.left}>Мы <span>доставим</span> вашу <span>посылку</span> по всему <span>миру</span></div>
                
        <div className={classes.right}>
            <p>Более быстрый и простой способ бронирования и управления вашими международными отправлениями</p>
            <div className={classes.btn}>
                <Button link='/ubout' text='Подробнее' width='100%' />
            </div>
        </div>
    </div>
  )
}

export default Hero