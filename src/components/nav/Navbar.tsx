import React from "react";
import { AppBar, Icon, IconButton, Toolbar, Typography, Stack, Button, Grid2, Box, Link } from "@mui/material";


import logoInstitute from '../../icons/Romania_ISER_ARFCN_transparent_background.png'
import logoInstitutCrop from '../../icons/Romania_ISER_ARFCN_crop.png'
import logoBioMon from '../../icons/SubBioMon high.jpg'
import logoBioDiversa from '../../icons/biodiversa-logo.png.jpg'

import styled from "@emotion/styled";
import {
    Link as RouterLink,
} from 'react-router';

export default function Navbar() {
    const NavButton = styled(Button)(() => ({
        color: "white"
    }));

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
                        backgroundColor: "#548235",
                    }}>



                        <Grid2 container size={12} >

                            <Grid2
                                size={{ xs: 3, sm: 2 }}
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
                                size={{ xs: 5, sm: 8.5}}
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
                                        color: "#dea712",
                                        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem" },
                                        letterSpacing: { xs: "0.1rem", sm: "0.1rem", md: "0.1rem" },
                                    }}
                                >
                                    SUB-BIOMON-RO
                                </Typography>
                                
                            </Grid2>

                            <Grid2
                                size={{ xs: 3, sm: 1.5 }}
                                
                                sx={{
                                    // display: "flex",
                                    // justifyContent: "end",
                                    // alignItems: "center",
                                    
                                }}
                            >
                                <Box
                                    component={"img"}
                                    src={logoBioMon}
                                    alt="BioMon logo"
                                    sx={{
                                     maxHeight: "45px",  
                                     float: "right"
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
                        backgroundColor: "#dea712"
                    }}>
                      <Toolbar
  variant="dense"
  sx={{
    minHeight: { sm: '25px' },
    maxHeight: { sm: '25px' },
    backgroundColor: "#dea712",
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
      )
    )}
  </Stack>
</Toolbar>
                    </Grid2>
                </Grid2>
            </AppBar>
        </div>
    );
};