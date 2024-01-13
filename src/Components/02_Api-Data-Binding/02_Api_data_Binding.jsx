
import { useEffect, useState } from "react"


export function ApiDataBinding_02()
{

    const [products, setProducts] = useState([]);

    function LoadData(){
        var http = new XMLHttpRequest();
        http.open("get", "products.json", true);
        http.send();
        http.onreadystatechange = function(){
            if(http.readyState==4){
                setProducts(JSON.parse(http.responseText));
                console.log(http.responseText);
            }
        }
    }

    useEffect(()=>{
        LoadData();
    },[]);

    return(
        <div className="container-fluid">
            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
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