export function DataBinding_04(){
    var name  ="Sumsung Tv";
    var price ="535.76";
    return(
        <div className="container-fluid">
            <div className="mt-4">
                <dl>
                    <dt>Name</dt>
                    <dd>{name}</dd>
                        {
                            (price)?<div><dt>price</dt><dd>{price}</dd></div>:"price not availbale"
                        }
                            
                        
                    
                </dl>

            </div>
        </div>
    )
}