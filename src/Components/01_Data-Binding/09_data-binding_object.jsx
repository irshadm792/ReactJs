export function DataBinding_09(){
    var product ={
        "Name":"Sumsung TV",
        "price":56466.76,
        "Stock":true,
        "cities":["Patna","Delhi"],
        "Rating":{rate:4.3,"count":400}
    }
    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>price</dt>
                <dd>{product.price}</dd>
                <dt>stock</dt>
                <dd>{(product.Stock==true)?"Available":"out of stuck"}</dd>
                <dt>Cities</dt>
                <dd>
                    {
                        product.cities.map(city=><li key={city}>{city}</li>)
                    }
                </dd>
                <dt>Rating</dt>
                <dd>
                { product.Rating.rate}<span className="bi bi-star-fill text-success">[{product.Rating.count}]</span>

                </dd>


            </dl>

        </div>
    )
}