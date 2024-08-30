import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetails from "../../pages/CoinDetails";

function Routing(){

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:coinId" element={<CoinDetails />} />
        </Routes>
    )
}

export default Routing;