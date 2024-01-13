

    export function DataBinding_01(){
        var price =450000.44;
        return(
            <div>
                <h2>{price}</h2>
                <h2>{price.toLocaleString('en-in',{style:"currency",currency:"INR"})}</h2>
            </div>
        )
    }