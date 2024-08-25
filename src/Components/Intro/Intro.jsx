import './Intro.css';
import cute from '../../assets/doctor1.png'
import logo from '../../assets/logo.svg'

const Intro = () => {

    return (
        <>
            <section id="intro">
                <div className="introConent" >
                    <span className="introText">Your<span className="introName"> Health</span> <br />Is Happiness For Us </span>
                    <p className="introPara">Find the best doctors nearby and book health appoitments<br /> at the form doctor available times call us </p>
                    <button className="btn" ><img src={logo} alt="" className="logo" /> About Us </button>
                </div>
                <img src={cute} alt="Medical" className="bg" />
            </section>
        </>
    )
}
export default Intro;