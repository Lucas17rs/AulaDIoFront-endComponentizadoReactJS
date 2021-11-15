import React, { Children } from "react";
import * as S from "./styled"

function Layout ({children}) {
    return(
        <S.WrapperLayout>
            <header>Bom Dia</header>
            {children}
        </S.WrapperLayout>
    )
}
export default Layout;