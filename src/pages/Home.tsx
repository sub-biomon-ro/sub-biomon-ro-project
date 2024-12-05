import { Box, Card, CardContent, CardMedia, Container, Grid, Grid2, Link, Paper, styled, Typography } from "@mui/material";
import React from "react";
import sampleImage from "../images/homeImg.jpg"
import news from "../News&Activities/news-and-activities-data.json"
import map from "../images/homeMap.avif"
import { news1Imgs, news2Imgs, news1Title, news2Title } from "./News";


export default function Home() {

    var newsData = [
        {
            title: news1Title,
            img: news1Imgs[0],
        },
        {
            title: news2Title,
            img: news2Imgs[0]
        }
    ];


    const partnersData = [
        "University of Ljubljana SLOVENIA - COORDINATOR",
        "Université libre de Bruxelles BELGIUM - PARTNER 1",
        "Università degli Studi dell'Aquila ITALY - PARTNER 2",
        "Eötvös Loránd University HUNGARY - PARTNER 3",
        "Emil Racovita Institute of Speleology ROMANIA - PARTNER 4",
        "National Museum of Natural History LUXEMBURG - PARTNER 5"
    ]

    return (
        <div className="Home">
            <Box sx={{
                marginTop: 5,
                marginLeft: {xs: 5, sm: 15, md: 30},
                marginRight: {xs: 5, sm: 15, md:30},
                marginBottom: {xs: 5, sm: 15, md:60},
                display: "flex",
                justifyContent: "center",
            }}>
                <Grid2 container spacing={{
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                }}
                sx={{
                    maxWidth: "1400px"
                }}
                >
                    {/* Header */}
                    <Grid2 size={12}>
                        <Typography textAlign={"center"} variant="h5">
                            A Biodiversa+ PROJECT co-funded by the European Commission
                        </Typography>
                        <Typography textAlign={"center"} variant="body2">April 2024 - March 2027</Typography>
                    </Grid2>

                    {/* Img grid */}
                    <Grid2 size={{ xs: 12, sm: 8 }}>
                        <Paper elevation={5} >
                            <Box
                                sx={{
                                    width: "100%",
                                    height: 300, 
                                    overflow: "hidden",
                                    marginBottom: '1rem'
                                }}
                            >
                                <img
                                    src={sampleImage}
                                    alt="Sample"
                                    style={{
                                        width: "100%", // Ensures the image fills the width of the Paper
                                        height: "100%", // Ensures the image fills the height of the cropping area
                                        objectFit: "cover", // Crops the image while maintaining its aspect ratio
                                        objectPosition: "center",
                                        borderRadius: "5px"
                                    }}
                                />
                            </Box>

                            <Box padding={1}>
                                <Typography variant="body2">
                                    The subterranean species of karst regions in Europe represent a unique and indispensable part of European biodiversity. Numerous specialized species are rare and highly endemic, bound to narrow geographical areas. At the same time, subterranean habitats are among the most challenging for biodiversity monitoring, due to difficult accessibility and the complexity of its exploration, which requires expertise and specialized equipment. Caves are rare points where humans can enter the subterranean domain and are often considered to be the main habitat for the subterranean species. They are protected as a special habitat type (8310 “Caves not open to the public”) in the EU Habitats Directive, which demands their monitoring at national and international level.
                                </Typography>
                                <br></br>
                                <Typography variant="body2">
                                    However, up to now, there is no standardized sampling method for monitoring subterranean species and habitats. The <b>Sub-BioMon</b> will reconsider the role of caves as either habitats or simply windows into an extensive subterranean habitat in a fractured rock, consisting of cavities and crevices inaccessible to humans. The project will provide a scientific basis for monitoring, which is relevant to a variety of stakeholders, such as governmental and conservation institutions, management authorities of natural parks and show caves, as well as the general public, all of which will be involved in the project.
                                </Typography>
                            </Box>

                        </Paper>
                    </Grid2>

                    {/* News Section */}

                    <Grid2 size={{ xs: 12, sm: 4 }}>
                        <Paper elevation={5}>
                            <Box padding={1}>
                                <Typography variant="h5" gutterBottom>
                                    News
                                </Typography>
                                <Box
                                    sx={{
                                        maxHeight: 300, // Adjust height as needed
                                        overflowY: "auto",
                                        paddingRight: "0.5rem",
                                    }}
                                >
                                    {newsData.map((item: any, index: any) => (
                                        <Card
                                            key={index}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                marginBottom: 2,
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={item.img}
                                                alt={item.title}
                                                sx={{
                                                    width: 100,
                                                    height: 100,
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <CardContent>
                                                <Typography variant="h6">
                                                    <Link
                                                        href={item.link}
                                                        color="inherit"
                                                        underline="hover"
                                                        target="_blank"
                                                        rel="noopener"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </Box>
                            </Box>
                        </Paper>
                    </Grid2>

                    {/* Map section */}
                    <Grid2
                        container
                        sx={{
                            position: 'static',
                            bottom: 0,
                            width: '100%',
                            height: '100px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 1,
                        }}
                    >
                        <Typography variant="h3" component={"div"}>Partners</Typography>
                        {/* Display partners */}
                        {partnersData.map((item, index) => (
                            <Grid2 container size={12} sx={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Typography key={index} variant="caption" sx={{ textAlign: 'center' }} fontSize='0.8rem'>
                                    {item}
                                </Typography>
                            </Grid2>

                        ))}
                        <Grid2 size={{ xs: 12, md: 6 }} sx={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "top",
                                    width: "100%",
                                    height: 300, 
                                }}
                            >
                                <img
                                    src={map}
                                    alt="partners-map"
                                    style={{
                                        maxWidth: "100%", // Ensures the image does not overflow
                                        maxHeight: "100%", // Maintain the aspect ratio
                                    }}
                                />
                            </Box>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </Box>
        </div>
    )
};