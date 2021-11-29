import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github_hooks";
import RepositoryItem from "../repository_item";
import * as S from "./styled";

const Repositories = () => {
    const {githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchrepos ,setHasUserForSearchrepos] = useState(false);

    useEffect (() => {
        if(githubState.user.login){
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchrepos(githubState.repositories);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login]);

    return (
        <>
        {hasUserForSearchrepos ? (
            <S.WrapperTabs
            selectedTabClassname="is-selected"
            selectedTabPanelClassName="is-selected"
            >
                <S.WrapperTabsList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabsList>
                <S.WrapperTabPanel>
                    <S.WrapperList>
                        {githubState.repositories.map(item => (
                            <RepositoryItem
                                key={item.id}
                                name={item.name}
                                linkToRepo = {item.linkToRepo}
                                fullName = {item.fullName}
                            />
                            ))}
                    </S.WrapperList>
                </S.WrapperTabPanel>
                <S.WrapperTabPanel>
                    <S.WrapperList>
                        {githubState.starred.map(item => (
                        <RepositoryItem
                            key={item.id}
                            name={item.name}
                            linkToRepo = {item.linkToRepo}
                            fullName = {item.fullName}
                        />
                        ))}
                    </S.WrapperList>
                </S.WrapperTabPanel>
            </S.WrapperTabs>
        ): (
            <> </>
        )}
    </>
    );
};
export default Repositories;