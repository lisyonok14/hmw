import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import LOGO from '../../assets/images/footer/logo.svg';
import SOCIALS from '../../assets/images/footer/socials.svg';

const FooterWrapper = styled.div`
  background-color: #1E212C;
  display: flex;
  flex-direction: column;
  padding: 7% 13%;
`;

const Text = styled.p`
  font-size: 14px;
  color: #FFFFFF;
`;

const TopFoot = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logos = styled.div`
  display: flex;
  img {
    width: 32%;
    margin-right: 17%;
    margin-bottom: 4%;
  }
`;

const RightFoot = styled.div`
  width: 38%;
`;

const LeftFoot = styled.div`
  width: 40%;
  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #FFFFFF;
  }
  .inp {
    input {
      background-color: #393C46;
      border: 1px solid #61636B;
      border-radius: 5px 0 0 5px;
      padding: 12px 16px;
      width: 350px;
      margin: 3% 0;
      color: #B0B1B5;
    }
    button {
      background-color: #FF5A30;
      border: none;
      color: white;
      font-size: 14px;
      font-weight: 700;
      padding: 12px 16px;
      border-radius: 0 5px 5px 0;
    }
  }
`;

const CenterFoot = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-top: 6%;
  
  .column {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 16px;
      font-weight: 700;
      color: white;
      margin-bottom: 30px;
    }
    a {
      text-decoration: none;
      color: #A5A6AB;
      margin: 0 0 15px 0;
      font-size: 16px;
      span {
        color: white;
        font-weight: 700;
      }
    }
  }
`;

const BottomFoot = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6%;
  
  .goTop {
    display: flex;
    width: 10%;
    p {
      font-size: 14px;
      margin-top: 30px;
      margin-right: 8%;
    }
    button {
      padding: 7px 13px 0 13px;
      font-size: 30px;
      border: none;
      border-radius: 3px;
      background-color: #FF5A30;
      color: #FFFFFF;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Footerr = () => {
  return (
    <>
    <GlobalStyle />
    <FooterWrapper>
      <TopFoot>
        <RightFoot>
          <Logos>
            <img src={LOGO} alt="Logo" />
            <img className="soc" src={SOCIALS} alt="Social Media" />
          </Logos>
          <Text>Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service. Our mission is to set the highest standards for construction sphere.</Text>
        </RightFoot>

        <LeftFoot>
          <h2>Let's stay in touch</h2>
          <div className="inp">
            <input type="email" placeholder="Your email address" />
            <button>SUBSCRIBE</button>
          </div>
          <Text>*Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.</Text>
        </LeftFoot>
      </TopFoot>

      <CenterFoot>
        <div className="column">
          <h4>HEAD OFFICE</h4>
          <a href="#"><span>Address:</span> 8502 Preston Rd. Inglewood, New York</a>
          <a href="#"><span>Call:</span> (405) 555-0128</a>
          <a href="#"><span>Email:</span> hello@createx.com</a>
        </div>

        <div className="column">
          <h4>WHO WE ARE</h4>
          <a href="#">About Us</a>
          <a href="#">Available Positions</a>
          <a href="#">Contacts</a>
        </div>

        <div className="column">
          <h4>OUR EXPERIENCE</h4>
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">News</a>
        </div>
      </CenterFoot>

      <BottomFoot>
        <Text>© All rights reserved. Made with 🧡 by Createx Studio</Text>
        <div className="goTop">
          <Text>GO TO TOP</Text>
          <button>^</button>
        </div>
      </BottomFoot>
    </FooterWrapper>
    </>
  );
};

export default Footerr;
