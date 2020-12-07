import React from "react";
import {Container, Copyright, FooterItems, Column,ColumnContent,Logo, Header, Content, SLink, ContactsContainer, ContactContainer,Social, SocialIcon} from "../styled-components/footer";
import {FaPhone, FaFacebook, FaFacebookMessenger, FaTwitter} from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";

const Footer = () => {
  return (
    <Container id="footer">
        <FooterItems>
            <Column>
                <ColumnContent>
                 <Logo>Phonez</Logo>
               
                 <Content>
                 <Header>About us</Header>
                    Phonez gives you the ability to quickly and quickly find the right address and have it delivered to your home in no time, to one of the locations, provided it is in one of the EU countries.
                </Content>
                </ColumnContent></Column>
            <Column>
             <ColumnContent>
            <Content>
              <Header>Navigation</Header>
              <SLink to="/">Home</SLink>
              <SLink to="/products">Products</SLink>
              <SLink>Dashboard</SLink>
              <SLink to="#footer">Contact</SLink>
            </Content>
             </ColumnContent>
            </Column>
            <Column>
             <ColumnContent>
              <Content>
               <Header>Contact</Header>
               <ContactsContainer>
                <ContactContainer><FaPhone/> 785 666 777</ContactContainer>
                <ContactContainer><AiFillMail/> test@gmail.com</ContactContainer>
                <Social>
                    <SocialIcon color="#3b5998"><FaFacebook/></SocialIcon>
                    <SocialIcon color="#0078FF"><FaFacebookMessenger/></SocialIcon>
                    <SocialIcon color="#1DA1F2"><FaTwitter/></SocialIcon>
                </Social>
               </ContactsContainer>
              </Content>
             </ColumnContent>
            </Column>
            <Copyright>&copy; Copywright Berg Kacper</Copyright>
        </FooterItems>
    </Container>
  );
};

export default Footer;
