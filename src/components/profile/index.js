import React from "react";
import * as S  from "./styled";
import useGithub from "../../hooks/github_hooks";


const Profile = () =>
{
    const {githubState} = useGithub();

    return(
      <S.Wrapper>
        <S.WrapperImage
          src="https://avatars.githubusercontent.com/u/73747647?v=4"
          alt="picture of user"
        />
        <S.WrapperInfoUser>
          <div>
            <h1>{githubState.user.name}</h1>
            <S.WrapperUserName>
              <h3>Username: </h3>
              <a
                href="https://github.com/Lucas17rs"
                target="_blank"
                rel="noreferrer"
                >
                  EU
                </a>
            </S.WrapperUserName>
          </div>
          <S.WrapperStatusCont>
            <div>
              <h4>Followers</h4>
              <span>0</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>0</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>0</span>
            </div>
          </S.WrapperStatusCont>
        </S.WrapperInfoUser>
      </S.Wrapper>
    )
}

export default Profile;