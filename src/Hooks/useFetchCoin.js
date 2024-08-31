import { useQuery } from "react-query";
import { fetchCoinDetails } from "../Services/fetchCoinDetails";
import currencyStore from "../ZustandStore/store";

function useFetchCoin(coinId) {
    const {currency} = currencyStore();

    const { data:coin, isLoading, isError, error} = useQuery(['coin', coinId], () => fetchCoinDetails(coinId), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    return {
        currency,
        isError,
        isLoading,
        coin,
        error
    }
}

export default useFetchCoin;