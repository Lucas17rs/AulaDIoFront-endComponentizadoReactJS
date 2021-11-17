import React from "react";
import RepositoryItem from "../repository_item";
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
            <S.WrapperTabPanel>
                RepositoryItem
                <RepositoryItem
                name="repo 1"
                linkToRepo = "https://github.com/Lucas17rs/ApiCorona"
                fullName = "Lucas17rs/ApiCorona"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                panel Starred
                <RepositoryItem
                    name="repo 2"
                    linkToRepo = "https://github.com/Lucas17rs/ApiCorona"
                    fullName = "Lucas17rs/ApiCorona"
                />
                </S.WrapperTabPanel>
            
        </S.WrapperTabs>
    );
};
export default Repositories;