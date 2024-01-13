import $ from "jquery"
import { useEffect,useState } from "react"

export function ApiDataBinding_04(){
    const[products, setProducts]=useState([]);
     
    function LoadData(){
        $.ajax({
            method:'get',
            url:"products.json",
            success:(data)=>{
                setProducts(data);
            }

        })
    }

    useEffect(()=>{
        LoadData();
    },[]);

    return(
        <div className="container-fluid">
            <h2>prooducy item details</h2>
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

                            </tr>
                        )
                    }
                </tbody>

            </table>

        </div>
    )
}