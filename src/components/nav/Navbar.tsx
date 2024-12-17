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
                        height: "60px",
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
                                        maxHeight: "65px", 

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
                                        color: "#dea712",
                                        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                                        letterSpacing: { xs: "0.1rem", sm: "0.1rem", md: "0.1rem" },
                                    }}
                                >
                                    SUB-BIOMON-RO
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    
                                    //noWrap
                                    sx={{
                                        color: "white",
                                        fontSize: { xs: "0.75rem", sm: "1rem" },
                                        marginTop: '-5px'
                                    }}
                                >
                                    Developing and testing approaches to monitor subterranean biodiversity in karst
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
                                     maxHeight: "60px",  
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
                        <Toolbar variant='dense' sx={{
                            minHeight: 25,
                            maxHeight: 25,
                            // marginLeft: "20%"
                        }}>
                            <Box display={"flex"} flexGrow={1}
                                sx={{
                                    marginLeft: { xs: 5, sm: 11, md: 26 },
                                    marginRight: { xs: 5, sm: 15, md: 30 },

                                }}>
                                {pages.map((page, index) => (

                                    page[0].startsWith("http") ? (
                                        <Button
                                            key={index}
                                            size="small"
                                            href={page[0]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ color: "white" }}
                                        >
                                            <Typography variant="caption" noWrap sx={{ paddingTop: "0.5rem" }}>
                                                {page[1]}
                                            </Typography>
                                        </Button>
                                    ) : (
                                        <Button
                                            key={index}
                                            size="small"
                                            component={RouterLink}
                                            to={page[0]}
                                            sx={{ color: "white" }}
                                        >
                                            <Typography variant="caption" noWrap sx={{ paddingTop: "0.5rem" }}>
                                                {page[1]}
                                            </Typography>
                                        </Button>
                                    )
                                ))}
                            </Box>
                        </Toolbar>
                    </Grid2>
                </Grid2>
            </AppBar>
        </div>
    );
};