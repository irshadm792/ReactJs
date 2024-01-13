export function DataBinding_08(){
    var menu =["Home","Shop","men fashion's","women fashion's"]
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-warning text-white">
                <div className="container-fluid">
                    <h2 className="navbar-brand text-white">Amazon</h2>
                    <button className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
                    <ul className="navbar-nav">
                        {
                            menu.map(item=><li className="nav-item" key={item}><a className="nav-link">{item}</a></li>)
                        }

                    </ul>
                

                </div>

            </nav>
        </div>
    )
}