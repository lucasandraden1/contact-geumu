import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px 20px;
`;

export const Logo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 2px solid #fff;
  background: #fff;
`;

export const Profile = styled.p`
  margin: 0px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
`;

export const Title = styled.p`
  padding: 0px;
  margin: 0px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Button = styled.a`
  background: ${({ active }) => (active ? "#fff" : "transparent")};
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ active }) => (active ? "#5d3a96" : "#fff")};
  width: 100%;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    background: #fff;
    color: #5d3a96;
  }
`;

export const Modal = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
  animation: show 1s;
  transition: 0.3s all;

  @keyframes show {
    0% {
      opacity: 0;
      transition: 0.3s all;
    }
    100% {
      opacity: 1;
      transition: 0.3s all;
    }
  }

  @media screen {
    padding: 30px 20px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  width: 100%;
  padding: 10px;
  color: #5d3a96;
  font-weight: 600;
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body{
        background: #5D3A96;
    }
`;
