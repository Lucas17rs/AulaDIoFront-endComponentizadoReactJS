import React,{createContext, useCallback, useState} from "react";
import api from "../services/api";

export const GithubContext = createContext({
    user: {},
    repositores: [],
    starred: [],
    loading: false,
});

const GithubProvider = ({children}) =>
{
    const [githubState, setGithubState] = useState ({
        hasUser: false,
        loading: false,
                user: {
                    id:undefined,
                    avatar_url: undefined,
                    login: undefined,
                    name: undefined,
                    html_url: undefined,
                    followers: 0,
                    following: 0,
                    public_repos: 0,
                    public_gists: 0,
                    company: undefined,
        },
        repositores: [],
        starred: [],
    });

    const getUser = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));
        api
            .get(`users/${username}`)
            .then(({ data }) => 
            {
                console.log(data);
                setGithubState((prevState) => ({
                    ...prevState,
                        hasUser:true,
                        user: {
                            id: data.id,
                            avatar_url: data.avatar_url,
                            login: data.login,
                            name: data.name,
                            html_url: data.html_url,
                            followers: data.followers,
                            following: data.following,
                            public_repos: data.public_repos,
                            public_gists: data.public_gists,
                            company: data.company,
                        },
            }));

        })
        .finally(() => {
            setGithubState((prevState) => ({
              ...prevState,
              loading: !prevState.loading,
            }));
          });

    };
// getUserRepos
    const getUserRepos = (username) => {
        api
            .get(`users/${username}/repos`)
            .then(({ data }) => 
            {
                setGithubState((prevState) => ({
                    ...prevState,
                    repositores: data,
                }));
            });
    };
//*
    const getUserStarred = (username) => {
        api
            .get(`users/${username}/starred`)
            .then(({ data }) => 
            {
                setGithubState((prevState) => ({
                    ...prevState,
                    starred: data,
                }));
            });
    };

    const contextValue ={
        githubState,
        getUser:useCallback((username) => getUser(username), []),
        getUserRepos:useCallback(() => getUserRepos(), []),
        getUserStarred:useCallback(() => getUserStarred(), []),
    };


    return(
        <GithubContext.Provider
            value={contextValue}>{children}
        </GithubContext.Provider>
    );
};
export default GithubProvider;