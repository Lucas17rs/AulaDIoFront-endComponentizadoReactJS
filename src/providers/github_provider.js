import React,{createContext, useState} from "react";
import { children } from "react";

export const GithubContext = createContext({
    user: {},
    repositores: [],
    starred: []
})

const GithubProvider = ({children}) =>
{
    const [githubState, setgithubState] = useState ({
        user: {
            login: undefined,
            name: undefined,
            publicUrl: undefined,
            followers: 0,
            following: 0,
            public_repos: 0,
            public_gists: 0,
        },
        repositores: [],
        starred: []
    });

    const contextValue ={
        githubState,

    };


    return(
        <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
    );
};
export default GithubProvider;