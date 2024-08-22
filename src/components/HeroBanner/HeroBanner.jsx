import timeIcon from '../../assets/time2.png';
import icon from '../../assets/icon.png';
import present from '../../assets/present.png'
import './HeroBanner.scss';

function HeroBanner() {
    return (
        <div className="hero-banner">
            <button className='hero-banner__button'>
                <img src={timeIcon} alt="time"/> Вебинар
            </button>
            <p className="hero-banner__title">front-end</p>
            <p className='hero-banner__text'>
                <p className='hero-banner__text--highlighted'>с нуля</p>
                <p className='hero-banner__text-p'>легкий старт в IT профессии</p>
            </p>
            <div className='hero-banner__description'>
                <p className='hero-banner__description__text'>Узнайте какими навыками &nbsp;
                    <span className='hero-banner__description__text--highlighted'>должен обладать
                  фронтенд разработчик в 2022 году</span> &nbsp; и как начать
                    карьеру в востребованной профессии
                </p>
                <ul className='hero-banner__description__authors'>
                    <li className='hero-banner__description__author'>
                        <img src={icon} alt="time"/>
                        <div>
                            <p className='hero-banner__description__author-name'> Кирилл&nbsp;
                                <span className='hero-banner__description__author-name--highlighted'>Касатонов</span>
                            </p>
                            <p className='hero-banner__description__author-exp'>6 лет коммерческого опыта с такими
                                компаниями как Mercedes-Benz и другими крупными корпорациями</p>
                        </div>
                    </li>
                    <li className='hero-banner__description__author'>
                        <img src={present} alt="time"/>
                        <div>
                            <p className='hero-banner__description__author-text'>Бонус за регистрацию</p>
                            <p className='hero-banner__description__author-additional-text'>PDF-файл "5 преимуществ
                                профессии фронтенд разработчика"</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeroBanner;