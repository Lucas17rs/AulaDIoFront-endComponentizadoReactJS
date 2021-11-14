import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: "Lucida Handwriting", "Lucida Console";
`;
export const WrapperStatusCont = styled.div`
  display: flex;
  align-items: center;
`;
export const WrapperUserName = styled.div`
  display: flex;
  align-items: center;
  h3{
    margin-right: 5px;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
  margin-left: 5px;
`;

export const WrapperImage = styled.img`
  border-radius:30%;
  width: 15%;
  margin: 5px;
`;