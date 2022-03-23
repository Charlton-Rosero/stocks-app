const Stock = (props)=>{
    const data = props.stockData
    return(
        <div>
            
            <div className="stockData">
                <h3 className="symbol">{data.symbol}</h3>
                <p>{data.companyName}</p>
                <p>{data.latestPrice}</p>
                <p>{data.changePercent}%</p>
            </div>
           

        </div>
    )
}


export default Stock