import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem;
`;

const NoSub = styled.h1`
  color: ${({ theme }) => theme.text};
`;

export { Container, NoSub };
