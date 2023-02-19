import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 5.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 2rem;
  position: relative;
`;

const Search = styled.form`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const BtnLogin = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin: 0.5rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BtnLogout = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #d23513;
  border: 1px solid #b82202;
  color: #121111;
  border-radius: 3px;
  font-weight: bolder;
  margin: 0.5rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;
const BtnSend = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
`;

export {
  Search,
  BtnLogin,
  Input,
  Wrapper,
  Container,
  User,
  Avatar,
  BtnSend,
  BtnLogout,
};
