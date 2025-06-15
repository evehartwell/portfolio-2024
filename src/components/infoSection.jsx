import React, { useState, useEffect } from 'react';
import { Box, Button, Text, VStack, Link, Image } from '@chakra-ui/react';

const InfoSection = () => {
    const [selected, setSelected] = useState('In Practice');

    const content = {
        'In Practice': ( 
            <>
                <Text mb={3}>I’m a designer with a technical background, passionate about building digital spaces that are both exciting to use and rooted in community. I’ve crafted systems and interfaces for local startups and initiatives in Philadelphia, including
                    {' '}<Link href="https://blackhippieart.com" isExternal color="primary.3">Black Hippie Art</Link>,
                    GovComp,
                    {' '}<Link href="https://www.thiswayout.life/" isExternal color="primary.3">This Way Out</Link>, and 
                    {' '}<Link href="https://apps.apple.com/us/app/cross-locked/id6503719487" isExternal color="primary.3">Cross Locked</Link>. 
                </Text>
                <Text mb={3}>My strengths include creative branding and shipping polished websites (whether using CMS platforms or developing them from scratch). I’m also available for consultation or quick fixes.</Text>
                <Text mb={3}>Currently looking for my next opportunity in UX or Front-End.</Text>
                <Image
                    src="/images/stickers/ccp-logo.png"
                    alt="code and coffee logo"
                    w="3rem"
                    borderRadius="4px"
                    position="relative"
                    top="20%"
                    left="85%"
                    transform="rotate(5deg)"
                    transition="all 0.1s ease-in-out"
                    boxShadow="0 5px 5px rgba(0, 0, 0, 0.2)"
                    _hover={{
                        transform: "translateY(-3px) rotate(5deg)",
                        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                        cursor: "pointer",
                    }}
                    _active={{
                        transform: "translateY(-1px) rotate(5deg)",
                        boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
                    }}
                    sx={{
                        "&::after": {
                            content: '""',
                            display: "inline-block",
                            height: "100%",
                            width: "100%",
                            borderRadius: "4px",
                            position: "relative",
                            top: 0,
                            left: 0,
                            zIndex: -1,
                            transition: "all 0.1s ease-in-out",
                        },
                        "&:hover::after": {
                            transform: "scaleX(1.4) scaleY(1.6)",
                            opacity: 0,
                        },
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        setTimeout(() => {
                            window.open("https://www.phillycodes.rsvp", "_blank");
                        }, 200); 
                    }} 
                /> 
                <Image
                    src="/images/stickers/aiga-logo.png"
                    alt="support designers!"
                    w="3rem"
                    borderRadius="4px"
                    position="relative"
                    right={{ base: "-10%", md: "15%"}}
                    transform="rotate(-15deg)"
                    transition="all 0.1s ease-in-out"
                    boxShadow="-5px 5px 5px rgba(0, 0, 0, 0.15)"
                    _hover={{
                        transform: "translateY(-3px) rotate(-15deg)",
                        boxShadow: "-5px 5px 10px rgba(0, 0, 0, 0.2)",
                        cursor: "pointer",
                    }}
                    _active={{
                        transform: "translateY(-1px) rotate(-15deg)",
                        boxShadow: "-5px 5px 5px rgba(0, 0, 0, 0.2)",
                    }}
                    sx={{
                        "&::after": {
                            content: '""',
                            display: "inline-block",
                            height: "100%",
                            width: "100%",
                            borderRadius: "4px",
                            position: "relative",
                            top: 0,
                            left: 0,
                            zIndex: -1,
                            transition: "all 0.1s ease-in-out",
                        },
                        "&:hover::after": {
                            transform: "scaleX(1.4) scaleY(1.6)",
                            opacity: 0,
                        },
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        setTimeout(() => {
                            window.open("https://www.aiga.org", "_blank");
                        }, 200); 
                    }} 
                /> 
            </>
        ),
        'Behind The Scenes': (
            <>
                <Text mb={3}>When I'm not coding or tinkering in Figma, I’m diving into the things that keep me creatively satiated, from drawing and building mechanical keyboards to obsessing over film scores. I’m an artist, cinephile, and music nerd at heart, usually found updating my Notion movie database, customizing a PC build, or headbanging at a local DIY show.</Text>
                <Text mb={3}>Recently started reading Blood Meridian by Cormac McCarthy and it's ruined my life :)</Text>
                <Image
                    src="/images/stickers/tea.png"
                    alt="I love tea"
                    display="block" 
                    w="4rem"
                    position="relative"
                    left={{ base: '80%', md: '85%'}}
                    filter="drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))"
                    transition="all 0.1s ease-in-out"
                    _hover={{
                        transform: "translateY(-3px) rotate(-8deg)",
                    }}
                />
                <Image
                    src="/images/stickers/keeb.png"
                    alt="macaron"
                    display="block" 
                    w="8rem"
                    position="relative"
                    left={{ base: '30%', md: '50%'}}
                    filter="drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))"
                    transition="all 0.1s ease-in-out"
                    transform="rotate(-5deg)"
                    _hover={{
                        transform: "translateY(-3px) rotate(1deg)",
                    }}
                />
            </>
        )
    };

    return (
        <>
            <Box
                fontSize={{ base: 'xs', sm: 'sm' }}
                h={{ base: '10rem', md: '25rem' }}
            >
                <VStack
                    align="flex-start"
                    spacing={0}
                    w="100%"
                    textAlign="left"
                >
                    {Object.keys(content).map((item) => (
                        <Button
                            key={item}
                            variant="ghost"
                            fontSize={{ base: 'xs', sm: 'sm' }}
                            p={0}
                            justifyContent="flex-start"
                            textAlign="left"
                            w="100%"
                            color={selected === item ? 'primary.1' : 'primary.3'}
                            bg="none"
                            _hover={{ color: 'primary.1' }}
                            onClick={() => setSelected(item)}
                        >
                            {item}
                        </Button>
                    ))}
                </VStack>
            </Box>

            <Box align="start" ml={{ base: 0, md: '17.5rem' }} maxW={{ base: '100%', md: '50%' }}>
                {content[selected]}
            </Box>
        </>
    );
};

export default InfoSection;
