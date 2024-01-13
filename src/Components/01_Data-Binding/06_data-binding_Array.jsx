import './06_data-binding_Array.css';
export function DataBinding_06(){
    var categories =["All","Electronics","Footwear","fashion"]
    return(
        <div className="container-fluid">
            <div className="mt=4">
                <ol>
                    {
                        categories.map(categories=><li key={categories}>{categories}</li>)
                    }
                </ol>
                <select>
                {
                        categories.map(categories=><option key={categories}>{categories}</option>)
                 }
                </select>
                <ul className="scrollable">
                    {
                        categories.map(categories=><li key={categories}> <input type="checkbox" /> <label>{categories}</label></li>)
                    }
                </ul>

            </div>
        </div>
    )
}