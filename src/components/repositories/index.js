import React from "react";
import * as S from "./styled"

const Repositories = () => {
    return (
        <S.WrapperTabs
        selectedTabClassname="is-selected"
        selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabsList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabsList>
            <S.WrapperTabPanel>panel Repositories</S.WrapperTabPanel>
            <S.WrapperTabPanel>panel Starred</S.WrapperTabPanel>
            
        </S.WrapperTabs>
    );
};
export default Repositories;