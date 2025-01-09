import React from "react";
import { Box, Grid2, Typography, IconButton, Button } from "@mui/material";
import { styled } from "@mui/system";

import logoInstitutCrop from '../icons/Romania_ISER_ARFCN_crop.png';
import uefscdiLogo from '../icons/uefiscdi-logo.png'
import uefscdiLogoTransparent from '../icons/uefiscdi-logo-transparent.png'
import euflag from '../icons/euflag.png'

const Footer = () => {

    const facebook = (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
        </svg>
    );

    const instagram = (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
            <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
        </svg>
    );

    const x = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg>
    );

    const email = "sanda.iepure@acad-cj.ro"; // Replace with your email

    // Style for the footer
    const FooterBox = styled(Box)(({ theme }) => ({
        backgroundColor: "#bfbfbf",
        padding: theme.spacing(2),
        //color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",  // Align items in a row, space between
        flexDirection: "row",  // Make the container a row
        flexWrap: "wrap",  // Allow wrapping on smaller screens
    }));

    return (
        <FooterBox>

            <Grid2 sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} size={{ xs: 12, md: 3 }}>
                <Box sx={{ marginRight: 2 }}>
                    <img
                        src={uefscdiLogoTransparent}
                        alt="logo"
                        style={{
                            height: "40px",
                            maxWidth: "100%",
                        }}
                    />
                </Box>
            </Grid2>


            <Grid2 size={{ xs: 12, md: 3 }} marginRight={"auto"} paddingLeft={{ xs: '0px', sm: '50px' }}>
                <Grid2 size={12}>
                    <Typography fontSize={"0.7rem"} fontWeight="bold">
                        Contact:
                    </Typography>
                </Grid2>
                <Grid2 size={12}>
                    <Typography fontSize={"0.7rem"}>
                        Academia Romana Filiala Cluj Napoca
                    </Typography>
                </Grid2>
                <Grid2 size={12}></Grid2>
                <Typography fontSize={"0.7rem"}>
                    Str. Republicii 9, Cluj-Napoca 400347
                </Typography>
                <Grid2 size={12}>
                    <Typography fontSize={"0.7rem"}>
                        <a href="mailto:sanda.iepure@acad-cj.ro ">
                            sanda.iepure@acad-cj.ro
                        </a>
                    </Typography>
                </Grid2>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 3 }} marginRight={"30px"}>
                <Grid2 size={12}>
                <IconButton
                    href="https://www.facebook.com/profile.php?id=61560433427114"
                    target="_blank"
                    
                >
                    {facebook}
                </IconButton>

                <IconButton
                    href="https://x.com/Sub_BioMon"
                    target="_blank"
                    
                >
                    {x}
                </IconButton>

                </Grid2>
                <Grid2 size={12} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Typography fontSize={"0.7rem"}>
                        Contact us
                    </Typography>
                </Grid2>
            </Grid2>

            <Grid2>
                <Box>
                    <img
                        src={euflag}
                        alt="eu-flag"
                        height={"50px"}
                    >
                    </img>
                </Box>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 1 }}>
                <Typography fontSize={"0.7rem"}>
                    Co-funded by<br></br>
                    the European Union

                </Typography>
            </Grid2>
        </FooterBox>
    );
};

export default Footer;
