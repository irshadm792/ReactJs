export function DataBinding_05(){
    var name ="sumsung tv"
    var price=prompt("Enter the price ")
    return(
        <div className="container-fluid">
            <div className="mt-4">
                <dl>
                    <dt>Name</dt>
                    <dd>{name}</dd>
                    {
                        (price==null)?"price not available":<div><dt>price</dt><dd>{price}</dd></div>
                    }
                </dl>

            </div>
        </div>
    )
}