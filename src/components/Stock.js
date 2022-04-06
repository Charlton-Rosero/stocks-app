const Stock = (props)=>{
    const index = props.key
    
    const data = props.stockData;
    
    return(
        <div>
            <div className="stockData">
                <h3 className="symbol">{data.data.symbol}</h3>
                <p>{data.data.companyName}</p>
                <p>{data.data.latestPrice}</p>
                <p>{data.data.changePercent}%</p>
            </div>
        </div>
    )
}


export default Stock