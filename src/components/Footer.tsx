import React from "react";
import { Box, Grid2, Typography, IconButton, Button } from "@mui/material";
import { styled } from "@mui/system";

import logoInstitutCrop from '../icons/Romania_ISER_ARFCN_crop.png';
import uefscdiLogo from '../icons/uefiscdi-logo.png'

const Footer = () => {

    const facebook = (
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
            <rect fill="none" height="24" width="24" />
            <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
        </svg>
    );

    const email = "sanda.iepure@acad-cj.ro"; // Replace with your email

    // Style for the footer
    const FooterBox = styled(Box)(({ theme }) => ({
        backgroundColor: "#548235",
        padding: theme.spacing(2),
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",  // Align items in a row, space between
        flexDirection: "row",  // Make the container a row
        flexWrap: "wrap",  // Allow wrapping on smaller screens
    }));

    return (
        <FooterBox>
   
            <Grid2 sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} size={{ xs: 12, sm: 3 }}>
                <Box sx={{ marginRight: 2 }}>
                    <img
                        src={uefscdiLogo}
                        alt="logo"
                        style={{
                            height: "50px",
                            maxWidth: "100%",
                        }}
                    />
                </Box>
                <Typography variant="h5" marginTop={2} textAlign="left">
                    <a href="https://uefiscdi.gov.ro/index.php" style={{ color: "inherit", textDecoration: "none", fontSize: '0.8rem' }}>
                        National Funding Agency
                    </a>
                </Typography>
            </Grid2>

         
            <Grid2 sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} size={{ xs: 12, sm: 4 }}>
                <Typography variant="body1" sx={{ marginRight: 2 }}>
                    <a href="https://www.sub-biomon.net/" style={{ color: "inherit", textDecoration: "none" }}>
                        SubBioMon 2024
                    </a>
                </Typography>
                <Typography variant="body1">{email}</Typography>
            </Grid2>

            <Grid2 sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }} size={{ xs: 12, sm: 3 }}>
                <Button
                    onClick={() => window.location.href = `mailto:${email}`}
                    sx={{
                        color: "white",
                        fontSize: "1rem",
                        textTransform: "none",
                        marginRight: 2,
                    }}
                >
                    Contact
                </Button>

                <IconButton
                    href="https://www.facebook.com/yourfacebookpage"
                    target="_blank"
                    sx={{
                        color: "white",
                        fontSize: "2rem",
                    }}
                >
                    {facebook}
                </IconButton>
            </Grid2>
        </FooterBox>
    );
};

export default Footer;
