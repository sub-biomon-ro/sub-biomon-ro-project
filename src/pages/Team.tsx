import { Box, Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import React from "react";
import img1 from "./team-images/sanda-iepure2.jpg"
import img2 from "./team-images/oana-teodora-moldovan.jpg"
import img6 from "./team-images/catalina-haidau.jpg"
import img3 from "./team-images/ruxandra bucur.jpg"
import img4 from "./team-images/cristian-sitar.jpg"
import img5 from "./team-images/dragos-stefan.jpg"
import img7 from "./team-images/orest-sambor.jpeg"
import img8 from "./team-images/dragos-coada.jpg"
import img9 from '../News&Activities/news1.2.jpg'


export default function Team() {

    const imgImports = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

    const teamData = [
        {
            name: 'Dr. Sanda Iepure',
            bio: '<b>Sanda Iepure, PhD in Biology, Romanian Academy (Project coordinator)</b>. Associate Professor at the University Babes Bolyai and Senior Researcher at the Institute of Speleology Emil Racovita with broad research interest in subterranean biology, cave ecology, biodiversity, biogeography, and caves ecosystem function. Her researches also focus on systematics, and taxonomy of groundwater crustaceans (cyclopoids, ostracods); evolution and adaptations of cave crustaceans to extreme cave environments (ice caves, sulfidic caves) and groundwater ecotoxicology.',
            imgSrc: '/team images/sanda-iepure.jpg',
        },
        {
            name: "Dr. Oana T. Moldovan",
            bio: "<b>PhD in Biology, Universitee Paul Sabatier, Toulousse, France</b>. Senior Researcher at the Institute of Speleology Emil Racovita, Oana is biologist specialized in cave ecology and paleoecology, with experience in impact studies, groundwater ecology, the taxonomy of Coleoptera, paleoenvironment, protection and conservation of karst areas and caves.",
            imgSrc: "./team images/oana-teodora-moldovan.jpg",
        },
        {
            name: "Dr. Ruxandra Bucur",
            bio: `<b>PhD in Biology, Romanian Academy</b>. Researcher at the Institute of Speleology Emil Racovita,
Ruxandra is involved in research on cave fauna with interest in monitoring of terrestrial and aquatic
fauna, as well as evolution, adaptation and speciation of coleoptera in subterranean environment.
She uses molecular approaches to address issues on phylogeny and phylogeography of cave beetles
for a better understanding of origin and evolution of subterranean biodiversity at different
systematic levels, from populations to species.`,
            imgSrc: "",
        },
        {
            name: "Dr. Cristian Sitar",
            bio: `<b>PhD in Biology</b>, . Senior Curator at the Babes Bolyai University Zoological Museum, Cristian is an
entomologist and ecologist with background in inventory and monitoring of Natura 2000 insect
species. His current interest is in cave fauna monitoring and taxonomy and biology of cave beetles
(ex. <i>Duvalius, Pholeuon, Protopholeuon</i>).`,
            imgSrc: ""
        },
        {
            name: "Dr. Dragoş Ştefan Măntoiu ",
            bio: `<b>PhD in Biology, Romanian Academy</b>. Dragos is specialization in migration pathways bats. His
research revolves around the movement ecology of animals, mapping the distribution of bats within
caves using GIS modelling, with environmental variables constructed from long-term monitoring.`,
            imgSrc: "",
        },
        {
            name: " PhD Student, Cătălina Haidău",
            bio: `<b>Researcher at the Institute of Speleology Emil Racovita</b>. Her studies focus on cave bacteria. With
experience in microbiology (aerobe microorganisms’ isolation &amp; cultures; phylogeny), molecular
techniques, as well as in bioinformatics, her role in the project will be to perform the molecular and
eDNA analysis.`,
            imgSrc: "",
        },
        {
            name: "MSc. Orest Sambor",
            bio: `<b>MSc, Bachelor in Biology</b>, University Babes Bolyai Cluj Napoca, Romania. Orest holds a Bachelor&#39;s
degree in Biology and a Master&#39;s degree in Systemic Ecology and Conservation from the Faculty of
Biology and Geology, Babeş-Bolyai University, with his graduation theses focused on aquatic
invertebrates. With expertise in ecology, hydrobiology, biospeleology, and as an ecologist, his
current research involves field monitoring of cave environments and biodiversity.`,
            imgSrc: "",
        },
        {
            name: "Student, Dragos Coada",
            bio: `<b>Faculty of Biology and Geology, University Babes Bolyai Cluj Napoca, Romania</b>. Dragos will be
trained in cave aquatic fauna monitoring and harpacticoids crustaceans taxonomy.`,
            imgSrc: "",
        },
        {
            name: "Student, Stefan Puiu",
            bio: `<b>Faculty of Biology and Geology, University Babes Bolyai Cluj Napoca, Romania</b>. Stefan will be
trained in cave terrestrial fauna monitoring and cave spiders taxonomy.`,
            imgSrc: ""
        }

    ]

    return (
        <div className="Team">
            <Box
                sx={{
                    marginTop: 5,
                    marginLeft: { xs: 5, sm: 15, md: 30 },
                    marginRight: { xs: 5, sm: 15, md: 30 },
                    marginBottom: { xs: 5, sm: 15, md: 30 },
                    display: "flex",
                    justifyContent: "center",
                    //zoom: "75%",

                }}
            >
                <Grid2 container sx={{
                    maxWidth: "1400px"
                }}>
                    {/* Title */}
                    <Box
                        sx={{
                            //maxWidth: 345,
                            //margin: "auto",
                            //textAlign: "center",
                            marginBottom: 3,

                        }}
                    >
                        <Grid2 container size={12} spacing={0}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: { xs: "column", md: "row" },
                                }}>
                                {/* <Typography
                                variant="h5"
                                //textAlign={"center"}
                                //marginRight={"auto"}
                                //gutterBottom
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: { xs: "center", md: "center" },
                                    textAlign: { xs: "center", md: "center" },
                                }}
                            >
                                Meet the Team
                            </Typography> */}

                            </Box>
                        </Grid2>
                    </Box>

                    {/* Team Cards */}
                    <Grid2 container size={12} spacing={3}>
                        {teamData.map((bio, index) => (
                            <Grid2 key={index} size={{ xs: 12, md: 6, lg: 6 }}>
                                <Card
                                    sx={{
                                        maxWidth: 250,
                                        margin: "auto"
                                    }}
                                >
                                    {imgImports[index] ? (
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={imgImports[index]}
                                            alt={`${bio.name} photo`}
                                        />
                                    ) : null}
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {bio.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" fontSize={"0.7rem"}
                                            dangerouslySetInnerHTML={{ __html: bio.bio }}>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid2>
                        ))}
                    </Grid2>
                </Grid2>
            </Box>

        </div>
    );
};