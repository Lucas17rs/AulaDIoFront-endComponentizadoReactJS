import React, { Children } from "react";

function Layout ({children}) {
    return(
        <section>
            <header>Bom Dia</header>
            {children}
        </section>
    )
}
export default Layout;