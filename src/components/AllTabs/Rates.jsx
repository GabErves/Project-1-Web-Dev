import {useState, useEffect} from 'react';
import axios from 'axios';

const Rates = () =>{
    const [loading, setLoading] = useState(false);
    const [bpiData, setBpiData] = useState({});
    // const [error, setError] = useState(null);
    const [rates, setRates] = useState({});
    const [sorting, setSorting] = useState(true);
    const [quantity, setQuantity] = useState("");
    const [currency, setCurrency] = useState(1);
    // const [exchange, setExchange] = useState(false);
    const [timestamp, setTimestamp] = useState({});
    const [times, setTimes] = useState(Date());





    const fetchAPI = async () =>{
        // const{ 
        //     data: {bpi}

            

        // } = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
        const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const {data:{bpi,time}} = await axios.get(URL);

        setTimestamp(time);
        

        const bpiData = Object.keys(bpi).reduce((acc,currentCode) =>{
        acc[currentCode] = bpi[currentCode].rate_float;
        return acc;
    }, {});
    setRates(bpiData);
    

    }
    useEffect (()=>{
        fetchAPI();
    }, []);

    const sort = () =>{
        var unsorted = {};
        var sorted = {};

        if(sorting == true){
            setSorting(false)

            unsorted = Object.keys(rates).sort((a,b)=> rates[b] - rates[a])


            for (var i in unsorted){
                sorted[unsorted[i]] = rates[unsorted[i]]
            }
        }
        else if(sorting == false){
            setSorting(true)

            unsorted = Object.keys(rates).sort((a,b)=> rates[a] - rates[b])

            for (var i in unsorted){
                sorted[unsorted[i]] = rates[unsorted[i]]
            }

        }

        setRates(sorted);

    }

    const exchangeHandler = () =>{
        console.log(quantity)

    }

    const quantityHandler = (e) =>{
        setQuantity(e.target.value);
    

    }

    const currencyHandler = (e) =>{
        setCurrency(e.target.value);
        console.log(e.target.value);

    }



    return (
    <div className='Rates'>
     <h1 >Current rates</h1>
        {/* <ul class="flex">
    
            <li onClick={fetchAPI} class="flex-1 mr-2">

                <a class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" href="#">Rates</a>
            </li>
        </ul> */}
      
        {/* <button value="Submit" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Sort</button> */}

<div class="relative overflow-x-auto">     
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
  <tr>
    <th scope="col" class="px-6 py-3">Currency</th>
    <th scope="col" class="px-6 py-3">Bitcoin</th> 
  </tr>
  </thead>
  
    <tbody className="text-justify">{Object.keys(rates).map((current)=>{
            return <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={current}> 1 {current}</td>  
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{rates[current]} BTC</td>

                
            </tr>

        })}</tbody>
   
 
  
   
</table>
</div>



        
<form class="flex justify-center">
{!loading && bpiData && <>
        {/* <button onClick={fetchAPI}>Fetch rates</button> */}
        {/* {Object.keys(rates).map((current)=>{
            return <div>
            
                <p key={current}> 1 {current}  {rates[current]} BTC

                </p>
            </div>

        })} */}

       
        
        
    </>}
    <button onClick={sort} value="Submit" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Sort Rates</button>
  <div>
  <div class="mb-3 xl:w-96">
<select className="select select-primary w-full max-w-xs" onChange={currencyHandler} name="currency" id="currency">
<option disabled selected>Currency</option>
    {Object.keys(rates).map((current)=>{
        return <option value={current}>{current}</option>

       

        })}

</select>
</div>  
</div>
  <label for="value">Value:  </label>
  <input onChange={quantityHandler} value={quantity} type="number" id="value" name="value"></input>

  {/* <input type="button" value="Submit"/> */}
  <button onChange={exchangeHandler} value={quantity} class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Exchange</button>
</form>

        {/* {exchangeHandler && <p>{rates[currency]*quantity</p>} */}
        {exchangeHandler && <p> {rates[currency] * quantity} BTC </p>}

        <div className="align-items center"> 
           
            <p className=""><h1 className="">Current Time:</h1> {Date(times)}</p> 
        </div>
    </div>


    )
}

    



export default Rates;