import styled from "styled-components";

const Container = styled.div`
  flex: 1.3;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1rem;
  }
  &/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px ${({ theme }) => theme.hover};
    border-radius: 0.1rem;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.hover};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const Wrapper = styled.div`
  padding: 1.8rem 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Name = styled.span`
  font-size: small;
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  color: ${({ theme }) => theme.text};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;

const Hr = styled.hr`
  margin: 1.5rem 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

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

export { Container, Wrapper, Logo, Name, Item, Hr, Login, BtnLogin };
