import { Box, Card, CardContent, CardMedia, Container, Divider, Grid, Grid2, Link, Paper, styled, Typography } from "@mui/material";
import React from "react";
import sampleImage from "../images/homeImg.jpg"
import news from "../News&Activities/news-and-activities-data.json"
import map from "../images/homeMap.avif"
import { news1Imgs, news2Imgs, news1Title, news2Title } from "./News";
import { newsData } from "./News";

import ljubljanaLogo from "../icons/UL_BF-logoENG-VER-CMYK_color_edited.avif";
import bruxellesLogo from "../icons/ulb-logo.avif";
import italyLogo from "../icons/udla-logo.avif";
import hunLogo from "../icons/elte-logo.svg";
import logoInstitute from '../icons/file.png';
import logoInstitutCrop from '../icons/Romania_ISER_ARFCN_transparent_background.png';
import luxLogo from '../icons/nmn-logo.svg'
import logoBioMon from '../icons/SubBioMon high.jpg'
import uefscdiLogo from '../icons/uefiscdi-logo.png'
import apuseniLogo from '../icons/pna-logo.jpg'
import salvaLogo from '../icons/salvaspeo-logo.png'

export default function Home() {

    // var newsData = [
    //     {
    //         title: news1Title,
    //         img: news1Imgs[0],
    //     },
    //     {
    //         title: news2Title,
    //         img: news2Imgs[0]
    //     }
    // ];


    const partnersData = [
        {
            name: "University of Ljubljana",
            country: "SLOVENIA (Coordinator)",
            logo: ljubljanaLogo
        },
        {
            name: "Université libre de Bruxelles",
            country: "BELGIUM",
            logo: bruxellesLogo
        },
        {
            name: "Università degli Studi dell'Aquila",
            country: "ITALY",
            logo: italyLogo
        },
        {
            name: "Eötvös Loránd University",
            country: "HUNGARY",
            logo: hunLogo
        },
        {
            name: "Emil Racovita Institute of Speleology",
            country: "ROMANIA",
            logo: logoInstitutCrop
        },
        {
            name: "National Museum of Natural History",
            country: "LUXEMBURG",
            logo: luxLogo
        }
    ];

    const moreLogos = [apuseniLogo, salvaLogo]

    return (
        <div className="Home">
            <Box sx={{
                marginTop: 0,
                marginLeft: { xs: 5, sm: 15, md: 30 },
                marginRight: { xs: 5, sm: 15, md: 30 },
                marginBottom: { xs: 5, sm: 15, md: 20 },
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
                    <Grid2 container spacing={0} size={12}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: { xs: "column", md: "row" },
                            }}
                        >
                            <Grid2 size={{ xs: 12, sm: 3, md: 3 }}>
                                {/* Logo */}
                                <Box
                                    sx={{
                                        //display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",

                                        marginBottom: { xs: 1, md: 0 },

                                    }}
                                >
                                    {/* <img
                                        src={logoBioMon}
                                        alt="logo"
                                        style={{
                                            height: "80px",
                                            maxWidth: "100%",
                                        }}
                                    /> */}
                                </Box>
                            </Grid2>

                            {/* Title and Date */}
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: { xs: "center", md: "center" },
                                    textAlign: { xs: "center", md: "center" },
                                }}
                            >

                            </Box>
                        </Box>
                    </Grid2>



                    {/* Img grid */}
                    <Grid2 size={{ xs: 12, sm: 8 }}>
                        <Paper elevation={5} >
                            <Box
                                sx={{
                                    width: "100%",
                                    minHeight: 300,
                                    overflow: "hidden",
                                    marginBottom: '-1rem'
                                    //marginBottom: '1rem'
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
                                <Typography variant="h5" paddingBottom={1} fontWeight={"bold"}>Context</Typography>
                                <Typography variant="body2" fontSize={"0.7rem"} sx={{ color: "GrayText" }}>
                                    The subterranean species of karst regions in Europe represent a unique and indispensable part of European biodiversity. Numerous specialized species are rare and highly endemic, bound to narrow geographical areas. At the same time, subterranean habitats are among the most challenging for biodiversity monitoring, due to difficult accessibility and the complexity of its exploration, which requires expertise and specialized equipment. Caves are rare points where humans can enter the subterranean domain and are often considered to be the main habitat for the subterranean species. They are protected as a special habitat type (8310 “Caves not open to the public”) in the EU Habitats Directive, which demands their monitoring at national and international level.
                                </Typography>
                                <br></br>
                                <Typography variant="body2" fontSize={"0.7rem"} sx={{ color: "GrayText" }}>
                                    However, up to now, there is no standardized sampling method for monitoring subterranean species and habitats. The <b>Sub-BioMon</b> will reconsider the role of caves as either habitats or simply windows into an extensive subterranean habitat in a fractured rock, consisting of cavities and crevices inaccessible to humans. The project will provide a scientific basis for monitoring, which is relevant to a variety of stakeholders, such as governmental and conservation institutions, management authorities of natural parks and show caves, as well as the general public, all of which will be involved in the project.
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid2>

                    {/* News Section */}

                    <Grid2 size={{ xs: 12, sm: 4 }}>
                        <Paper elevation={5}>
                            <Box sx={{ backgroundColor: "#548235" }}>
                                <Typography variant="h6" fontSize={'0.9rem'} gutterBottom color="#dea712" paddingLeft={1}>
                                    Latest News
                                </Typography>
                            </Box>
                            <Box padding={1}>

                                <Box
                                    sx={{
                                        //minHeight: 250,
                                        maxHeight: 300, // Adjust height as needed
                                        overflowY: "auto",
                                        paddingRight: "0.5rem",
                                    }}
                                >
                                    {newsData.map((item: any, index: any) => (
                                        <>
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
                                                    image={item.images[0]}
                                                    alt={item.title}
                                                    sx={{
                                                        //width: 100,
                                                        maxWidth: 70,
                                                        height: 100,
                                                        //objectFit: "cover",
                                                    }}
                                                />
                                                <CardContent>
                                                    <Typography variant="body2" fontSize={"0.7rem"}>
                                                        <Link
                                                            href='/sub-biomon-ro-project/news-and-activities'
                                                            color="inherit"
                                                            underline="hover"
                                                            target="_blank"
                                                            rel="noopener"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </Typography>
                                                    <Typography variant="body2" fontSize={"0.5rem"}>
                                                        {item.date}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                            {index < (newsData.length - 1) ? (<hr style={{
                                                border: 'none',
                                                minHeight: '2px',
                                                backgroundColor: '#333'
                                            }} />) : null}
                                        </>
                                    ))}
                                </Box>
                            </Box>
                        </Paper>
                        <Grid2>
                            <Grid2 sx={{
                                //marginLeft: "20%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                                size={{ xs: 12, md: 12 }}>



                            </Grid2>
                            <Grid2 size={{ xs: 6, md: 12 }} padding={0.5} sx={{ backgroundColor: "lightgray" }}>
                                <Typography
                                    marginTop={"5%"}
                                    variant="body1"
                                    fontWeight={"bold"}
                                    sx={{
                                        wordWrap: "break-word",
                                        fontSize: "0.7rem"
                                    }}

                                >
                                    Biodiversa+ call: <a target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.biodiversa.eu/2024/04/15/sub-
biomon/"
                                        style={{ //color: "inherit", 
                                            fontSize: "0.65rem",
                                            fontWeight: "normal"
                                        }}
                                    >2022 – 2023 BiodivMon</a>
                                </Typography>

                                <Typography
                                    marginTop={"5%"}
                                    variant="body1"
                                    fontWeight={"bold"}
                                    sx={{
                                        wordWrap: "break-word",
                                        fontSize: "0.65rem"
                                    }}

                                >
                                    SubBioMon official web page: <a target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.sub-biomon.net/about"
                                        style={{
                                            //color: "inherit"
                                            fontWeight: "normal"
                                        }}
                                    >https://www.sub-biomon.net/about</a>
                                </Typography>

                                <Typography marginTop={"5%"}
                                    variant="body1"
                                    fontWeight={'bold'}
                                    sx={{
                                        wordWrap: "break-word",
                                        fontSize: "0.7rem"
                                    }}>
                                    Duration: <span style={{
                                        fontWeight: "normal",
                                        fontSize: "0.7rem"
                                    }}>01/04/2024 – 31/03/2027</span>
                                </Typography>

                                <Typography marginTop={"5%"}
                                    variant="body1"
                                    fontWeight={'bold'}
                                    sx={{
                                        wordWrap: "break-word",
                                        fontSize: "0.7rem"
                                    }}>
                                    Romanian Lead beneficiary:
                                </Typography>
                                <Box
                                    sx={{
                                        //display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",

                                        marginBottom: { xs: 1, md: 0 },

                                    }}
                                >
                                    <img
                                        src={logoInstitute}

                                        alt="logo"
                                        style={{
                                            //marginTop: "20%",
                                            height: "100px",
                                            maxWidth: "100%",
                                        }}
                                    />
                                </Box>


                                <Typography marginTop={"5%"}
                                    variant="body1"
                                    fontWeight={'bold'}
                                    sx={{
                                        wordWrap: "break-word",
                                        fontSize: "0.7rem"
                                    }}>Coordonator Romanian partner:</Typography>
                                <Typography marginTop={"5%"}
                                    variant="body1"

                                    sx={{
                                        wordWrap: "break-word",
                                        fontSize: "0.7rem"
                                    }}>Dr. Sanda IEPURE</Typography>
                                <Typography marginTop={"5%"}
                                    variant="body1"
                                    fontWeight={'bold'}
                                    sx={{
                                        wordWrap: "break-word",
                                        fontSize: "0.7rem"
                                    }}><a href="mailto:sanda.iepure@acad-cj.ro">sanda.iepure@acad-cj.ro</a></Typography>


                            </Grid2>
                            {/* Logo */}

                        </Grid2>
                    </Grid2>

                    {/* Map section */}
                    <Grid2
                        container
                        sx={{
                            position: 'static',
                            bottom: 0,
                            width: '100%',
                            minHeight: '100px',
                            // alignItems: 'center',
                            // justifyContent: 'center',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 1,
                        }}
                    >
                        <Grid2 container sx={{ marginTop: 0 }}>

                            <Grid2 size={12}>
                                <Typography marginTop={-2}
                                    variant="body1"
                                    fontWeight={'bold'}

                                    sx={{
                                        wordWrap: "break-word",
                                        fontSize: "0.7rem"
                                    }}>
                                    Romanian funding agency
                                </Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 8 }} sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Typography textAlign={"justify"} fontSize={"0.8rem"}>
                                    The Executive Unit for the Financing of Higher Education, Research, Development and Innovation
                                </Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 4 }}>
                                <Box
                                    component={"img"}
                                    src={uefscdiLogo}
                                    alt="uefscdi-logo"
                                    sx={{
                                        display: "block",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        minHeight: "100px",
                                        maxHeight: "100px",
                                        objectFit: "contain"
                                    }}
                                >
                                </Box>
                            </Grid2>
                        </Grid2>

                        <Grid2 size={12}>
                            <Typography marginTop={"5%"}
                                variant="body1"
                                fontWeight={'bold'}
                                sx={{
                                    wordWrap: "break-word",
                                    fontSize: "0.7rem"
                                }}>Principal coordinator: </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 8 }} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Typography textAlign={"justify"} fontSize={"0.8rem"}>

                                University of Ljubljana, Subterranean Biology Lab (SubBioLab)

                                Department of Biology, Biotechnical Faculty SLOVENIA

                            </Typography>
                        </Grid2>
                            <Box
                                component="img"
                                src={partnersData[0].logo}
                                alt={partnersData[0].name}
                                sx={{
                                    width: 150,
                                    height: 150,
                                    marginRight: 2,
                                    objectFit: "contain"
                                }}
                            ></Box>
                            <Grid2 size={12} marginTop={3}>
                                <Typography variant="h6" fontSize={"0.7rem"} fontWeight={"bold"} component="div">Consortium: </Typography>
                                <Typography textAlign={"justify"} fontSize={"0.8rem"}>The Sub-BioMon team consists of researchers from 6 institutions in  European countries. Find out more here: <a href="https://www.sub-biomon.net">https://www.sub-biomon.net</a> </Typography>
                            </Grid2>
                            <Grid2 container spacing={-7} marginTop={-1} justifyContent={"left"}>

                                {partnersData.map((partner, index) => (
                                    // index ? (<Grid2 size={{ xs: 12, sm: 1.5 }} key={index}>
                                    <Grid2 size={{ xs: 12, sm: 1 }} key={index}>
                                        {/* <Box display="flex" alignItems="center"> */}
                                        <Grid2>
                                            <CardMedia
                                                component="img"
                                                image={partner.logo}
                                                alt={partner.name}
                                                sx={{
                                                    width: 100,
                                                    height: 100,
                                                    marginRight: 2,
                                                    objectFit: "contain"
                                                }}
                                            />
                                        </Grid2>
                                        <Box>
                                            {/* <Typography variant="body1" fontWeight="bold" fontSize={"0.7rem"}>{partner.name}</Typography>
                                            <Typography variant="body2">{partner.country}</Typography> */}
                                        </Box>
                                        {/* </Box> */}
                                    </Grid2>
                                    // </Grid2>) : null
                                ))}
                            </Grid2>

                            {/* <Grid2 size={12} sx={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "top",
                                    width: "100%",
                                    minHeight: 300,

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
                        </Grid2> */}
                            <Grid2 size={12} marginTop={3} >
                            <hr style={{
                                                border: 'none',
                                                minHeight: '2px',
                                                backgroundColor: 'blue'
                                            }} />
                                <Typography variant="h5" fontSize={"0.9rem"} fontWeight={"bold"} color="GrayText" component="div"sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>Romanian collaborators of the project:
                        </Typography>
                            </Grid2>
                            <Grid2 container size={12} marginTop={-12}  sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"}}>
                                {/* <Grid2 size={{ xs: 12, sm: 6 }} alignContent={"center"}>
                                    
                                </Grid2> */}
                                <Grid2 size={{ xs: 12, sm: 6 }}>
                                <Box
                                        component={"img"}
                                        src={apuseniLogo}
                                        marginTop={15}

                                        sx={{

                                            maxHeight: "75px"
                                        }}
                                    ></Box>
                                    <Box
                                        component={"img"}
                                        src={salvaLogo}
                                        marginTop={15}
                                        //marginLeft={-25}
                                        sx={{

                                            maxHeight: "75px"
                                        }}
                                    ></Box>
                                </Grid2>
                            </Grid2>
                        </Grid2>

                    </Grid2>
            </Box>
        </div>
    )
};