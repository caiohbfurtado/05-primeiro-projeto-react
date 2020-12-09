import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  a.back {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #a8a8b3;
    transition: color 0.2s;

    strong {
      font-weight: bold;
      font-size: 16px;
      margin-left: 12px;
    }

    &:hover {
      color: ${shade(0.2, '#a8a8b3')};
    }
  }
`;

export const Content = styled.div`
  margin-top: 80px;
`;

export const HeaderInfo = styled.header`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: 32px;
  }

  h1 {
    color: #3d3d4d;
    font-weight: bold;
    font-size: 36px;
  }

  p {
    color: #737380;
    margin-top: 12px;
    font-size: 18px;
  }
`;

export const NumberInfos = styled.div`
  margin-top: 40px;

  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin-right: 80px;

    h2 {
      color: #3d3d4d;
      font-size: 36px;
      font-weight: bold;
    }

    span {
      color: #6c6c80;
      display: block;
      margin-top: 4px;
      font-size: 20px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const IssuesList = styled.div`
  margin-top: 80px;
  width: 100%;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 10px;
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

    &:hover {
      transform: translateX(10px);
    }
  }

  div {
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
`;
