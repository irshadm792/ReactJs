import { useState } from "react";

export function DataBinding_12(){
    const [userName,setUserName]=useState('john');
    function handleUserName(e){
        setUserName(e.target.value);

    }
    return(
        <div className="container-fluid">
            <h2>Two Way Binding</h2>
            <dl>
                <dt>Username</dt>
                <dd><input type="text" onChange={handleUserName} value={userName} /></dd>
            </dl>
            <p>hello ! {userName}</p>

        </div>
    )
}