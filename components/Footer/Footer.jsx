import Link from 'next/link'
import Button from '../Button/Button'
import cls from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={cls.footer}>
        <div className={cls.top}>
            <h4>Доставим вашу посылку к месту назначения</h4>
            <div className={cls.btn}>
                <Button link='/' text='Узнать больше'/>
                <Button link='/' text='Автозапчасти'/>
            </div>
        </div>
        <div className={cls.bottom}>
            <div className={cls.logo}>
                <h4>Ketlogistic</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam officia mollitia maiores eos quidem dolores expedita quam laudantium quo sit!</p>
            </div>
            <div className={cls.links}>
                <ul>
                    <li><Link href='/'>Главная</Link></li>
                    <li><Link href='/'>О компании</Link></li>
                    <li><Link href='/'>Контакты</Link></li>
                </ul>
                <ul>
                    <li><Link href='/'>Лицензия</Link></li>
                    <li><Link href='/'>Сертификаты</Link></li>
                    <li><Link href='/'>Политика</Link></li>
                </ul>
                <ul>
                    <li><Link href='/'>Instagram</Link></li>
                    <li><Link href='/'>ВКонтакте</Link></li>
                    <li><Link href='/'>Одноклассники</Link></li>
                </ul>
            </div>
        </div>
        <div className={cls.copiright}>
            &#169; Ketlogistic. All rights reserved
        </div>
    </div>
  )
}

export default Footer