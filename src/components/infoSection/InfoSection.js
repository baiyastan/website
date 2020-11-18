import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import {
    InfoSec, 
    InfoRow,
    InfoColum,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements';
const infoSection = ({
    primary,
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc,
    buttonLabel,
    description,
    headline,
    lightText,
    topLine,
    img,
    alt,
    start

}) => {
    return (
        <>
        <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColum>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to='/sign-up'>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColum>
                    <InfoColum>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoColum>
                </InfoRow>
            </Container>
        </InfoSec>
            
        </>
    )
}

export default infoSection
