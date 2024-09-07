import React, { useState } from "react";
import { fetchCoinData } from "../../Services/fetchCoinData"
import { useQuery } from "react-query";
import currencyStore from '../../ZustandStore/store'
import { useNavigate } from "react-router-dom";
// import { CurrencyContext } from "../../Context/CurrencyContext";

const CoinTable = () => {

    const { currency } = currencyStore() //useContext(CurrencyContext)

    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error} = useQuery(['coins', page, currency], () => fetchCoinData(page, currency), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    

    function handleCoinRedirect(id){
        navigate(`./details/${id}`);
    }

    if(isError) {
        return <div>Error: {error.message}</div>
    }


    return(
        <>
            <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
                <div className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white flex text-xl py-4 px-2 font-bold items-center justify-between">
                    {/* Header of the table */}
                    <div className="basis-[25%] flex justify-start ml-20">
                        Coin
                    </div>
                    <div className="basis-[25%] flex justify-start">
                        Price
                    </div>
                    <div className="basis-[25%] flex justify-start">
                        24h Change
                    </div>
                    <div className="basis-[25%] flex justify-start ">
                        Market Cap
                    </div>
                </div>

                <div className="flex flex-col w-[80vw] mx-auto ml-10">
                    {isLoading && <div className="flex items-center justify-center mb-10 mt-10">Loading....</div>}
                    {data && data.map((coin) => {
                        return (
                            <div key={coin.id} className="w-full bg-transparent  flex py-4 px-2 font-semibold items-center justify-between">
                                <div onClick={() => handleCoinRedirect(coin.id)} className="flex items-center justify-start gap-3 basis-[33%] cursor-pointer">
    
                                    <div className="w-[3rem] h-[3rem]">
                                        <img src={coin.image} className="w-full h-full"/>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="text-2xl">{coin.name}</div>
                                        <div className="text-xl">{coin.symbol}</div>
                                    </div>
    
                                </div>

                                <div className="basis-[25%]">
                                    {coin.current_price}
                                    { currency == "usd" ? " $" : " Rs"}
                                </div>
                                <div className="basis-[28%] ml-10">
                                    {coin.high_24h}
                                    { currency == "usd" ? " $" : " Rs"}
                                </div>
                                <div className="basis-[33%] flex justify-start">
                                    {coin.market_cap}
                                    { currency == "usd" ? " $" : " Rs"}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="flex gap-4 justify-center items-center">
                    <button 
                    onClick={()=> setPage(page-1)} 
                    disabled = {page===1}
                    className="btn bg-[#0d20ba] btn-wide text-2xl text-white">
                        Prev
                    </button>
                    <button 
                    onClick={()=> setPage(page+1)} 
                    className="btn text-white btn-wide text-2xl bg-[#0d20ba]">
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default CoinTable;