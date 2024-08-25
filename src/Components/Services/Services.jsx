import './Services.css';
import tooth from '../../assets/tooth.svg'
import eye from '../../assets/eye.svg'
import blood from '../../assets/blood.svg'
import hart from '../../assets/hart.svg'

const Services = () => {

    return (
        <>
            <div id="Services">
                <div className="cards">
                    <div className="card">
                        <div className="card-content">
                            <img src={tooth} alt="Medical" className="image" />
                            <h4 className="title"> Care</h4>
                        </div>
                        <p className="description">We do not make only dental products but also confidence</p>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <img src={eye} alt="Medical" className="image" />
                            <h4 className="title">Eye Care</h4>
                        </div>
                        <p className="description">Your eye health is our concern</p>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <img src={blood} alt="Medical" className="image" />
                            <h4 className="title">Blood Test</h4>
                        </div>
                        <p className="description">Get yourself tested at your comfortable place</p>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <img src={hart} alt="Medical" className="image" />
                            <h4 className="title">Heart Care</h4>
                        </div>
                        <p className="description">Heart care starts with small daily choices that lead to a longer, healthier life.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services;