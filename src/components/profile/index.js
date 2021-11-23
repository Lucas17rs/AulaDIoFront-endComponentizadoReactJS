import React from "react";
import * as S  from "./styled";
import useGithub from "../../hooks/github_hooks";


const Profile = () =>
{
    const {githubState} = useGithub();

    return(
      <S.Wrapper>
        <S.WrapperImage
          src={githubState.user.avatar_url}
          alt="picture of user"
        />
        <S.WrapperInfoUser>
          <div>
            <h1>{githubState.user.name}</h1>
            <S.WrapperUserName>
              <h3>Username: </h3>
              <a
                href={githubState.user.html_url}
                target="_blank"
                rel="noreferrer"
                >
                  {githubState.user.login}
                </a>
            </S.WrapperUserName>
            <S.WrapperUserGeneric>
              <h3>Company:</h3>
              <span>{githubState.user.company}</span>
            </S.WrapperUserGeneric>

          </div>

          <S.WrapperStatusCont>
            <div>
              <h4>Followers</h4>
              <span>{githubState.user.followers}</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>{githubState.user.following}</span>
            </div>
            <div>
              <h4>Gists</h4>
              <span>{githubState.user.public_gists}</span>
            </div>
            <div>
              <h4>Repos</h4>
              <span>{githubState.user.public_repos}</span>
            </div>
            
          </S.WrapperStatusCont>
        </S.WrapperInfoUser>
      </S.Wrapper>
    )
}

export default Profile;