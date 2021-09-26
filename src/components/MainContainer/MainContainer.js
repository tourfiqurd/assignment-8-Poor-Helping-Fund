import React, { useEffect, useState } from 'react';

import Poets from '../Poets/Poets';
import "./MainContainer.css"
import Header from './../Header/Header';

const MainContainer = () => {
    const [poets, setPoets] = useState([])
    useEffect(() => {
        fetch("fakeData.JSON")
            .then(res => res.json())
            .then(data => setPoets(data))
    }, [])
    const [total, setTotal] = useState(0)
    const [finalName, setName] = useState([])

    const hadleTotal = (WantsToDeonate, name) => {
        const newTotal = total + WantsToDeonate
        setTotal(newTotal)
        const newName = [...finalName, name]
        setName(newName)
    }
    console.log(finalName)
    return (
        <div className="main-container">

            <div className="carts-container">

                {
                    poets.map(poet => <Poets poet={poet} key={poet.key} hadleTotal={hadleTotal}></Poets>)
                }



            </div>
            <div className="cart-container">
                <div className="cart-total-container">
                    <h1  >Total Collected</h1>
                    <h2>{total} TK</h2>
                    <p>Added Groups: {finalName.length}</p>
                </div>



            </div>
            <div className="added-poets-container">

                <div className="cart-added-container">
                    <h5>Groups Helped Us</h5>

                    {
                        finalName.map(singleName => <p>{singleName}</p>)
                    }

                </div>


            </div>

        </div >
    );
};

export default MainContainer;