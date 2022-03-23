import { useState, useEffect } from "react";
import axios from "axios";
import { CLIENT_URL } from "../services/constants";
import Stock from "./Stock";



function StockList(){

    const[stocks, setStocks] = useState ([])

    const TOKEN = "/quote?token=sk_f5503c07f3c040148a24c3f9ef66624c"

    const companies = ['aapl','fb','snap','spy']


    useEffect(() =>{
        const fetchData = async (comapny) =>{
            try {
            const response = await axios.get(`${CLIENT_URL}${comapny}${TOKEN}`);
            const results = [response.data];
            console.log(results);
            setStocks(results)
            } catch (error) {
                console.log(error)
            }
        }
        for(let i=0; i<companies.length; i++){
            fetchData(companies[i])
        }

    },[])


    return(
        <div>
            { 
            (stocks||[]).map((stockData, index) =>{
               return <Stock stockData = {stockData} key= {index} />
            })
        }
        </div>
    )
}


export default StockList