import styled from "styled-components";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const NoComments = styled.h1`
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

const BtnSend = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
`;

export { Avatar, Input, NewComment, Container, NoComments, Form, BtnSend };
