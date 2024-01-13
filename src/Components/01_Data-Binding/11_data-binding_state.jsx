import { useState } from "react";

export function DataBinding_11(){
    const [product] =useState({"Name":"TV",Price:6677.65});
    const [categories] =useState(["All","fashion","Electronics"]);

    return(
        <div className="container-fluid">
            Name:{product.Name}
            Price:{product.Price}
            <ul>
                {
                    categories.map(category=><li key={category}>{category}</li>)
                }
            </ul>
        </div>
    )
}