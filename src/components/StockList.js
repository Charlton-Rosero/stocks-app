import { useState, useEffect } from "react";
import axios from "axios";
import { CLIENT_URL } from "../services/constants";
import Stock from "./Stock";



function StockList(){

    const[stocks, setStocks] = useState ([])
   
 
    const TOKEN = "/quote?token=sk_f5503c07f3c040148a24c3f9ef66624c"
    const companies = ['aapl','fb','snap','spy']


    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const response = await axios.all(companies.map((company) =>{
                    return axios.get(`${CLIENT_URL}${company}${TOKEN}`)
                }));
                console.log(response);
                setStocks(response)
            }

            catch (error) {
                console.log(error)
            }
        }

        fetchData()
    },[]) 

    return(
        <div>

        { 
            stocks.map((stockData, index) =>{
                return <Stock stockData = {stockData} key= {index} />
            })
           
        }
        </div>
    )
}


export default StockList
