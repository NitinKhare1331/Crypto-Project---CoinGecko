import { useParams } from "react-router-dom";

function CoinDetails(){

    const {coinId} = useParams();
    return(
        <>
            <h1>Coin detail page
                <br/>
                {coinId}
            </h1>
        </>
    )
}

export default CoinDetails;