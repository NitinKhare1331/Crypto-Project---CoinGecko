import React, { useState } from 'react'
import CoinInfo from './CoinInfo'
import { useQuery } from 'react-query'
import currencyStore from '../../ZustandStore/store';
import { fetchCoinHistoricData } from '../../Services/fetchCoinHistoricData';
import PageLoader from '../../Components/PageLoader/PageLoader'
import Alert from '../Alert/Alert';

const CoinInfoContainer = ({ coinId }) => {

    const { currency } = currencyStore();

    const [days, setDays] = useState(7)

    const [interval, setCoinInterval] = useState('daily');

    const {data: historicData, isLoading, isError} = useQuery([ 'coinHistoricData', coinId, currency, days, interval ],()=>fetchCoinHistoricData(coinId, interval, days, currency),{
        cacheTime: 1000 * 2 * 60,
        staleTime: 1000 * 2 * 60
    })

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