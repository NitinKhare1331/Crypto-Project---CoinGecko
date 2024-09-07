import { useState } from "react";
import currencyStore from "../ZustandStore/store";
import { useQuery } from "react-query";
import fetchCoinHistoricData from '../Services/fetchCoinHistoricData'

function useFetchCoinHistory(coinId){
    const { currency } = currencyStore();

    const [days, setDays] = useState(7)

    const [interval, setCoinInterval] = useState('daily');

    const {data: historicData, isLoading, isError} = useQuery([ 'coinHistoricData', coinId, currency, days, interval ],()=> fetchCoinHistoricData(coinId, interval, days, currency),{
        cacheTime: 1000 * 2 * 60,
        staleTime: 1000 * 2 * 60
    });

    return {
        coinId,
        isLoading,
        historicData,
        isError,
        setCoinInterval,
        setDays,
        currency,
        days
    }
} 

export default useFetchCoinHistory;