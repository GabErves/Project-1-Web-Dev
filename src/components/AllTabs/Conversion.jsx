import {useState, useEffect} from 'react';
import axios from 'axios';
import Rates from './Rates';

const Conversion = () =>{
    const [loading, setLoading] = useState(false);
    const [bpiData, setBpiData] = useState({});
    const [error, setError] = useState(null);
    const [conversion, setConversion] = useState({});
    const [timestamp, setTimestamp] = useState({});
    const [times, setTimes] = useState(Date());
   





    const fetchAPI = async () =>{
        // setLoading(true);
        // const{ 
        //     data: {bpi}

            

        // } = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
        const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const {data:{bpi,time}} = await axios.get(URL);

        setTimestamp(time);
        setTimes(Date.parse(timestamp["update"]));

        const bpiData = Object.keys(bpi).reduce((acc,currentCode) =>{
        acc[currentCode] = bpi[currentCode].rate_float;
        return acc;
        
    }, {});
    setConversion(bpiData);
    // .catch(error => {
    //     setError(error);
    // })
    // .finally(() => {setLoading(false);})

    setBpiData(bpi);
    }
    useEffect (()=>{
        fetchAPI();
    }, []);


    const timeout = () =>{
        setTimeout(() => {
            fetchAPI();
          }, 300000);

    }

    // const timeout = setTimeout({fetchAPI}, 5000);


    return (
        // <div>
        //     <pre>{JSON.stringify(bpiData.USD,0,1)}</pre>
        // </div>

        
    <div className='Rates'>
     {!!error && <pre>{JSON.stringify(error,0,1)}</pre>}
    {/* <pre>{JSON.stringify(bpiData.USD,0,1)}</pre> */}
    {loading && <p>Loading</p>}
    {!loading && bpiData && <>
        {/* <button onClick={fetchAPI}>Fetch rates</button> */}
        <h1>Current rates</h1>
        <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">Currency</th>
                <th scope="col" class="px-6 py-3">Bitcoin</th> 
            </tr>
        </thead>
        <tbody className="text-justify">{Object.keys(conversion).map((current)=>{
            return <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={current}> 1 {current} is {conversion[current]} Bitcoin</td>  
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> 1 Bitcoin is {1/conversion[current]} {current}</td>

                
            </tr>

        })}</tbody>

            
        </table>
        </div>
        {/* {Object.keys(conversion).map((current)=>{
            return <div>
                <p key={current}>
                1 {current} is {conversion[current]} Bitcoin,
                1 Bitcoin is {1/conversion[current]} {current}

                </p>
            </div>

        })} */}
        {/* <p>Code: {bpiData.USD}</p> */}
        <div className="align-items center"> 
            <p className="">{timestamp["update"]}</p>  
            <p className=""><span className="">Time: </span> {Date(times)}</p> 
        </div>

        <button onClick={timeout} type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Refresh
        </button>
        
    </>}
        {/* <ul className="flex">
            <li onClick={fetchAPI} class="flex-1 mr-2">
                <a className="text-white bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" href="#">Conversion</a>
                <pre>{JSON.stringify(bpiData.USD,0,1)}</pre>
                
            </li>
        </ul> */}
    </div>

    )

}

export default Conversion