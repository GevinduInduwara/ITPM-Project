import { Link } from "react-router-dom"


const navBar = () => {

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <h1>Explore Lanka</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/addPayment">Add Payment</Link></li>
                        <li><Link to="/choosePayment">Choose Payment</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default navBar;