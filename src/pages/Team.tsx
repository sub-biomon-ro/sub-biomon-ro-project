import { Box, Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import React from "react";
import img1 from "./team-images/sanda-iepure.jpg"
import img2 from "./team-images/oana-teodora-moldovan.jpg"
import img3 from "./team-images/catalina-haidau.jpg"
import img4 from "./team-images/ruxandra bucur.jpg"
import img5 from "./team-images/cristian-sitar.jpg"
import img6 from "./team-images/dragos-stefan.jpg"
import img7 from "./team-images/orest-sambor.jpeg"
import img8 from "./team-images/dragos-coada.jpg"


export default function Team() {

    const imgImports = [img1, img2, img3, img4, img5, img6, img7, img8]

    const teamData = [
        {
            name: 'Sanda Iepure',
            bio: 'PhD in Biology, Romanian Academy (Project coordinator). Sanda has broad research interest in subterranean biology and cave ecology, and on biodiversity, biogeography, and caves ecosystem function. Her researches also focus on systematics, and taxonomy of groundwater crustaceans (cyclopoids, ostracods); evolution and adaptations of cave crustaceans to extreme cave environments (ice caves, sulfidic caves) and cave aquatic fauna monitoring.',
            imgSrc: '/team images/sanda-iepure.jpg',
        },
        {
            name: "Oana Teodora Moldovan",
            bio: "PhD in Biology, Universitee Paul Sabatier, Toulousse, France",
            imgSrc: "./team images/oana-teodora-moldovan.jpg",
        },
        {
            name: "Catalina Haidău PhD student",
            bio: "Scientist, focusing on bacteria from caves. With experience in microbiology (aerobe microorganisms’ isolation & cultures; phylogeny), molecular techniques, as well as in bioinformatics, her role in the project will be to perform the molecular and eDNA analysis",
            imgSrc: "",
        },
        {
            name: "Dr. Ruxandra Bucur",
            bio: "PhD in Biology, Romanian Academy, Cave beetles monitoring. Ruxandra Bucur is involved in research on cave fauna; her research interest is in the monitoring of terrestrial and aquatic fauna, as well as evolution, adaptation and speciation in subterranean environment. She uses molecular approaches to address issues on phylogeny and phylogeography of cave beetles for a better understanding of origin and evolution of subterranean biodiversity at different systematic levels, from populations to species.",
            imgSrc: "",
        },
        {
            name: "Dr. Cristian Sitar",
            bio: "Entomology, taxonomy of cave beetles, field monitoring of cave fauna. Dr. Cristian Sitar is an entomologist and ecologist with a bachelor's degree in biology (Lepidoptera), a master's degree in Systemic Ecology and Conservation (Lepidoptera), and a Ph.D. in biology focusing on the biology, ecology, and conservation of the species Eriogaster catax, a moth species listed in the Natura 2000 network. Over the past 12 years, he has been involved in numerous projects related to the inventory and monitoring of Natura 2000 insect species. Additionally, he has conducted faunistic studies on Lepidoptera in Cluj County and digitized the insect collections of the Babes Bolyai University Zoological Museum as a Senior Curator. Since 2018, he has been part of the team at the Emil Racovita Institute of Speleology in Cluj-Napoca, where he is involved in monitoring cave fauna and studying the taxonomy and biology of cave beetles (Duvalius, Pholeuon, Protopholeuon).",
            imgSrc: ""
        },
        {
            name: "Dr. Dragoş Ştefan Măntoiu ",
            bio: "is an ecologist with a Batchelor and Master’s degree in Geography (GIS modelling) and a PhD on the migration pathways of bats. His work revolves around the movement ecology of animals, with multiple projects within caves and karst areas. He authored a 10-year study on mapping the distribution of bats within caves using GIS modelling, with environmental variables constructed from prolonged monitoring campaigns which he coordinated. Currently he continues his work on the migration pathways of bats in the Western Black Sea Coast, with an emphasis on karst areas and caves as stopover locations.",
            imgSrc: "",
        },
        {
            name: "Orest Sambor",
            bio: "MSc, Bachelor in Biology, University Babes Bolyai Cluj Napoca, Romania. Orest holds a Bachelor's degree in Biology and a Master's degree in Systemic Ecology and Conservation from the Faculty of Biology and Geology, Babeş-Bolyai University, with his graduation theses focused on aquatic invertebrates. With expertise in ecology, hydrobiology, biospeleology, and as an ecologist, he continues to conduct research and field monitoring in cave environments, exploring various aspects of cave ecology, biodiversity, and ecosystem dynamics.",
            imgSrc: "",
        },
        {
            name: "Dragos Coada, Stud. ",
            bio: "University Babes Bolyai Cluj Napoca, Romania. Dragos will be trained in cave aquatic fauna monitoring and harpacticoids taxonomy.",
            imgSrc: "",
        },
        {
            name: "Stefan Puiu, Stud. ",
            bio: "University Babes Bolyai Cluj Napoca, Romania. Stefan will be trained in cave terrestrial fauna monitoring and Aranea taxonomy",
            imgSrc: ""
        }

    ]

    return (
        <div className="Team">
            <Box sx={{
                marginTop: 5,
                marginLeft: { xs: 5, sm: 15, md: 30 },
                marginRight: { xs: 5, sm: 15, md: 30 },
                zoom: "75%"

            }}>
                <Grid2 container spacing={2}>
                    <Box sx={{ padding: 3 }}>
                        <Typography variant="h4" textAlign="center" gutterBottom>
                            Meet the Team
                        </Typography>
                        <Grid2 container spacing={3}>
                            {teamData.map((bio, index) => (
                                <Grid2 key={index} size={12}>
                                    <Card sx={{ maxWidth: 345, margin: "auto" }}>
                                        {imgImports[index] ? (
                                            <CardMedia
                                            component="img"
                                            height="350"
                                        
                                            image={imgImports[index]}
                                            alt={`${bio.name} photo`}
                                        />
                                        ) : null}
                                        <CardContent>
                                            <Typography variant="h6" gutterBottom>
                                                {bio.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {bio.bio}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Box>
                </Grid2>
            </Box>
        </div>
    );
};