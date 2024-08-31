import React from 'react'
import Alert from '../Alert/Alert'
import { Line } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import { Chart } from 'chart.js/auto'
import { chartDays } from '../../Helpers/constants'

Chart.register(CategoryScale);

const CoinInfo = ({ historicData, setDays, setCoinInterval, days, currency }) => {

    const handleDayChange = function (e) {
        const daysSelected = e.target.options[e.target.selectedIndex].value;
        if(daysSelected == 1){
            setCoinInterval?.("");
        }else{
            setCoinInterval?.("daily")
        }
        setDays?.(e.target.options[e.target.selectedIndex].value);
    }
    
    if(!historicData){
        return <Alert message="No data available" type="error" />
    }

  return (
    <div className='flex flex-col items-center justify-center mt-6 p-6 w-full '>
        <div className='h-[400px] w-full'>
            <Line 
                data={{
                    labels: historicData.prices.map((coinPrice)=>{
                        let date = new Date(coinPrice[0]) //converting UNIX timestamp to date
                        let time = date.getHours() > 12 ? `${date?.getHours() - 12}:${date?.getMinutes()} PM` : `${date?.getHours()}:${date?.getMinutes()} AM`;
                        return days == 1 ? time : date?.toLocaleDateString();
                    }),
                    datasets: [
                        {
                            label: `Price (Past ${days} ${days == 1 ? "Day" : "Days"}) in ${currency?.toUpperCase()}`,
                            data: historicData.prices.map((coinPrice)=>coinPrice[1])
                        }
                    ],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    elements: {
                        point: {
                            radius:0
                        }
                    }
                }}
            />
        </div>

        <div className='flex justify-center mt-5 w-full'>
        <select value={days} onChange={handleDayChange} className="select select-primary w-full max-w-xs">
            {chartDays.map((day, index) => {
                return (
                    <option key={index} value={day.value}>{day.label}</option>
                )
            })}
        </select>


        </div>
    </div>
    
  )
}

export default CoinInfo