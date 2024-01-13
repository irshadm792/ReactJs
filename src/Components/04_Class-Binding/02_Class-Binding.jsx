import { useEffect, useState } from "react"

export function ClassBinding_02(){

   
    const [sortClass, setSortClass] = useState('bi bi-sort-alpha-down btn btn-primary');
    const [themeColor, setThemeColor] = useState('dark')

    function handleSortClick(){
        setSortClass((sortClass==='bi bi-sort-alpha-down btn btn-primary')?'bi bi-sort-alpha-up btn btn-warning':'bi bi-sort-alpha-down btn btn-primary');
    }

    return(
        <div className="container-fluid d-flex justify-content-center mt-4">

            <div style={{padding:'50px'}} className={(themeColor==='dark')?'bg-dark':'bg-danger'}>
                <h2>Theme Color</h2>
                <button onClick={handleSortClick} className={sortClass}></button>
            </div>
        </div>
    )
}
