import React from 'react';
import styled from 'styled-components';
import LOGO from '../../assets/images/header/logo.svg';
import PHONE from '../../assets/images/header/phone.svg';
import MESSAGES from '../../assets/images/header/chat.svg';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #f8f8f8;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-right: 200px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  
  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
`;

const Right = styled.div`
  display: flex;
  gap: 20px;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
`;

const ContactText = styled.div`
  p {
    margin: 0;
    font-size: 14px;
  }

  h7 {
    margin: 0;
    font-size: 15px;
  }
`;

const Header = () => {
  return (
    <Container>

      <Left>
        <Logo src={LOGO} alt="logo" />
        <Nav>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">News</a>
          <a href="#">Contacts</a>
        </Nav>
      </Left>

      <Right>
        <Contact>
          <img src={PHONE} alt="phone" />
          <ContactText>
            <p>Call us</p>
            <h7>(405) 555-01280</h7>
          </ContactText>
        </Contact>

        <Contact>
          <img src={MESSAGES} alt="messages" />
          <ContactText>
            <p>Talk to us</p>
            <h7>hello@createx.com</h7>
          </ContactText>
        </Contact>

      </Right>
    </Container>
  );
};

export default Header;
