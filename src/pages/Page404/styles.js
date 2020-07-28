import styled from 'styled-components';

import img from '../../assets/background.jpg'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${img});

  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    margin-bottom: 60px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
 
`;
