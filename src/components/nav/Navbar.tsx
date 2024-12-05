import React from "react";
import { AppBar, Icon, IconButton, Toolbar, Typography, Stack, Button, Grid2, Box, Link } from "@mui/material";


import logoInstitute from '../../icons/Romania_ISER_ARFCN_transparent_background.png'
import logoInstitutCrop from '../../icons/Romania_ISER_ARFCN_crop.png'
import logoBioMon from '../../icons/SubBioMon high.jpg'

import styled from "@emotion/styled";
import {
    Link as RouterLink,
} from 'react-router';

export default function Navbar() {
    const NavButton = styled(Button)(() => ({
        color: "white"
    }));

    const pages = [["/sub-biomon-ro-project/home", "Home"], ["/sub-biomon-ro-project/team", "Team"], ["/sub-biomon-ro-project/publications", "Publications"], ["/sub-biomon-ro-project/news-and-activities", "News & Activities"],
    ["https://docs.google.com/forms/d/e/1FAIpQLScav_rZVm3sBFHHfp2t2nu-iHuYQpqZyWb3IggOSces8iU1kA/viewform?usp=sharing", "Citizen Science"],
    ["/sub-biomon-ro-project/gallery", "Gallery"]]

    return (
        <div className="Navbar">
            <AppBar position="static" sx={{
            }}>
                <Grid2 container direction="row">
                    <Grid2 size={12} sx={{
                        backgroundColor: "#18176e",
                    }}>

                        <Grid2 container size={12} alignItems={"center"}>
                        <Toolbar variant="dense" sx={{ minHeight: 70, width: "100%"}}>
        <Grid2 container size={12} alignItems="center" justifyContent="space-between">
  
        <Grid2
            size={{xs: 3, sm: 2}}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img
                src={logoInstitutCrop}
                alt="Left Logo"
                style={{
                    width: "100%", // Adjust width to fit container
                    maxWidth: "120px", // Limit max size for smaller screens
                    height: "auto",
                    objectFit: "contain",
                    boxShadow: "5px 5px 5px gray",
                }}
            />
        </Grid2>

        <Grid2
            size={{xs: 5, sm: 6 }}
            sx={{
                textAlign: "left",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
            }}
        >
            <Typography
                variant="h6"
                noWrap
                sx={{
                    color: "white",
                    fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                }}
            >
                Sub-BioMon-RO
            </Typography>
        </Grid2>

        <Grid2
            size={{xs: 3, sm: 2}}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img
                src={logoBioMon}
                alt="Right Logo"
                style={{
                    width: "100%", // Adjust width to fit container
                    maxWidth: "120px", // Limit max size for smaller screens
                    height: "auto",
                    objectFit: "contain",
                    boxShadow: "5px 5px 5px gray",
                }}
            />
        </Grid2>
    </Grid2>
</Toolbar>



                        </Grid2>

                    </Grid2>
                    <Grid2 size={12} sx={{
                        backgroundColor: "#dea712"
                    }}>
                        <Toolbar variant='dense' sx={{
                            minHeight: 25,
                            maxHeight: 25,
                            // marginLeft: "20%"
                        }}>
                            <Box display={"flex"} flexGrow={1}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",

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