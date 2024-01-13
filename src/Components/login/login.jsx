import React from "react";
import "./login.css"

export function Login()
{
    return(
        <React.Fragment>
           <main>
           <form>
                <h3 class="bi bi-person-fill">User Login</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text"class="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" class="form-control"/></dd>
                </dl>
                <button class="btn btn-primary w-100">Login</button>
            </form>
           </main>
        </React.Fragment>
    )
}