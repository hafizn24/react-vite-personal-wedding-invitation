import React from 'react'
import { useRef } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { FaGoogle } from "react-icons/fa";
import { FaWaze } from "react-icons/fa6";
import PhoneContact from './PhoneContact';

function WeddingInvitation() {

    const lowerRef = useRef(null);

    const scrollToLower = () => {
        const element = lowerRef.current;
        if (element) {
            const elementTop = element.offsetTop;
            const startTop = window.pageYOffset;
            const distance = elementTop - startTop;
            const duration = 1500;
            let startTime = null;

            function animateScroll(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);

                // Smooth easing function
                const easeInOutQuad = progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

                window.scrollTo(0, startTop + distance * easeInOutQuad);

                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                }
            }

            requestAnimationFrame(animateScroll);
        }
    }

    return (
        <>
            {/* Upper Section */}
            <Box
                sx={{
                    minHeight: "100dvh",
                    backgroundImage: "url('background_1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 2,
                }}
            >
                <Box>

                    <Typography variant="h4" sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: '2.5rem',
                        color: '#1a365d',
                        mb: 3,
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontWeight: 500
                    }}>
                        Walimatul Urus
                    </Typography>

                    <Box sx={{ m: 3 }}>
                        <Typography variant="h4" sx={{
                            fontFamily: '"Parisienne", cursive',
                            fontSize: '4rem',
                            color: '#2b579a',
                            fontWeight: 400
                        }}>Natasyaaa</Typography>
                        <Typography variant="h5" sx={{
                            fontFamily: '"Playfair Display", serif',
                            fontSize: '1.5rem',
                            color: '#4a5568',
                            my: 1.5,
                            letterSpacing: '4px',
                            textTransform: 'uppercase'
                        }}>&</Typography>
                        <Typography variant="h4" sx={{
                            fontFamily: '"Parisienne", cursive',
                            fontSize: '4rem',
                            color: '#2b579a',
                            fontWeight: 400
                        }}>Iskandar</Typography>
                    </Box>

                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            fontSize: '1.5rem',
                            color: '#2d4a6d',
                            mb: 3,
                            mt: 1,
                            letterSpacing: '1px',
                            fontWeight: 500
                        }}
                    >
                        06 Disember 2025
                    </Typography>


                    <Box sx={{ mt: 2, mb: 3 }}>
                        <Typography sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            fontSize: '1.4rem',
                            color: '#2d4a6d',
                            lineHeight: 1.0,
                            letterSpacing: '0.5px'
                        }}>
                            Dewan Desa Keda Singkir
                        </Typography>
                        <Typography sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            fontSize: '1.4rem',
                            color: '#2d4a6d',
                            lineHeight: 1.1,
                            letterSpacing: '0.5px'
                        }}>
                            06900 Yan, Kedah
                        </Typography>
                    </Box>

                    <IconButton 
                        onClick={scrollToLower}
                        sx={{
                            color: '#2d4a6d',
                            border: '1px solid rgba(45, 74, 109, 0.2)',
                            padding: '12px',
                            transition: 'all 0.4s ease',
                            animation: 'float 2s ease-in-out infinite',
                            '@keyframes float': {
                                '0%, 100%': {
                                    transform: 'translateY(0)',
                                },
                                '50%': {
                                    transform: 'translateY(10px)',
                                },
                            },
                            '&:hover': {
                                background: 'rgba(45, 74, 109, 0.04)',
                                border: '1px solid rgba(45, 74, 109, 0.4)',
                                transform: 'translateY(5px)'
                            }
                        }}
                    >
                        <ArrowDownwardIcon sx={{ fontSize: '1.8rem' }} />
                    </IconButton>
                </Box>
            </Box>

            {/* Lower Section */}
            <Box
                ref={lowerRef}
                sx={{
                    minHeight: "100dvh",
                    backgroundImage: "url('background_2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 2,
                    py: 6
                }}
            >
                <Box sx={{ 
                    maxWidth: 500,
                    width: '100%',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h5" sx={{ 
                            mb: 2, 
                            color: '#1a365d', 
                            fontFamily: '"Playfair Display", serif',
                            fontSize: '1.8rem',
                            fontWeight: 500,
                            letterSpacing: '0.5px'
                        }}>
                            Mansor bin Din & Sofiah binti Ahmad
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: '"Cormorant Garamond", serif',
                                fontSize: '1.3rem',
                                lineHeight: 1.0,
                                color: '#4a5568',
                                letterSpacing: '0.5px',
                                fontWeight: 400
                            }}
                        >
                            Dengan penuh kesyukuran ke hadrat ilahi, Kami menjemput ke majlis
                            perkahwinan puteri kami yang dikasihi
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h5" sx={{ 
                            color: '#2b579a', 
                            mb: 1,
                            fontFamily: '"Parisienne", cursive',
                            fontSize: '2.2rem',
                            fontWeight: 400
                        }}>
                            Nurul Natasya Binti Mansorr
                        </Typography>
                        <Typography sx={{ 
                            color: '#4a5568', 
                            fontFamily: '"Playfair Display", serif',
                            fontSize: '0.8rem',
                            my: 1.8,
                            letterSpacing: '3px',
                            textTransform: 'uppercase'
                        }}>
                            Dengan Pasangannya
                        </Typography>
                        <Typography variant="h5" sx={{ 
                            color: '#2b579a',
                            fontFamily: '"Parisienne", cursive',
                            fontSize: '2.2rem',
                            fontWeight: 400
                        }}>
                            Muhammad Iskandar Bin Hassan
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: '"Cormorant Garamond", serif',
                                fontSize: '1.4rem',
                                color: '#2d4a6d',
                                fontWeight: 500,
                                mb: 1,
                                letterSpacing: '0.8px',
                                lineHeight: 1.2
                            }}
                        >
                            Sabtu, 6 Disember 2025 <br />
                            12:00 Tengah hari - 5:00 Petang
                        </Typography>

                        <Typography sx={{ 
                            color: '#4a5568',
                            fontFamily: '"Playfair Display", serif',
                            fontSize: '1.2rem',
                            mt: 3,
                            mb: 1,
                            letterSpacing: '3px',
                            textTransform: 'uppercase'
                        }}>
                            Bertempat di
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: '"Cormorant Garamond", serif',
                                color: '#2d4a6d',
                                fontSize: '1.4rem',
                                letterSpacing: '0.5px',
                                lineHeight: 1.0,
                                fontWeight: 500
                            }}
                        >
                            Dewan Desa Keda Singkir, <br />
                            06900 Yan, Kedah
                        </Typography>
                    </Box>

                    <Box 
                        sx={{ 
                            display: "flex", 
                            justifyContent: "center",
                            gap: 1,
                            width: '100%',
                            mb: 2
                        }}
                    >
                        <IconButton
                        onClick={() =>
                            window.open("https://maps.app.goo.gl/6RPhepYDJqBr3jVs8", "_blank")
                        }
                        sx={{
                            color: '#2d4a6d',
                            padding: '12px',
                            border: '1px solid rgba(45, 74, 109, 0.3)',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(45, 74, 109, 0.04)',
                                border: '1px solid rgba(45, 74, 109, 0.5)'
                            }
                        }}
                    >
                        <FaGoogle style={{ fontSize: 32 }} />
                    </IconButton>

                    <IconButton
                        onClick={() =>
                            window.open("https://waze.com/ul/hw1p2s3y0k", "_blank")
                        }
                        sx={{
                            color: '#0a7aa6',
                            padding: '12px',
                            border: '1px solid rgba(10, 122, 166, 0.3)',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(10, 122, 166, 0.04)',
                                border: '1px solid rgba(10, 122, 166, 0.5)'
                            }
                        }}
                    >
                        <FaWaze style={{ fontSize: 32 }} />
                    </IconButton>
                </Box>
                </Box>
                
                <Box sx={{ width: '100%', display: "flex", gap: 1 }}>
                    <PhoneContact />
                </Box>
            </Box>
        </>
    );
}

export default WeddingInvitation;