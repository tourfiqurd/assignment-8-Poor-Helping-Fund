
import "./Poets.css"
import Header from './../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Poets = (props) => {

    const { name, img, FamousAs, SunSign, Birthplace, BirthDate, Died, WantsToDeonate } = props.poet
    const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <div className="poets-container">
            {
                <div >
                    <img className="cart-image" src={img} alt="" />
                    <div className="cart-desc">
                        <h2>{name}</h2>
                        <p>Famous As: {FamousAs}</p>
                        <p>SunSign : {SunSign}</p>
                        <p>Birthplace: {Birthplace}</p>
                        <p>BirthDate: {BirthDate}</p>
                        <p>Died: {Died}</p>
                        <p>Collected Taka: {WantsToDeonate}</p>
                        <button onClick={() => props.hadleTotal(WantsToDeonate, name)}>{shoppingCartIcon} Add To Cart</button>
                    </div>
                </div>
            }





        </div>
    );
};

export default Poets;