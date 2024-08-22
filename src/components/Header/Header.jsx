import headerLogo from '../../assets/logo.svg';
import calendarIcon from '../../assets/calendar.png';
import timeIcon from '../../assets/time.png';
import './Header.scss';

function Header() {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <img src={headerLogo} className='header__nav__logo' alt='Logo Powercode Academy'/>
                <div className='header__details'>
                    <div className='header__details__date'>
                        <img src={calendarIcon} alt="calendar icon"/> 28 декабря
                    </div>
                    <div className='header__details__time'>
                        <img src={timeIcon} alt="calendar icon"/> 3,5 часа
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;