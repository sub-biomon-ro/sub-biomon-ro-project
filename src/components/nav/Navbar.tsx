import React from "react";
import { AppBar, Icon, IconButton, Toolbar, Typography, Stack, Button, Grid2, Box, Link } from "@mui/material";


import logoInstitute from '../../icons/Romania_ISER_ARFCN_transparent_background.png'
import styled from "@emotion/styled";
import {
    Link as RouterLink,
  } from 'react-router';

export default function Navbar() {
    const NavButton = styled(Button)(() => ({
        color: "white"
    }));

    const pages = [["/home", "Home"], ["/team", "Team"], ["/publications","Publications"], ["/news-and-activities","News & Activities"],
     ["/citizen-science","Citizen Science"], ["gallery","Gallery"]]

    return (
        <div className="Navbar">
            <AppBar position="static" sx={{
            }}>
                <Grid2 container direction="row">
                    <Grid2 size={12} sx={{
                        backgroundColor: "#18176e",
                    }}>
                        <Toolbar variant='dense' sx={{
                            minHeight: 36,
                            maxHeight: 36,
                            marginLeft: "20%"

                        }}>
                            <Typography variant="h6" noWrap>
                                Sub-BioMon-RO
                            </Typography>
                        </Toolbar>
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
                                {pages.map((page, index)=> (
                                   
                                        
                                <Button size='small' component={RouterLink} to={page[0]} sx={{
                                    color: "white"
                                }}>{<Typography variant='caption' noWrap sx={{
                                    paddingTop: "0.5rem"
                                }}>{page[1]}</Typography>}</Button>
                                       
                                    
                                ))}
                            </Box>
                        </Toolbar>
                    </Grid2>
                </Grid2>
            </AppBar>
        </div>
    );
};