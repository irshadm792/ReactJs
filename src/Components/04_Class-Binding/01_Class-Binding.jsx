import { useEffect,useState } from "react";
import "./Class-Binding.css"

export function ClassBinding_01(){
    const[theme, settheme]=useState('w-25');
    const[btnclass,setBtnClass]=useState('btn btn dark w-100');

    function handleThemeChange(e){
        if(e.target.checked){
            settheme('w-25 bg-dark text-white');
            setBtnClass('btn btn-light w-100');
        }else{
            settheme('w-25')
            setBtnClass('btn btn-dark w-100');

        }
    }
    return(
       <main>
         <div className="container-fluid d-flex justify-content-center aling-items-center">
            <form className={theme}>
            <h3 className="bi bi-person-fill">Login</h3>
            <div className="form-switch">
                <input type="checkbox" className="form-check-input" onChange={handleThemeChange} /><label>Dark Theme</label>

            </div>

            <dl>
                <dt>UserName</dt>
                <dd><input type="text" className="form-control" /></dd>
                <dt>password</dt>
                <dd><input type="password" className="form-control"/></dd>
            </dl>
            <button className={btnclass}>Login</button>

            </form>
        </div>
       </main>
    )
}
