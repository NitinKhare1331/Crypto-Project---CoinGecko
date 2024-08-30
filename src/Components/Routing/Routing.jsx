import { Route, Routes } from "react-router-dom";
// import CoinDetails from "../../pages/CoinDetails";
// import Home from "../../pages/Home"
import MainLayout from "../../pages/Layout";
import { lazy, Suspense } from "react";
import ContentLoader, { Facebook } from "react-content-loader";

function Routing(){

    const Home = lazy(() => import("../../pages/Home")); //Lazy loading
    const CoinDetails = lazy(() => import("../../pages/CoinDetails")); //Lazy loading    


    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>

                <Route index element={
                    
                    <Suspense fallback={<Facebook/>}>
                        <Home />
                    </Suspense>
                    
                } />
                <Route path="/details/:coinId" element={
                    <Suspense fallback={<Facebook/>}>
                        <CoinDetails />
                    </Suspense>
                    
                } />

            </Route>
        </Routes>
    )
}

export default Routing;