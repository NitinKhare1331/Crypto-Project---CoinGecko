import React, { useEffect } from 'react'
import CoinInfo from './CoinInfo'
import PageLoader from '../../Components/PageLoader/PageLoader'
import Alert from '../Alert/Alert';
// import { useState } from "react";
// import currencyStore from "../../ZustandStore/store"
// import { useQuery } from "react-query";
// import fetchCoinHistoricData from '../../Services/fetchCoinHistoricData'
import useFetchCoinHistory from '../../Hooks/useFetchCoinHistory';

const CoinInfoContainer = ({ coinId }) => {

    const { isLoading, historicData, isError, setCoinInterval, setDays, currency, days } = useFetchCoinHistory(coinId);

    // const { currency } = currencyStore();

    // const [days, setDays] = useState(7)

    // const [interval, setCoinInterval] = useState('daily');

    // const {data: historicData, isLoading, isError} = useQuery([ 'coinHistoricData', coinId, currency, days, interval ],()=>fetchCoinHistoricData(coinId, interval, days, currency),{
    //     cacheTime: 1000 * 2 * 60,
    //     staleTime: 1000 * 2 * 60
    // });
    

    if(isLoading){
        return <PageLoader />
    }

    if(isError){
        return(
            <Alert message="Error fetching data" type="error" />
        )
    }

  return (
    <>
        <CoinInfo 
            historicData = {historicData} 
            setDays = {setDays} 
            setCoinInterval = {setCoinInterval} 
            days = {days}
            currency = {currency}
        />
    </>
  )
}

export default CoinInfoContainer