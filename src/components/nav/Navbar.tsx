import React from "react";
import { AppBar, Icon, IconButton, Toolbar, Typography, Stack, Button, Grid2, Box, Link } from "@mui/material";


import logoInstitute from '../../icons/Romania_ISER_ARFCN_transparent_background.png'
import logoInstitutCrop from '../../icons/Romania_ISER_ARFCN_crop.png'
import logoBioMon from '../../icons/SubBioMon high.jpg'
import logoBioDiversa from '../../icons/biodiversa-logo.png.jpg'
import acad from '../../icons/ACAD_260 logo.png'

import styled from "@emotion/styled";
import {
  Link as RouterLink,
} from 'react-router';

export default function Navbar() {
  const NavButton = styled(Button)(() => ({
    color: "white"
  }));

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
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );

  const pages = [["/sub-biomon-ro-project/home", "Home"], ["/sub-biomon-ro-project/team", "Team"], ["/sub-biomon-ro-project/publications", "Publications"], ["/sub-biomon-ro-project/news", "News"],
  ["https://docs.google.com/forms/d/e/1FAIpQLScav_rZVm3sBFHHfp2t2nu-iHuYQpqZyWb3IggOSces8iU1kA/viewform?usp=sharing", "Citizen Science"],
  ["/sub-biomon-ro-project/gallery", "Gallery"]]

  return (
    <div className="Navbar">
      <AppBar position="static" sx={{
        display: 'flex'
      }}>
        <Grid2 container direction="row">
          <Grid2 container size={12} sx={{
            // maxHeight: "50px",
            height: "45px",
            //marginBottom: "auto",
            backgroundColor: "#0f3b60",
          }}>



            <Grid2 container size={12} >

              <Grid2
                size={{ xs: 5, sm: 2 }}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <img
                  src={logoBioDiversa}
                  alt="Left Logo"
                  style={{
                    //width: "100%",
                    maxHeight: "55px",

                    //height: "100px",
                    //objectFit: "contain",
                    // boxShadow: "5px 5px 5px gray",
                  }}
                />
              </Grid2>

              <Grid2
                size={{ xs: 5, sm: 8.5 }}
                sx={{
                  // display: "flex",
                  // flexDirection: "column",
                  // justifyContent: "center", 
                  // alignItems: "flex-start", 
                  // textAlign: "left",
                  //paddingLeft: { xs: 1, sm: 2 }, 
                }}
              >
                <Typography
                  variant="h6"
                  //noWrap
                  sx={{
                    marginTop: "10px",

                    fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
                    letterSpacing: { xs: "0.1rem", sm: "0.1rem", md: "0.1rem" },
                  }}
                >
                  SUB-BIOMON-RO
                </Typography>

              </Grid2>

              <Grid2
                size={{ xs: 2, sm: 1.5 }}

                sx={{
                  // display: "flex",
                  // justifyContent: "end",
                  // alignItems: "center",

                }}
              >
                <Box
                  component={"img"}
                  src={acad}
                  alt="BioMon logo"
                  sx={{
                    maxHeight: "45px",
                    float: "right",
                    marginRight: { sm: 0, md: "10%" }
                  }}
                ></Box>
                {/* <img
                                    src={logoBioMon}
                                    alt="Right Logo"
                                    style={{
                                        // width: "100%",
                                        maxHeight: "60px",
                                    
                                        //objectFit: "contain",
                                        // boxShadow: "5px 5px 5px gray",
                                    }}
                                /> */}
              </Grid2>
            </Grid2>






          </Grid2>

          <Grid2 size={12} sx={{
            marginTop: 'auto',
            backgroundColor: "#98c01e"
          }}>
            <Toolbar
              variant="dense"
              sx={{
                minHeight: { sm: '25px' },
                maxHeight: { sm: '25px' },
                backgroundColor: "#98c01e",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 4 }}
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingX: { sm: 2 },
                }}
              >
                {pages.map((page, index) =>
                  page[0].startsWith("http") ? (
                    <Button
                      key={index}
                      size="small"
                      href={page[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "white",
                        textAlign: "center",
                        padding: "0.5rem 1rem",
                        flexGrow: 1,
                        width: { xs: "100%", sm: "auto" },
                        maxWidth: "150px",
                      }}
                    >
                      <Typography variant="caption" noWrap>
                        {page[1]}
                      </Typography>
                    </Button>
                  ) : (
                    <Button
                      key={index}
                      size="small"
                      component={RouterLink}
                      to={page[0]}
                      sx={{
                        color: "white",
                        textAlign: "center",
                        // padding: "0.5rem 1rem",
                        // flexGrow: 1, 
                        // width: { xs: "100%", sm: "auto" },
                        // maxWidth: "150px", 
                      }}
                    >
                      <Typography variant="caption" noWrap>
                        {page[1]}
                      </Typography>
                    </Button>
                  )
                )}
                <Box
                
                >
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
                </Box>
              </Stack>
            </Toolbar>
          </Grid2>
        </Grid2>
      </AppBar>
    </div>
  );
};