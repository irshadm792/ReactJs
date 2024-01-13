
export function DataBinding_02(){
    var email ="join_nit@outlook.com";
    return(
        <div className="container-fluid">
            <div className="mt-4">
               
            <h1> Your Id  <span className="text-success">{ email.substring(0, email.indexOf("@")) }</span> <br></br>
            Registered At  <span className="text-primary">{email.slice(email.indexOf("@")+1)}</span> </h1>
            <div>

            </div>
        {(email.endsWith("outlook.com")?"you have microsoft account":"you have google account")}
            </div>
        </div>
    )
}