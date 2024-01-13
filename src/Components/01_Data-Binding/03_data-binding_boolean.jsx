export function DataBinding_03(){
    var stock =false;
    return(
        <div className="container-fluid">
            <div className="mt-4">
            <h2>stock ={(stock==true)?"available":"out of Stock"}</h2>
            </div>

        </div>
    )
}