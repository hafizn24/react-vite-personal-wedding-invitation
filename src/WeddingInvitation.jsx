import React, { useRef } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FaGoogle } from 'react-icons/fa';
import { FaWaze } from 'react-icons/fa6';
import PhoneContact from './PhoneContact';

function WeddingInvitation() {
    const lowerRef = useRef(null);

    const scrollToLower = () => {
        const element = lowerRef.current;
        if (!element) return;

        const targetY = element.getBoundingClientRect().top + window.pageYOffset;
        const startY = window.pageYOffset;
        const distance = targetY - startY;
        const duration = 2000; // slower scroll (2 seconds)
        let startTime = null;

        function animateScroll(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Ease-in-out quadratic
            const easeInOutQuad =
                progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            const scrollY = startY + distance * easeInOutQuad;

            // Mobile-safe scroll
            window.scrollTo(0, scrollY);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    };


    return (
        <>
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('background_2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >

            </Box >
            {/* Upper Section */}
            < Box
                sx={{
                    minHeight: "100vh",
                    backgroundImage: "url('background_1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 2,
                    position: "relative", // Ensure it stays above the fixed background
                    zIndex: 1,
                }
                }
            >
                <Box>
                    <Typography sx={(theme) => ({
                        ...theme.typography.serifFont,
                        color: '#1a365d',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        mb: 3,
                        fontSize: '2.5rem',
                    })}>
                        WALIMATUL URUS
                    </Typography>

                    <Box sx={{ m: 3 }}>
                        <Typography sx={(theme) => ({
                            ...theme.typography.cursiveFont,
                            color: '#2b579a',
                            fontSize: '4rem',
                        })}>
                            Natasya
                        </Typography>
                        <Typography sx={(theme) => ({
                            ...theme.typography.serifFont,
                            color: '#4a5568',
                            my: 1.5,
                            letterSpacing: '4px',
                            textTransform: 'uppercase',
                            fontSize: '1.5rem',
                        })}>
                            &
                        </Typography>
                        <Typography sx={(theme) => ({
                            ...theme.typography.cursiveFont,
                            color: '#2b579a',
                            fontSize: '4rem',
                        })}>
                            Iskandar
                        </Typography>
                    </Box>

                    <Typography sx={(theme) => ({
                        ...theme.typography.altSerifFont,
                        color: '#2d4a6d',
                        fontSize: '1.5rem',
                        mb: 3,
                        mt: 1,
                        letterSpacing: '1px',
                    })}>
                        06 Disember 2025
                    </Typography>

                    <Box sx={{ m: 3 }}>
                        <Typography sx={(theme) => ({
                            ...theme.typography.altSerifFont,
                            fontSize: '1.4rem',
                            color: '#2d4a6d',
                            lineHeight: 1.0,
                            letterSpacing: '0.5px'
                        })}>
                            Dewan Desa Keda Singkir
                        </Typography>
                        <Typography sx={(theme) => ({
                            ...theme.typography.altSerifFont,
                            fontSize: '1.4rem',
                            color: '#2d4a6d',
                            lineHeight: 1.1,
                            letterSpacing: '0.5px'
                        })}>
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
            </Box >

            {/* Lower Section */}
            < Box
                ref={lowerRef}
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 2,
                    py: 6,
                    position: "relative", // Ensure it stays above the fixed background
                    zIndex: 1,
                }}
            >

                <Box sx={{ m: 2 }}>
                    <Typography sx={(theme) => ({
                        ...theme.typography.serifFont,
                        color: '#1a365d',
                        mb: 2,
                        fontSize: '1.25rem',
                    })}>
                        Mansor bin Din & Sofiah binti Ahmad
                    </Typography>

                    <Typography sx={(theme) => ({
                        ...theme.typography.altSerifFont,
                        color: '#4a5568',
                        lineHeight: 1.0,
                        letterSpacing: '0.5px',
                        m: 3,
                        fontSize: '1.0rem',
                    })}>
                        Dengan penuh kesyukuran ke hadrat ilahi, Kami menjemput ke majlis
                        perkahwinan puteri kami yang dikasihi
                    </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                    <Typography sx={(theme) => ({
                        ...theme.typography.cursiveFont,
                        color: '#2b579a',
                        mb: 1,
                        fontSize: '2.0rem',
                    })}>
                        Nurul Natasya Binti Mansor
                    </Typography>

                    <Typography sx={(theme) => ({
                        ...theme.typography.altSerifFont,
                        color: '#4a5568',
                        my: 1.8,
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                    })}>
                        Dengan Pasangannya
                    </Typography>

                    <Typography sx={(theme) => ({
                        ...theme.typography.cursiveFont,
                        color: '#2b579a',
                        mb: 2,
                        fontSize: '2.0rem',
                    })}>
                        Muhammad Iskandar Bin Hassan
                    </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                    <Typography sx={(theme) => ({
                        ...theme.typography.altSerifFont,
                        color: '#2d4a6d',
                        mb: 1,
                        letterSpacing: '0.8px',
                        lineHeight: 1.2,
                        fontSize: '1.0rem',
                    })}>
                        Sabtu, 6 Disember 2025 <br />
                        12:00 Tengah hari - 5:00 Petang
                    </Typography>

                    <Typography sx={(theme) => ({
                        ...theme.typography.serifFont,
                        color: '#4a5568',
                        mt: 3,
                        mb: 1,
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontSize: '1.0rem',
                    })}>
                        Bertempat di
                    </Typography>

                    <Typography sx={(theme) => ({
                        ...theme.typography.altSerifFont,
                        color: '#2d4a6d',
                        letterSpacing: '0.5px',
                        lineHeight: 1.0,
                        mb: 3,
                        fontSize: '1.0rem',
                    })}>
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
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <PhoneContact />
                </Box>
            </Box >
        </>
    );
}

export default WeddingInvitation;