import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "25%"};
  margin-bottom: ${(props) => (props.type === "sm" ? "1rem" : "4.5rem")};
  display: ${(props) => props.type === "sm" && "flex"};
  align-items: ${(props) => props.type === "sm" && "center"};
  padding: 1rem;
  gap: 0 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "12rem" : "16rem")};
  border-radius: 1rem;
`;

const Details = styled.div`
  margin-top: ${(props) => props.type !== "sm" && "1.5rem"};
  display: flex;
  gap: 1.2rem;
`;

const ChannelImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`
  gap: 1.2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSoft};
  margin: 1rem 0;
`;

const Info = styled.div`
  font-size: small;
  color: ${({ theme }) => theme.textSoft};
`;

export {
  Container,
  Image,
  Details,
  ChannelImage,
  Texts,
  Title,
  ChannelName,
  Info,
};
