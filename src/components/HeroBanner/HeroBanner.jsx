import timeIcon from '../../assets/time2.png';
import icon from '../../assets/icon.png';
import present from '../../assets/present.png'
import './HeroBanner.scss';

function HeroBanner() {
    return (
        <div className="hero-banner">
            <button className='hero-banner__button'>
                <img src={timeIcon} alt="time"/> Webinar
            </button>
            <p className="hero-banner__title">front-end</p>
            <p className='hero-banner__text'>
                <p className='hero-banner__text--highlighted'>from scratch</p>
                <p className='hero-banner__text-p'>easy start in IT profession</p>
            </p>
            <div className='hero-banner__description'>
                <p className='hero-banner__description__text'>Find out what skills &nbsp;
                    <span className='hero-banner__description__text--highlighted'>must have
                  front-end developer in 2024</span> &nbsp; and how to start
                    career in a popular profession
                </p>
                <ul className='hero-banner__description__authors'>
                    <li className='hero-banner__description__author'>
                        <img src={icon} alt="time"/>
                        <div>
                            <p className='hero-banner__description__author-name'> Kirill&nbsp;
                                <span className='hero-banner__description__author-name--highlighted'>Kasatonov</span>
                            </p>
                            <p className='hero-banner__description__author-exp'>6 years of commercial experience with
                                companies like Mercedes-Benz and other large corporations</p>
                        </div>
                    </li>
                    <li className='hero-banner__description__author'>
                        <img src={present} alt="time"/>
                        <div>
                            <p className='hero-banner__description__author-text'>Registration bonus</p>
                            <p className='hero-banner__description__author-additional-text'>
                                PDF file "5 Benefits of Being a Front-End Developer"
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeroBanner;