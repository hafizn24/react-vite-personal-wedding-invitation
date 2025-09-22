import React from 'react'
import { useRef } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { FaGoogle } from "react-icons/fa";
import { FaWaze } from "react-icons/fa6";

function WeddingInvitation() {

    const lowerRef = useRef(null);

    const scrollToLower = () => {
        lowerRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    };
    return (
        <>
            {/* Upper Section */}
            <Box
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
                }}
            >
                <Box>

                    <Typography variant="h4">
                        WALIMATUL URUS
                    </Typography>

                    <Box sx={{ m: 3 }}>
                        <Typography variant="h4">Natasya</Typography>
                        <Typography variant="h5">dan</Typography>
                        <Typography variant="h4">Iskandar</Typography>
                    </Box>

                    <Typography
                        variant="body1"
                        sx={(theme) => ({
                            ...theme.typography.secondaryFont,
                            mb: 2,
                        })}
                    >
                        06 Disember 2025
                    </Typography>


                    <Box sx={{ m: 3 }}>
                        <Typography sx={(theme) => theme.typography.secondaryFont}>
                            Dewan Desa Keda Singkir
                        </Typography>
                        <Typography sx={(theme) => theme.typography.secondaryFont}>
                            06900 Yan, Kedah
                        </Typography>
                    </Box>

                    <IconButton onClick={scrollToLower}>
                        <ArrowDownwardIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Box>

            {/* Lower Section */}
            <Box
                ref={lowerRef}
                sx={{
                    minHeight: "100vh",
                    backgroundImage: "url('background_2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 2,
                }}
            >
                <Typography variant="h5" sx={{ m: 1 }}>
                    Mansor bin Din & Sofiah binti Ahmad
                </Typography>
                <Typography
                    variant="body1"
                    sx={(theme) => ({
                        ...theme.typography.secondaryFont,
                        m: 3,
                    })}
                >
                    Dengan penuh kesyukuran ke hadrat ilahi, Kami menjemput ke majlis
                    perkahwinan puteri kami yang dikasihi
                </Typography>


                <Typography variant="h5">Nurul Natasya Binti Mansor</Typography>
                <Typography variant="h7">Dengan Pasangannya</Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Muhammad Iskandar Bin Hassan
                </Typography>

                <Typography
                    variant="body1"
                    sx={(theme) => ({
                        ...theme.typography.secondaryFont,
                        m: 2,
                    })}
                >
                    Sabtu, 6 Disember 2025 <br />
                    12:00 Tengah hari - 5:00 Petang
                </Typography>

                <Typography variant="h6">Bertempat di</Typography>
                <Typography
                    variant="body1"
                    sx={(theme) => ({
                        ...theme.typography.secondaryFont,
                        mb: 3,
                    })}
                >
                    Dewan Desa Keda Singkir, <br />
                    06900 Yan, Kedah
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                        variant="outlined"
                        startIcon={<FaGoogle />}
                        onClick={() =>
                            window.open("https://maps.app.goo.gl/6RPhepYDJqBr3jVs8", "_blank")
                        }
                        sx={(theme) => theme.typography.sansSerifFont}
                    >
                        Google Maps
                    </Button>

                    <Button
                        variant="outlined"
                        startIcon={<FaWaze />}
                        onClick={() =>
                            window.open("https://waze.com/ul/hw1p2s3y0k", "_blank")
                        }
                        sx={(theme) => theme.typography.sansSerifFont}
                    >
                        Waze
                    </Button>
                </Box>
            </Box>
        </>

    )
}

export default WeddingInvitation