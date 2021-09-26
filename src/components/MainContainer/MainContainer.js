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


        if (finalName.indexOf(name) != -1) {
            alert("Cannot add multiple times")
            return

        } else {
            const newTotal = total + WantsToDeonate
            setTotal(newTotal)
            const newName = [...finalName, name]
            setName(newName)

        }



    }




    return (

        <div className="main-container">

            <div className="carts-container">

                {
                    poets.map(poet => <Poets poet={poet} hadleTotal={hadleTotal} key={poet.key.length.toString()}></Poets>)

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
                        finalName.map(singleName => <p key={singleName}>{singleName}</p>)
                    }

                </div>


            </div>

        </div >
    );

};

export default MainContainer;