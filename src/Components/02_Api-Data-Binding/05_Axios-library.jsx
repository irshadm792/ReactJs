import { useEffect,useState } from "react";
import axios  from "axios";

export function ApiDataBinding_05(){
    const[products, setProducts]=useState([]);

    function LoadData(){
        axios.get("products.json")
        .then(response=>{
            setProducts(response.data)
        }) 
    }
    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
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
                        <tr key={product.Name}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    )
}