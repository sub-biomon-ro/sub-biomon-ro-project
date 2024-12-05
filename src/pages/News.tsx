import { Box, Grid2, ImageList, ImageListItem, Paper, Typography } from "@mui/material";
import React from "react";

import news11 from '../News&Activities/news1.1.jpg'
import news12 from '../News&Activities/news1.2.jpg'
import news21 from '../News&Activities/news2.1.jpg'
import news22 from '../News&Activities/news2.2.jpg'
import news23 from '../News&Activities/news2.3.jpg'

export const news1Imgs = [news11, news12];
export const news1Title = "A role for everyone";
export const news2Title = "2nd edition of Karst Science Days Symposium (KSD)";
export const news2Imgs = [news21, news22, news23];


export default function News() {

    var nrOfCols = 0;

    return (
        <div className="News">
            <Box sx={{
                marginTop: 5,
                marginLeft: { xs: 5, sm: 15, md: 30 },
                marginRight: { xs: 5, sm: 15, md: 30 },
                marginBottom: {xs: 5, sm: 15, md:60},
            }}>

                <Grid2 container gap={2}>

                    <Paper elevation={5} sx={{ padding: 1 }}>
                        <Grid2 container spacing={{
                            xs: 1,
                            sm: 2,
                            md: 3,
                            lg: 4,
                        }}>
                            <Grid2 size={12}>
                                <Typography variant="h5" textAlign={"center"}>A role for everyone</Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <ImageList variant="woven" cols={news1Imgs.length} gap={8}>
                                    {news1Imgs.map((item, index) => (
                                        <ImageListItem>
                                            <img
                                                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${item}?w=248&fit=crop&auto=format`}
                                                alt={`news1-"${index}`}
                                                loading="lazy"
                                                style={{ borderRadius: "10px" }}
                                            >

                                            </img>
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }} sx={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                            }}>
                                <Typography alignItems={"center"} alignContent={"center"}>
                                    Volunteers are an integral part of the research team supporting every aspect of our work. They play an active role in cave fauna field monitoring and in the laboratory work. To young students joined the Romanian team of Sub-BioMon, both undergraduate students at the University Babes Bolyai Cluj Napoca (Romania), Dragos Coada that will be trained in cave aquatic fauna monitoring and harpacticoids taxonomy and Stefan Puiu in cave terrestrial fauna monitoring and Aranea taxonomy.
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Paper>

                    <Paper elevation={5} sx={{ padding: 1 }}>
                        <Grid2 container spacing={{
                            xs: 1,
                            sm: 2,
                            md: 3,
                            lg: 4,
                        }}>
                            <Grid2 size={12}>
                                <Typography variant="h5" textAlign={"center"}>2nd edition of Karst Science Days Symposium (KSD)</Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <ImageList variant="woven" cols={news2Imgs.length - 1} gap={8}>
                                    {news2Imgs.map((item, index) => (
                                        <ImageListItem>
                                            <img
                                                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${item}?w=248&fit=crop&auto=format`}
                                                alt={`news1-"${index}`}
                                                loading="lazy"
                                                style={{ borderRadius: "10px" }}
                                            >

                                            </img>
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }} sx={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                            }}
                                gap={2}>
                                <Typography alignItems={"center"} alignContent={"center"}>
                                    The Sub-BioMon project has been launched during the 2nd edition of Karst Science Days Symposium (KSD) that took place in November 15th, 2024 in Bucharest at the Romania at the Institute of Speleology Emil Racovita. The first results of karst springs monitoring have been also presented by Alexandra Olaru, a MSc Student at the University Babes Bolyai, Cluj Napoca.
                                </Typography>
                                <Typography>
                                    KSD is a scientific event created to support young researchers on site and in hybrid format <a>(https://www.ksd.iser.ro/ )</a>. The symposium is designed to showcase the scientific contributions of outstanding students (undergraduate, graduate, and postgraduate) in the fields of biospeleology and geology of karst landscapes. KSD aims to provide the opportunity to share information about current studies of young researcher’s, to discuss and exchange ideas, to debate theoretical and practical topics related to their scientific work, and to analyze perspectives and experiences in their research field
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Paper>
                </Grid2>
            </Box>
        </div>
    );
};