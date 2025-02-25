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
import fig1 from '../icons/fig1.png'
import species from '../icons/species.png'
import iser from '../icons/ISER logo.png'
import acad from '../icons/ACAD_260 logo.png'
import home1 from '../images/home1.jpeg'
import home2 from '../images/home2.jpeg'
import home3 from '../images/home3.jpeg'
import gallery4 from "../pozegallery/1000008595.jpg"
import homePage3 from "../images/homePage3.png"
import workpackage5 from "../images/workpackage5.png"
import workpackagediagram from "../images/workpackage-diagram.png"

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

    const moreLogos = [apuseniLogo, salvaLogo];

    const homePageImages = [home1, home2, gallery4];

    var news3 = newsData[2];
    newsData[2] = newsData[0];
    newsData[0] = news3;

    return (
        <div className="Home">
            {/* <Box>
                    <img
                        src={logoBioMon}
                        alt="Left Logo"
                        style={{
                                //width: "100%",
                                maxHeight: "100px",

                                //height: "100px",
                                //objectFit: "contain",
                                // boxShadow: "5px 5px 5px gray",
                            }}
                        />
            </Box> */}
            <Box sx={{
                marginTop: 0,
                marginLeft: { xs: 5, sm: 15, md: 30 },
                marginRight: { xs: 5, sm: 15, md: 5 },
                marginBottom: { xs: 5, sm: 15, md: 15 },
                display: "flex",
                justifyContent: "center",
            }}>
                <Grid2 container
                    spacing={{
                        xs: 0.5,
                        sm: 1,
                        md: 2,
                        lg: 3,
                    }}
                    columnSpacing={5}
                    sx={{
                        //maxWidth: "1400px"
                    }}
                >



                    {/* Img grid */}
                    <Grid2 container size={{ sm: 12, md: 8 }}>

                        {/* Header */}

                        <Grid2 container spacing={1} marginTop={2}>

                            <Grid2 size={{ xs: 3, sm: 2.75 }} sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                            }}>

                                <img
                                    src={logoBioMon}
                                    alt="home-page-pictures"
                                    style={{
                                        maxWidth: "100%",
                                        // marginTop: "10%",
                                        objectFit: "contain",
                                    }}
                                >
                                </img>
                            </Grid2>

                            <Grid2 size={{ xs: 9, sm: 9.25 }}>


                                <Typography
                                    variant="body2"

                                    //noWrap

                                    sx={{
                                        wordWrap: "unset",
                                        fontSize: { xs: "0.7rem", sm: "0.9rem" },
                                        // lineHeight: '17px',
                                        marginTop: '10px',
                                        marginBottom: { md: "2%" }
                                    }}
                                >
                                    <i>Developing and testing approaches to monitor subterranean biodiversity in karst</i>
                                </Typography>
                                <Typography
                                    variant="subtitle2"

                                    //noWrap
                                    sx={{

                                        fontSize: { xs: "0.7rem", sm: "0.8rem" },
                                        textAlign: "left"
                                    }}>
                                    ERANET nr. 26/2024, PN4-P8-235/01.04.2024
                                </Typography>
                            </Grid2>
                        </Grid2>

                        {/* <Paper elevation={5} > */}
                        <Box

                            sx={{
                                width: "100%",
                                //minHeight: 300,

                                //marginBottom: '1rem'
                            }}
                        >
                            {/* <img
                                    src={sampleImage}
                                    alt="Sample"
                                    style={{
                                        width: "100%", // Ensures the image fills the width of the Paper
                                        height: "100%", // Ensures the image fills the height of the cropping area
                                        objectFit: "cover", // Crops the image while maintaining its aspect ratio
                                        objectPosition: "center",
                                        borderRadius: "5px"
                                    }}
                                /> */}
                            <Grid2 size={12} sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                            }}>

                                <img
                                    src={homePage3}
                                    alt="home-page-pictures"
                                    style={{
                                        maxWidth: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                >
                                </img>
                            </Grid2>
                        </Box>

                        <Box>
                            <Typography variant="h5" paddingBottom={1} fontSize={"1rem"} fontWeight={"bold"}>Context</Typography>
                            <Typography variant="body2" fontSize={"0.7rem"} sx={{ color: "GrayText" }}>
                                The subterranean species of karst regions in Europe represent a unique and indispensable part of European biodiversity. Numerous specialized species are rare and highly endemic, bound to narrow geographical areas. At the same time, subterranean habitats are among the most challenging for biodiversity monitoring, due to difficult accessibility and the complexity of its exploration, which requires expertise and specialized equipment. Caves are rare points where humans can enter the subterranean domain and are often considered to be the main habitat for the subterranean species. They are protected as a special habitat type (8310 “Caves not open to the public”) in the EU Habitats Directive, which demands their monitoring at national and international level.
                            </Typography>
                            <br></br>
                            <Typography variant="body2" fontSize={"0.7rem"} sx={{ color: "GrayText" }}>
                                However, up to now, there is no standardized sampling method for monitoring subterranean species and habitats. The <b>Sub-BioMon</b> will reconsider the role of caves as either habitats or simply windows into an extensive subterranean habitat in a fractured rock, consisting of cavities and crevices inaccessible to humans. The project will provide a scientific basis for monitoring, which is relevant to a variety of stakeholders, such as governmental and conservation institutions, management authorities of natural parks and show caves, as well as the general public, all of which will be involved in the project.
                            </Typography>
                        </Box>
                        {/* Main objective */}
                        <Grid2 container spacing={1} size={12}>
                            <Typography variant="h5" paddingBottom={1} fontSize={"1rem"} fontWeight={"bold"}>Main objective</Typography>
                            <Typography variant="body2" fontSize={"0.7rem"} sx={{ color: "GrayText" }}>
                                The <b>Sub-BioMon project</b> will provide standardised methods and protocols for monitoring subterranean biodiversity in European karst areas, with a focus on developing and testing novel approaches.
                            </Typography>
                        </Grid2>
                        {/* work packages */}
                        <Grid2 container size={12}>
                            <Grid2>
                                <Typography variant="h5" fontSize={"1rem"} fontWeight={"bold"}>Work packages</Typography>
                            </Grid2>
                            <Grid2>
                                <Typography variant="body2" fontSize={"0.7rem"} sx={{ color: "GrayText" }}>
                                    The Sub-BioMon project is organized and described in five interrelated work packages (Fig. 2).
                                </Typography>
                            </Grid2>
                        </Grid2>


                        <Grid2 container spacing={{xs: 3, sm: 1}} size={12}>
                            {/* work package 1 */}
                            <Grid2 size={{xs: 2, lg: 1}}>
                                <Typography
                                    variant="h5"
                                    fontWeight={'bold'}
                                    fontSize={"1rem"}
                                    sx={{
                                        whiteSpace: "nowrap",
                                        //fontSize: "0.7rem"
                                    }}>
                                    WP1:
                                </Typography>
                            </Grid2>
                            <Grid2 size={{xs:10, lg: 11}}>
                            <Typography
                                variant="body1"
                                fontWeight={'bold'}
                                color="GrayText"
                                sx={{
                                    marginTop: "2px",
                                    wordWrap: "break-word",
                                    fontSize: "0.8rem"
                                }}>
                                Project management (Coordinator: Slovenia)
                            </Typography>
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={0} size={12}>
                            <Grid2 size={12}>
                                <Box
                                //marginRight={{ sm: 1, md: 25, xl: 60 }}
                                >
                                    <img
                                        src={workpackagediagram}
                                        alt="work-package-diagram"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            minHeight: "100px",
                                            maxHeight: "350px",
                                            objectFit: "contain",
                                            //objectPosition: "center",
                                            borderRadius: "5px",

                                        }}
                                    >
                                    </img>


                                </Box>
                            </Grid2>
                        </Grid2>


                        <Grid2 container spacing={{xs: 3, sm: 1}} size={12}>
                            {/* work package 2 */}
                            <Grid2 spacing={1} size={{xs: 2, lg: 1}}>
                                <Typography
                                variant="h5"
                                fontWeight={'bold'}
                                fontSize={"1rem"}
                                sx={{
                                    whiteSpace: "nowrap",
                                    //fontSize: "0.7rem"
                                }}>
                                WP2:

                            </Typography>
                            </Grid2>
                            <Grid2 size={{xs:10, lg: 11}}>
                                <Typography
                                    variant="body1"
                                    fontWeight={'bold'}
                                    color="GrayText"
                                    sx={{
                                        marginTop: "2px",
                                        wordWrap: "break-word",
                                        fontSize: "0.8rem"
                                    }}>
                                    Defining subterranean biogeographical regions within karst (Coordinator: Italy)
                                </Typography>
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={{xs: 3, sm: 1}} size={12}>
                            {/* work package 3 */}
                            <Grid2 size={{xs: 2, lg: 1}}>
                                <Typography
                                    variant="h5"
                                    fontWeight={'bold'}
                                    fontSize={"1rem"}
                                    sx={{
                                        whiteSpace: "nowrap",
                                        //fontSize: "0.7rem"
                                    }}>
                                    WP3:

                                </Typography>
                            </Grid2>
                            <Grid2 size={{xs: 10, lg: 11}}>
                                <Typography
                                    variant="body1"
                                    fontWeight={'bold'}
                                    color="GrayText"
                                    sx={{
                                        marginTop: "2px",
                                        wordWrap: "break-word",
                                        fontSize: "0.8rem",
                                        alignItems: "flex-start"
                                    }}>
                                    Assessing the readiness of DNA information for routine species identification and implementation in (e)DNA-based assessments of subterranean communities (Coordinator: Luxemburg)

                                </Typography>
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={{xs: 3, sm: 1}} size={12}>
                            {/* work package 4 */}
                            <Grid2 spacing={1} size={{xs: 2, lg: 1}}>
                                <Typography
                                    variant="h5"
                                    fontWeight={'bold'}
                                    fontSize={"1rem"}
                                    sx={{
                                        whiteSpace: "nowrap",
                                        //fontSize: "0.7rem"
                                    }}>
                                    WP4:

                                </Typography>
                            </Grid2>
                            <Grid2 size={{xs:10, lg: 11}}>
                                <Typography
                                    variant="body1"
                                    fontWeight={'bold'}
                                    color="GrayText"
                                    sx={{
                                        marginTop: "2px",
                                        wordWrap: "break-word",
                                        fontSize: "0.8rem",
                                        alignItems: "flex-start"
                                    }}>
                                    Developing and testing the methodology for minimal standards of field work sampling (Coordinator: Romania)

                                </Typography>
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={1} size={12}>

                        <Grid2 size={12}>
                                <Box sx={{
                                    //paddingRight: { sm: 1, md: 25, xl: 60 }
                                }}>
                                    <Typography textAlign={"justify"} variant="body2" color="GrayText" fontSize={"0.7rem"}>
                                        Because of geographic differences in karst complexity, biodiversity, and faunal composition, as well as different past experiences, developing a common methodology is a complex and challenging task. Within the official documents such as the Natura 2000 manual on EU habitats, the habitat <b>8310 Caves not open to the public</b> is described only very roughly, with some reference taxa mentioned, but there are no recommendations for a protocol and methods to monitor them. We will address this issue in a stepwise process. The Sub-BioMon project is defining and testing methods based on the novel paradigm for caves: distinction of caves as habitats or as windows into an extensive subterranean habitat, consisting of cavities and crevices inaccessible for humans (Fig. 1).
                                    </Typography>
                                </Box>
                            </Grid2>
                        </Grid2>
                        <Grid2 container spacing={0} size={12}>
                            <Grid2 size={12}>
                                <Box
                                //marginRight={{ sm: 1, md: 25, xl: 60 }}
                                >
                                    <img
                                        src={fig1}
                                        alt="fig 1."
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            minHeight: "100px",
                                            maxHeight: "200px",
                                            objectFit: "contain",
                                            //objectPosition: "center",
                                            borderRadius: "5px",

                                        }}
                                    >
                                    </img>

                                    {/* fig caption */}
                                </Box>
                            </Grid2>

                            <Grid2 size={12}>
                                <Box sx={{
                                    //paddingRight: { sm: 1, md: 25, xl: 60 }
                                }}>
                                    <Typography textAlign={"center"} fontSize={"0.5rem"} variant="subtitle1" sx={{
                                        hyphens: "none"
                                    }}>
                                        Figure 1. New paradigm of caves: caves are habitats for some animal species (like cave crickets or bats during hibernation), but should be considered also a window into more extensive unreachable subterranean habitats. Only some individuals can be accessed and found in a cave (or springs, where subterranean waters come to surface), while the main part of the population lives in the system of crevices around the cave accessible to man
                                    </Typography>

                                    <Typography justifyContent={"center"} fontSize={"0.5rem"} textAlign={"center"} variant="subtitle1" sx={{
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    }}>
                                        (credit: Maja Zagmajster, Sub-BioMon)
                                    </Typography>
                                </Box>
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={1} size={12}>
                            {/* work package 5 */}
                            <Grid2 spacing={{xs: 3, sm: 1}} size={{xs: 2, lg: 1}}>
                                <Typography
                                    variant="h5"
                                    fontWeight={'bold'}
                                    fontSize={"1rem"}
                                    sx={{
                                        whiteSpace: "nowrap",
                                        //fontSize: "0.7rem"
                                    }}
                                >
                                    WP5:
                                </Typography>
                            </Grid2>
                            <Grid2 size={{xs:10, lg: 11}}>
                                <Typography
                                    variant="body1"
                                    fontWeight={'bold'}
                                    color="GrayText"
                                    sx={{
                                        marginTop: "2px",
                                        wordWrap: "break-word",
                                        fontSize: "0.8rem",
                                        alignItems: "flex-start",
                                    }}>
                                    From science to practice: involving different stakeholders (Coordinator: Hungary)
                                </Typography>
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={0} size={12}>
                            <Grid2 size={12}>
                                <Box
                                //marginRight={{ sm: 1, md: 25, xl: 60 }}
                                >
                                    <img
                                        src={workpackage5}
                                        alt="fig 1."
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            minHeight: "150px",
                                            maxHeight: "350px",
                                            objectFit: "contain",
                                            //objectPosition: "center",
                                            borderRadius: "5px",

                                        }}
                                    >
                                    </img>
                                </Box>
                            </Grid2>
                        </Grid2>

                        {/* <Grid2 size={12}>
                        <Box sx={{
                            //paddingRight: { sm: 1, md: 25, xl: 60 }
                        }}>
                            <Typography variant="body2" fontSize={"0.7rem"} fontWeight={"bold"}>
                                Sub-BioMon is proposing to test a feasible protocol for monitoring subterranean fauna with focus on groundwater crustaceans, spiders, and beetles in selected karst caves and springs.
                            </Typography>
                        </Box>
                    </Grid2> */}
                        {/* </Paper> */}
                    </Grid2>

                    {/* News Section */}

                    <Grid2 size={{ sm: 12, md: 4 }} marginTop={3}>
                        <Paper elevation={5}>
                            <Box sx={{ backgroundColor: "#98c01e" }}>
                                <Typography variant="h6" fontSize={'0.9rem'} gutterBottom color="#ffffff" paddingLeft={1}>
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
                            <Grid2 size={{ xs: 6, sm: 12 }} padding={0.5} sx={{
                                backgroundColor: "lightgray",
                                minWidth: "100%"
                            }}>
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
                                        href="https://www.biodiversa.eu/2024/04/15/sub-biomon/"
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
                                    noWrap
                                    sx={{
                                        wordWrap: "break-word",
                                        fontSize: "0.65rem"
                                    }}

                                >
                                    SubBioMon official web page: <br></br> <a target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.sub-biomon.net/about"
                                        style={{
                                            //color: "inherit"
                                            fontWeight: "normal",

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
                                        fontSize: "0.7rem",
                                        minWidth: "528px"
                                    }}>
                                    Romanian Lead beneficiary:
                                </Typography>
                                <Box
                                    sx={{
                                        //display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: 1,
                                        marginBottom: { xs: 1, md: 0 },

                                    }}
                                >
                                    <img
                                        src={acad}

                                        alt="acad-logo"
                                        style={{
                                            marginRight: "10%",
                                            //marginTop: "20%",
                                            height: "60px",
                                            //maxWidth: "100%",
                                        }}
                                    />
                                    <img
                                        src={iser}
                                        alt="iser-logo"
                                        style={{
                                            //marginTop: "20%",
                                            height: "60px",
                                            //maxWidth: "100%",
                                        }}
                                    />
                                </Box>


                                <Typography marginTop={"5%"}
                                    variant="body1"
                                    fontWeight={'bold'}
                                    sx={{
                                        wordWrap: "break-word",
                                        fontSize: "0.7rem"
                                    }}>Coordinator Romanian partner:</Typography>
                                <Typography marginTop={"5%"}
                                    variant="body1"

                                    sx={{
                                        wordWrap: "break-word",
                                        fontSize: "0.7rem"
                                    }}>Dr. Sanda IEPURE</Typography>
                                <Typography
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

                    <Grid2 container size={{ sm: 12, md: 8 }}>

                        {/* target species */}
                        <Grid2 size={12}>
                            <Typography
                                variant="h5"
                                fontWeight={'bold'}
                                fontSize={"1rem"}
                                sx={{
                                    wordWrap: "break-word",
                                    textAlign: "center"
                                    //fontSize: "0.7rem"
                                }}>
                                Target species
                            </Typography>
                        </Grid2>

                        <Grid2 size={12} sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                        }}>

                            <img
                                src={species}
                                alt="fig 1."
                                style={{
                                    //width: "100%",
                                    maxWidth: "100%",
                                    height: "100%",
                                    //minHeight: "100px",
                                    //maxHeight: "78px",
                                    objectFit: "contain",

                                    borderRadius: "5px",


                                }}
                            >
                            </img>
                        </Grid2>

                        {/* output */}

                        {/* scos pentru moment */}
                        {/* <Grid2 size={12}>
                            <Typography
                                variant="h5"
                                fontWeight={'bold'}
                                fontSize={"1rem"}
                                sx={{
                                    wordWrap: "break-word",
                                    //fontSize: "0.7rem"
                                }}>
                                Output
                            </Typography>
                        </Grid2>

                        <Grid2 size={12}>
                            <Box sx={{
                                //paddingRight: { sm: 1, md: 25, xl: 60 }
                            }}>
                                <Typography variant="body2" fontSize={"0.7rem"}>
                                    Field monitoring protocol for caves and springs; guidelines on monitoring biodiversity and target subterranean species developed; workflow from the lab to specimens’ identification promoted. The outputs of WP4 will support the activities from WP3 and WP5 (<a href="https://www.sub-biomon.net/about">https://www.sub-biomon.net/about</a>).
                                </Typography>
                            </Box>
                        </Grid2> */}

                        {/* <Grid2 size={12}>
                            <Typography
                                variant="body1"
                                fontWeight={'bold'}

                                sx={{
                                    wordWrap: "break-word",
                                    fontSize: "0.7rem"
                                }}>
                                Expected duration
                            </Typography>
                        </Grid2> */}

                        {/* <Grid2 size={12}>
                            <Box sx={{
                                paddingRight: { sm: 1, md: 25, xl: 60 }
                            }}>
                                <Typography variant="body2" fontSize={"0.7rem"}>
                                    April 2025 – 2027
                                </Typography>
                            </Box>
                        </Grid2> */}






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
                                gap: 0,
                            }}
                        >
                            {/* <Grid2 container marginTop={{xs: 0, sm: -2}}> */}

                            <Grid2 size={12}>
                                <Typography marginTop={0}
                                    variant="h5"
                                    fontWeight={'bold'}
                                    fontSize={"1rem"}
                                    sx={{
                                        wordWrap: "break-word",
                                        textAlign: "center"
                                        //fontSize: "0.7rem"
                                    }}>
                                    Romanian funding agency
                                </Typography>

                            </Grid2>

                            <Grid2 size={{ xs: 12, md: 4 }} sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                //flexDirection: { xs: "", md: "row" },
                            }}>
                                <Box
                                    component={"img"}
                                    src={uefscdiLogo}
                                    alt="uefscdi-logo"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        minHeight: "100px",
                                        maxHeight: "100px",
                                        objectFit: "contain",
                                    }}
                                >
                                </Box>
                            </Grid2>

                            <Grid2 size={{ xs: 12, md: 8 }} sx={{
                                display: "flex",
                                alignItems: "center",
                                //flexDirection: { xs: "column", md: "row" },
                            }}>
                                <Typography textAlign={"justify"} variant="body2" color="GrayText" fontSize={"0.7rem"}>
                                    The Executive Unit for the Financing of Higher Education, Research, Development and Innovation
                                </Typography>
                            </Grid2>


                            <Grid2 size={12}>
                                <Typography marginTop={0}
                                    variant="h5"
                                    fontWeight={'bold'}
                                    fontSize={"1rem"}
                                    sx={{
                                        wordWrap: "break-word",
                                        textAlign: "center"
                                        //fontSize: "0.7rem"
                                    }}>
                                    Principal coordinator
                                </Typography>

                            </Grid2>


                            <Grid2 size={{ xs: 12, md: 4 }} sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                //flexDirection: { xs: "", md: "row" },
                            }}>
                                <Box
                                    component={"img"}
                                    src={ljubljanaLogo}
                                    alt="uefscdi-logo"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        minHeight: "100px",
                                        maxHeight: "100px",
                                        objectFit: "contain",
                                    }}
                                >
                                </Box>
                            </Grid2>

                            <Grid2 size={{ xs: 12, md: 8 }} sx={{
                                display: "flex",
                                alignItems: "center",
                                //flexDirection: { xs: "column", md: "row" },
                            }}>
                                <Typography textAlign={"justify"} variant="body2" color="GrayText" fontSize={"0.7rem"}>
                                University of Ljubljana, Biotechnical Faculty, Slovenia

                                </Typography>
                            </Grid2>


                            {/* </Grid2> */}

                            {/* <Grid2 size={12}>
                            <Typography
                                variant="body1"
                                fontWeight={'bold'}
                                sx={{
                                    wordWrap: "break-word",
                                    fontSize: "0.7rem"
                                }}>Principal coordinator: </Typography>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 8 }} sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: { xs: "column", md: "row" },
                        }}>
                            <Typography fontSize={"0.8rem"}>

                                University of Ljubljana, Subterranean Biology Lab (SubBioLab)

                                Department of Biology, Biotechnical Faculty SLOVENIA

                            </Typography>
                        </Grid2> */}
                            {/* <Box
                            component="img"
                            src={partnersData[0].logo}
                            alt={partnersData[0].name}
                            sx={{

                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                minHeight: "100px",
                                maxHeight: "100px",
                                objectFit: "contain"

                            }}
                        ></Box> */}

                        </Grid2>


                    </Grid2>

                    <Grid2 container size={{ sm: 12, md: 8 }} >
                        <Grid2 size={12}>
                            <Typography variant="h5" fontWeight={"bold"} component="div" fontSize={"1rem"} sx={{
                                textAlign: "center"
                            }}
                            >Consortium 
                            </Typography>
                        </Grid2>
                        {/* <br></br> */}
                        <Grid2 size={12}>
                        <Typography paddingTop={"7px"} textAlign={"justify"} variant="body2" color="GrayText" fontSize={"0.7rem"} sx={{
                            textAlign: "center",
                            justifyContent: "center"
                        }}>The Sub-BioMon team consists of researchers from 6 institutions in  European countries. Find out more here: <a href="https://www.sub-biomon.net">https://www.sub-biomon.net</a> </Typography>
                        </Grid2>
                        
                        <Grid2  container size={12} marginTop={-2} 
                                sx={{
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                //justifyContent={"left"}
                        >

                            {partnersData.map((partner, index) => (
                                // index ? (<Grid2 size={{ xs: 12, sm: 1.5 }} key={index}>
                                <Grid2 size={{ xs: 12, sm: 2 }} key={index}>
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
                    <Grid2 size={{xs: 12, sm: 8}} sx={{
                       
                    }}>
                        <hr style={{
                            border: 'none',
                            minHeight: '2px',
                            backgroundColor: 'blue'
                        }} />
                        <Grid2 size={12}>
                            <Typography variant="h5" fontWeight={"bold"} component="div" fontSize={"1rem"} sx={{
                                textAlign: "center"
                            }}
                            >Romanian collaborators 
                            </Typography>
                        </Grid2>
                    </Grid2>
                    <Box
                        sx={{
                            display: 'flex', // Enables flexbox to center the grid horizontally
                            justifyContent: 'center', // Centers the grid horizontally
                            alignItems: 'center', // Optional: Center the grid vertically in the viewport
                            //height: '100vh', // Full viewport height for vertical centering
                            width: '85%', // Ensure full width for centering
                        }}
                    >
                        <Grid2
                            container
                            
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                maxWidth: '1200px',
                                minWidth: '600px'
                            }}
                            marginTop={{ xs: 0, sm: -5 }}
                            marginBottom={{ sm: "-5rem" }}
                        >
                            {/* First Grid item - Image on the right */}
                            <Grid2 size={{ sm: 4 }} 
                            sx={{ display: 'flex', justifyContent: 'flex-end', }}
                            paddingRight={"5%"}
                            >
                                <Box
                                    component="img"
                                    src={apuseniLogo}
                                    sx={{
                                        display: 'block', // Makes the image a block-level element
                                        marginTop: '15px',
                                        maxHeight: '75px', // Restrict height for uniformity
                                    }}
                                />
                            </Grid2>

                            {/* Second Grid item - Image on the left */}
                            <Grid2 size={{ sm:  8}} 
                            // sx={{ display: 'flex', justifyContent: 'flex-start' }}
                            >
                                <Box
                                    component="img"
                                    src={salvaLogo}
                                    sx={{
                                        display: 'block',
                                        marginTop: '15px',
                                        maxHeight: '75px',
                                    }}
                                />
                            </Grid2>
                        </Grid2>
                    </Box>


                </Grid2>
            </Box>
        </div>
    )
};