import CustomForm from "../CustomForm/CustomForm.jsx";
import HeroBanner from "../HeroBanner/HeroBanner.jsx";
import './Main.scss';

export default function Main() {
    return (
        <main className='main-container'>
            <HeroBanner />
            <CustomForm />
        </main>
    );
}