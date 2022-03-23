import { useState, useEffect } from "react";
import axios from "axios";
import { CLIENT_URL } from "../services/constants";
import Stock from "./Stock";



function StockList(){

    const[stocks, setStocks] = useState ([])
    const[stocks2, setStocks2] = useState ([])
    const[stocks3, setStocks3] = useState ([])
    const[stocks4, setStocks4] = useState ([])
 
    const TOKEN = "/quote?token=sk_f5503c07f3c040148a24c3f9ef66624c"
    const companies = ['aapl','fb','snap','spy']

    // useEffect(() =>{
    //     const fetchData = async (comapny) =>{
    //         try {
    //             const response = await axios.get(`${CLIENT_URL}${comapny}${TOKEN}`);
    //             const results = [response.data];
    //             console.log(results);
    //         setStocks(prevResults =>[...prevResults, results  ])
    //         } 
    //         catch (error) {
    //             console.log(error)
    //         }
    //     }
        
    //     for(let i=0; i<companies.length; i++){
    //         fetchData(companies[i])
    //     }

    // },[]) 
    // WORK IN PROGRESS IGNORE FOR NOW

    
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
            fetchData(companies[0])
    },[])
    useEffect(() =>{
        const fetchData = async (comapny) =>{
            try {
            const response = await axios.get(`${CLIENT_URL}${comapny}${TOKEN}`);
            const results = [response.data];
            console.log(results);
            setStocks2(results)
            } catch (error) {
                console.log(error)
            }
        }
            fetchData(companies[1])
    },[])
    useEffect(() =>{
        const fetchData = async (comapny) =>{
            try {
            const response = await axios.get(`${CLIENT_URL}${comapny}${TOKEN}`);
            const results = [response.data];
            console.log(results);
            setStocks3(results)
            } catch (error) {
                console.log(error)
            }
        }
            fetchData(companies[2])
    },[])
    useEffect(() =>{
        const fetchData = async (comapny) =>{
            try {
            const response = await axios.get(`${CLIENT_URL}${comapny}${TOKEN}`);
            const results = [response.data];
            console.log(results);
            setStocks4(results)
            } catch (error) {
                console.log(error)
            }
        }
            fetchData(companies[3])
    },[])
    
    



    return(
        <div>
        { 
            (stocks||[]).map((stockData, index) =>{
               return <Stock stockData = {stockData} key= {index} />
            })
           
        }
        { 
            (stocks2||[]).map((stockData, index) =>{
               return <Stock stockData = {stockData} key= {index} />
            })
           
        }
        { 
            (stocks3||[]).map((stockData, index) =>{
               return <Stock stockData = {stockData} key= {index} />
            })
           
        }
        { 
            (stocks4||[]).map((stockData, index) =>{
               return <Stock stockData = {stockData} key= {index} />
            })
           
        }
        </div>
    )
}


export default StockList