import { Box, Grid2, ImageList, ImageListItem, Paper, Typography } from "@mui/material";
import React from "react";

import news11 from '../News&Activities/news1.1.jpg'
import news12 from '../News&Activities/news1.2.jpg'
import news21 from '../News&Activities/news2.1.jpg'
import news22 from '../News&Activities/news2.2.jpg'
import news23 from '../News&Activities/news2.3.jpg'
import news31 from '../News&Activities/news3.1.jpg'
import news32 from '../News&Activities/news3.2.jpg'

export const news1Imgs = [news11, news12];
export const news1Title = "A role for everyone";
export const news2Title = "2nd edition of Karst Science Days Symposium (KSD)";
export const news2Imgs = [news21, news22, news23];

export const newsData = [
     
    {
        title: "2nd edition of Karst Science Days Symposium (KSD)",
        date: "November 15, 2024",
        description: `The <b>Sub-BioMon</b> project has been launched during the 2nd edition of Karst Science Days Symposium (KSD) that took place in November 15th, 2024 in Bucharest at the Romania at the Institute of Speleology Emil Racovita. The first results of karst springs monitoring have been also presented by Alexandra Olaru, a MSc Student at the University Babes Bolyai, Cluj Napoca.
                      <br>
                      KSD is a scientific event created to support young researchers on site and in hybrid format (<a href=>https://www.ksd.iser.ro/ </a>). The symposium is designed to showcase the scientific contributions of outstanding students (undergraduate, graduate, and postgraduate) in the fields of biospeleology and geology of karst landscapes. KSD aims to provide the opportunity to share information about current studies of young researcher’s, to discuss and exchange ideas, to debate theoretical and practical topics related to their scientific work, and to analyze perspectives and experiences in their research field.
                     `,
        images: [news21, news23, news22],
    },
    {
        title: "A role for everyone",
        date: "October 10, 2024",
        description: `Volunteers are an integral part of the research team supporting every aspect of our work. They play an active role in cave fauna field monitoring and in the laboratory work. To young students joined the Romanian team of Sub-BioMon, both undergraduate students at the University Babes Bolyai Cluj Napoca (Romania), <b>Dragos Coada</b> that will be trained in cave aquatic fauna monitoring and harpacticoids taxonomy and <b>Stefan Puiu</b> in cave terrestrial fauna monitoring and Aranea taxonomy. `,
        images: [news11, news12],
    },
    {
        title: "26th International Conference of Subterranean Biology",
        date: "13 September 2024",
        description: `During the <b>26th International Conference of Subterranean Biology</b> held in Cagliari, Sardinia between 9-14 September 2024 the youngest member of the team presented data on cave ostracods from Movile Cave (Romania) <i>Life’s Toxic Sanctuary in Movile Cave (Dobrogea, Romania): insights into ostracod shell chemical composition, ultrastructure and epibionts</i>. The symposium was a good opportunity for meaningful discussions, learning from experts, and building networks.`,
        images: [news31, news32]
    }
   
];


export default function News() {
    return (
        <div className="News">
            <Box
                sx={{
                    marginTop: 5,
                    marginLeft: { xs: 5, sm: 15, md: 30 },
                    marginRight: { xs: 5, sm: 15, md: 30 },
                    marginBottom: { xs: 5, sm: 15, md: 30 },
                }}
            >
                <Grid2 container spacing={4}>
                    {newsData.map((newsItem, index) => (
                        <Grid2 size={{ xs: 12 }} key={index}>
                            <Paper elevation={5} sx={{ padding: 2 }}>
                                <Grid2 container spacing={2}>
                                    {/* Images */}
                                    <Grid2
                                        size={{ xs: 12, sm: 6, md: 4 }}
                                    >
                                        <Box
                                            sx={{
                                                display: "grid",
                                                gridTemplateColumns: `repeat(${Math.min(
                                                    newsItem.images.length,
                                                    2
                                                )}, 1fr)`,
                                                gap: 1,
                                            }}
                                        >
                                            {newsItem.images.slice(0, 2).map((img, imgIndex) => (
                                                <img
                                                    key={imgIndex}
                                                    src={img}
                                                    alt={`news-${index}-${imgIndex}`}
                                                    style={{
                                                        width: "100%",
                                                        height: "200px",
                                                        objectFit: "cover",
                                                        borderRadius: "10px",
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Grid2>
                                    {/* Text */}
                                    <Grid2
                                        size={{ xs: 12, sm: 6, md: 8 }}
                                    >
                                        <Typography variant="h5" gutterBottom>
                                            {newsItem.title}
                                        </Typography>
                                        <Typography variant="body2" fontSize={"0.7rem"} gutterBottom>
                                            {newsItem.date}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            fontSize={"0.7rem"}
                                            sx={{ color: "GrayText" }}
                                            gutterBottom
                                            dangerouslySetInnerHTML={{ __html: newsItem.description }}
                                        ></Typography>
                                    </Grid2>
                                </Grid2>
                            </Paper>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </div>
    );
};