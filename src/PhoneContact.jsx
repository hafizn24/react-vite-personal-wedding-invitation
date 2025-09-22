import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { Phone, WhatsApp } from "@mui/icons-material";

function PhoneContact() {
    const handleCall = (phoneNumber) => {
        window.open(`tel:${phoneNumber}`);
    };

    const handleWhatsApp = (phoneNumber) => {
        window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`);
    };

    return (
        <Card
            sx={{
                minWidth: 300,
                margin: '20px auto',
                borderRadius: 3,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                backgroundColor: 'rgba(247, 247, 247, 0.8)',
            }}
        >
            <CardContent sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    Hubungi
                </Typography>

                <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            Mansor bin Din
                        </Typography>
                        <IconButton
                            color="primary"
                            onClick={() => handleCall('+60123456789')}
                            size="small"
                        >
                            <Phone />
                        </IconButton>
                        <IconButton
                            color="success"
                            onClick={() => handleWhatsApp('+60123456789')}
                            size="small"
                        >
                            <WhatsApp />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            Sofiah binti Ahmad
                        </Typography>
                        <IconButton
                            color="primary"
                            onClick={() => handleCall('+60123456789')}
                            size="small"
                        >
                            <Phone />
                        </IconButton>
                        <IconButton
                            color="success"
                            onClick={() => handleWhatsApp('+60123456789')}
                            size="small"
                        >
                            <WhatsApp />
                        </IconButton>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default PhoneContact