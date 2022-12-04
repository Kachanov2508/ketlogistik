import { createContext } from "react";

import Hero from '../../components/Hero/Hero';
import Navbar from "../../components/Navbar/Navbar";
import Order from "../../components/Order/Order";


const HomePageContext = createContext(
    {
        navbar: {
            links: {
                home: {
                    ru: 'Главная',
                    en: 'Home',
                    tu: 'Ev',
                },
                about: {
                    ru: 'О компании',
                    en: 'About',
                    tu: 'Şirket hakkında',
                },
                contacts: {
                    ru: 'Контакты',
                    en: 'Contacts',
                    tu: 'Kişiler',
                },
            }
        },
        hero: {
            heading: {
                ru: 'Мы доставим вашу посылку по всему миру',
                en: 'We will deliver your package worldwide',
                tu: 'Paketinizi dünya çapında teslim edeceğiz'
            },
            list: {
                ru: ['Грузовые перевозки', 'Страхование грузов', 'Собственный автопарк', 'Автомобили от 2 до 20 тонн'],
                en: ['Freight transportation', 'Cargo insurance', 'Own vehicle fleet', 'Cars from 2 to 20 tons'],
                tu: ['Yük taşımacılığı', 'Kargo sigortası', 'Öz araç filosu', '2 tondan 20 tona kadar araçlar']
            },
            button: {
                ru: 'Подробнее',
                en: 'Show More',
                tu: 'Daha'
            }
        },
        order: {
            heading: {
                ru: 'Заявка на рассчет',
                en: 'Application for calculation',
                tu: 'Hesaplama başvurusu',
            },
            from: {
                ru: 'Откуда',
                en: 'From',
                tu: 'Neresi',
            },
            to: {
                ru: 'Куда',
                en: 'To',
                tu: 'İle',
            },
            size: {
                ru: 'Вес/Объем',
                en: 'Weight/Volume',
                tu: 'Ağırlık/Hacim',
            },
            phone: {
                ru: 'Телефон',
                en: 'Phone',
                tu: 'Selenli',
            },
            button: {
                ru: 'Заказать',
                en: 'Order',
                tu: 'Emir',
            },
        }
    }
);

export const HomePageProvider = () => {

    return (
        <HomePageContext.Provider>
            <Navbar />
            <Hero />
            <Order />
        </HomePageContext.Provider>
    )
}

export default HomePageContext;