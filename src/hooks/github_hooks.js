import { useContext } from "react";
import { GithubContext } from "../providers/github_provider";


const useGithub = () =>{
    const {githubState} = useContext(GithubContext);
    return {githubState};

};

export default useGithub;