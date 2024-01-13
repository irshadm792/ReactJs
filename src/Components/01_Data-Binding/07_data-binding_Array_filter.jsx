
export function DataBinding_07(){
    var sales=[45000,35000,23000,56000,34000]
    return(
        <div className="container-fluid">
            <div className="mt-4">
                <ul>
                    {
                        sales.filter(value =>value < 40000).map(sales=><li key={sales}>{sales}</li>)
                    }
                </ul>

            </div>
        </div>
    )
}