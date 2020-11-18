import React from 'react';
import { 
    FaYoutube,
    FaInstagram, 
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaWhatsapp
} from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIcon,
    SocialIconLink,
    WebsiteRights,
    
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive 
                    the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button>Subscribe</Button>
                </Form>
            </FooterSubscription> 
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'> How it Works</FooterLink>
                        <FooterLink to='/'> Testimonials</FooterLink>
                        <FooterLink to='/'> Careers</FooterLink>
                        <FooterLink to='/'> Investors</FooterLink>
                        <FooterLink to='/'> Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'> How it Works</FooterLink>
                        <FooterLink to='/'> Testimonials</FooterLink>
                        <FooterLink to='/'> Careers</FooterLink>
                        <FooterLink to='/'> Investors</FooterLink>
                        <FooterLink to='/'> Terms of Service</FooterLink>
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'> How it Works</FooterLink>
                        <FooterLink to='/'> Testimonials</FooterLink>
                        <FooterLink to='/'> Careers</FooterLink>
                        <FooterLink to='/'> Investors</FooterLink>
                        <FooterLink to='/'> Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'> How it Works</FooterLink>
                        <FooterLink to='/'> Testimonials</FooterLink>
                        <FooterLink to='/'> Careers</FooterLink>
                        <FooterLink to='/'> Investors</FooterLink>
                        <FooterLink to='/'> Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>Акматалиев Баястан <br/> 0772616119</WebsiteRights>
                    <SocialIcons>
                    <SocialIconLink href='/' target="_blank" aria-label="FaFacebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                        <FaInstagram/>
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                        <FaYoutube/>
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                        <FaTwitter/>
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                        <FaLinkedin/>
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Whatsapp">
                        <FaWhatsapp/>
                    </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;

