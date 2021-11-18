import React,{createContext, useCallback, useState} from "react";
import { children } from "react";
import api from "../services/api";

export const GithubContext = createContext({
    user: {},
    repositores: [],
    starred: [],
    lading: false
})

const GithubProvider = ({children}) =>
{
    const [githubState, setgithubState] = useState ({
        lading: false,
        user: {
            avatar_url: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            followers: 0,
            following: 0,
            public_repos: 0,
            public_gists: 0,
        },
        repositores: [],
        starred: []
    });

    const getUser = (username) => {
        api.get('users/${username}').then(({data:{ user }}) =>{
            setgithubState(prevState => ({
                ...prevState,user:{
                    user: {
                        avatar_url: user.avatar_url,
                        login: user.login,
                        name: user.name,
                        html_url: user.html_url,
                        followers: user.ollowers,
                        following: user.following,
                        public_repos: user.public_repos,
                        public_gists: user.public_gists,
                    },
                } 
            }))

        })
    }

    const contextValue ={
        githubState,
        getUser:useCallback((username) => getUser(username), []),
    };


    return(
        <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
    );
};
export default GithubProvider;