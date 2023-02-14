import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem 0;
`;

const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 0.5rem;
`;

const Text = styled.span`
  font-size: 1.4rem;
`;

export { Text, Date, Name, Details, Avatar, Container };
