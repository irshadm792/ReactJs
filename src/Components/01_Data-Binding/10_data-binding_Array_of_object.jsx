export function DataBinding_10(){
    var product =[
        { "Name":"tv",price:3434.3},
        {"Name":"mobile",price:7463.45}
    ]
    return(
        <div className="container-fluid">
            <table className="table table-hover mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(product=><tr key={product.Name}><td>{product.Name}</td><td>{product.price}</td></tr>)
                    }
                </tbody>

            </table>
        </div>
    )
}