import { useEffect, useState } from "react";

export function ApiDataBinding_03(){
    const[products, setProducts]=useState([]);
    function LoadData(){
        fetch("products.json")
        .then(response=>response.json())
        .then(data=>{
            setProducts(data);

        })
    }
    useEffect(()=>{
        LoadData();
    },[]);

    return(
        <div className="container-fluid">
            <h2>Product Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr key={product.className}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>j

                            </tr>)
                    }
                </tbody>

            </table>

        </div>
    )
}