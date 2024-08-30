import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../Services/fetchCoinDetails";

function CoinDetails(){

    const {coinId} = useParams();

    const { data, isLoading, isError, error} = useQuery(['details', coinId], () => fetchCoinDetails(coinId), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    if(isLoading){
        return <div>Loading....</div>
    }

    if(isError){
        return <div>Error: {error.message}</div>
    }

    console.log(data.categories);
    

    return(
        <>
            <div className="mt-[64px]">
                {coinId}
            </div>
        </>
    )
}

export default CoinDetails;