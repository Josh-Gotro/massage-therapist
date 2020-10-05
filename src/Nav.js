import React, { useState } from 'react';
import './CSS/Nav.css';


const Nav = () => {
    const contact = "https://www.schedulista.com/schedule/mantismassage1/choose_time?provider_id=1073881022&service_id=1073958799"
    const [viewToggle, setViewToggle] = useState(true);

    function viewNav(){
        setViewToggle(prev => !prev)
        console.log(viewToggle)
    }

    return (
        <div className="NavContainer">

            <div className="Splash">
                <div className="Quote">
                    "No worries, I got your back." <br/>
                    - Ghandi
                </div>

            </div>
            <div className="NavBar">
                <div onClick={viewNav}>RB</div>
                <div>Technique</div>
                <a href={contact} target="_blank">Book a Massage</a>
                <div>Contact</div>
                <div> Soc   Soc</div>
            </div>
            
        </div>
    );
}

export default Nav;
