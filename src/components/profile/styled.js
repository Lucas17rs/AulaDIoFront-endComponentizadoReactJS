import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: Lucida Handwriting,Lucida Console;
`;
export const WrapperStatusCont = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 15px;
    text-align: center;
  }
`;
export const WrapperUserName = styled.div`
  display: flex;
  align-items: center;
  margin-top 5px;
  h3{
    margin-right: 5px;
  }
  a{
    font-size: 130%;
    font-weight: blod;
    color: blue;
  }
`;
export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top 5px;
  h3{
    margin-right: 5px;
  }
  a{
    font-size: 130%;
    font-weight: blod;
    color: blue;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 180px;
  margin-left: 5px;

  h1 {
    font-size: 260%;
    font-weight: blod;
  }
  h3 {
    font-size: 150%;
    font-weight: blod;
  }
  h4 {
    font-size: 130%;
    font-weight: blod;
  }
`;

export const WrapperImage = styled.img`
  border-radius:30%;
  width: 15%;
  margin: 5px;
`;