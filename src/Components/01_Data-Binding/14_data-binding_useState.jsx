import { useState } from "react";
export function  DataBinding_14(){
    const [product , setproduct] =useState({Name:",price:0,City:",Stock:false});
    const[formData, setFormData]=useState({Name:",price:0,City:",Stock:false});
    function handleNameChange(e){
        setproduct(
            {
                Name:e.target.value,
                price:product.price,
                City:product.City,
                Stock:product.Stock
            }
        )
    }

    function handlePriceChange(e){
        setproduct({
            Name:product.Name,
            price:e.target.value,
            City:product.City,
            Stock:product.Stock
        })
    }
    function handleCityChange(e){
        setproduct({
            Name:product.Name,
            price:product.price,
            City:e.target.value,
            Stock:product.Stock
        })
    }
    function handleStockChange(e){
        setproduct({
            Name:product.Name,
            price:product.price,
            City:product.City,
            Stock:e.target.checked
        })
    }
    function handleSubmitClick(){
        setFormData(product);
    }
    return(
        <div className="container-fluid">
            <div className=" row mt-4">
                <div className="col-3">
                    <dl>
                        <h3>Product Details</h3>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={handleNameChange} className="form-control"/></dd>
                        <dt>Price</dt>
                        <dd><input type="text" onChange={handlePriceChange} className="form-control"/></dd>
                        <dt>City</dt>
                        <dd><select className="form-select" onChange={handleCityChange}>
                            <option >Delhi</option>
                            <option >Mumbai</option>
                            <option >Hydrabad</option>
                            </select></dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input onChange={handleStockChange} type="checkbox" className="form-check-input" /><label>Available</label>
                        </dd> 
                    </dl>
                    <button onClick={handleSubmitClick} className="btn btn-primary w-100">Submit</button>
                </div>
                <div className="col-9 ps-4">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{formData.Name}</dd>
                        <dt>Price</dt>
                        <dd>{formData.price}</dd>
                        <dt>Shipped to</dt>
                        <dd>{formData.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(formData.Stock==true)?"Available":"Out of stock"}</dd>
                    </dl>

                </div>

            </div>

        </div>
    )

}