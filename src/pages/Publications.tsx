import { Box, Card, CardContent, Typography } from "@mui/material";
import { title } from "process";
import React from "react";

export default function Publications() {

    const publications = [
        {
            author: "Di Lorenzo, T., A. Tabilio Di Camillo, S. Iepure, D. M. P. Galassi, N. Mori, T. Simčič",
            year: 2025,
            title: "Oxygen Consumption and Carbon Budget in Groundwater-Obligate and Surface-Dwelling Diacyclops Species (Crustacea, Copepoda, Cyclopoida) Under Temperature Variability",
            source: "Environments 12(1), 32;",
            link: " https://doi.org/10.3390/environments12010032"
        },
    ]

    const citations = [
        {
            author: "Zagmajster, M., Balázs, G., Biró, A., Bucur, R., Collard, O., Delić, T., Kos, A., Flot, J.F., Haidau, C., Herczeg, G., Iepure, S., Lippert. E., Lunghi, E., Mantoiu, D.S., Moldovan, O.T, Sambor, O., Sitar, C., Stoch, F., Zakšek, V., Weber, D., Weigand, A., Weigand, H.",
            year: 2024,
            title: "The Sub-BioMon: Developing and testing approaches to monitor subterranean biodiversity in karst.",
            source: "KARST SCIENCE DAYS SYMPOSIUM PROCEEDINGS 2, 51-54.",
            link: "https://doi.org/10.70655/KSD.2024.15",
        },
        {
            author: "Olaru, A., O. Sambor, D. Borda, R. Bucur, A. Perșoiu, C. Marin, A. Tudorache, N. Scrob, S. Iepure.",
            year: 2024,
            title: "Karst springs - windows to the groundwater ecosystems health",
            source: "KARST SCIENCE DAYS SYMPOSIUM PROCEEDINGS 2 (2024)",
            link: "https://doi.org/10.70655/KSD.2024.03",
        },
        {
            author: "Zagmajster, M., Balázs, G., Biró, A., Bucur, R., Collard, O., Delić, T., Kos, A., Flot, J.F., Haidau, C., Herczeg, G., Iepure, S., Lippert. E., Lunghi, E., Mantoiu, D.S., Moldovan, O.T, Sambor, O., Sitar, C., Stoch, F., Zakšek, V., Weber, D., Weigand, A., Weigand, H.",
            year: 2024,
            title: "The Sub-BioMon: Developing and testing approaches to monitor subterranean biodiversity in karst.",
            source: "26th International Conference on Subterranean Biology and 6th International Symposium on Anchialine Ecosystems Book of abstracts (Poster 33).",
            link: "",
        },
        {
            author: "Iepure S., Motoc, M.R., Barbu L., Coada D., Pop M.P. 2024.",
            year: 2024,
            title: "Life’s Toxic Sanctuary in Movile Cave (Dobrogea, Romania): insights into ostracod shell chemical composition, ultrastructure and epibionts.",
            source: "26th International Conference on Subterranean Biology and 6th International Symposium on Anchialine Ecosystems Book of abstracts (Poster 47)",
            link: "",
        },
        
    ]

    return (
        <div className="Publications">
            <Box
                sx={{
                    marginTop: 5,
                    marginLeft: { xs: 5, sm: 15, md: 30 },
                    marginRight: { xs: 5, sm: 15, md: 30 },
                    marginBottom: { xs: 5, sm: 15, md: 30 },
                }}
            >
                <Box sx={{ maxWidth: "600px", margin: "auto", textAlign: "left", marginBottom: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Publications
                    </Typography>
                </Box>

                <Box display="flex" flexDirection="column" gap={2}>
                    {publications.map((publication, index) => (
                        <Card key={index} variant="outlined" sx={{ maxWidth: "600px", margin: "auto" }}>
                            <CardContent>
                                {/* Author and Year */}
                                <Typography variant="body2" gutterBottom fontSize={"0.7rem"} sx={{color:"GrayText"}}>
                                    {publication.author}({publication.year}).
                                    <> </>
                                    <em>
                                        {publication.link ? (
                                            <a
                                                href={publication.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: "none", color: "inherit" }}
                                            >
                                                {publication.title}
                                            </a>
                                        ) : (
                                            publication.title
                                        )}
                                    </em>
                                    <> </>
                                    {publication.source}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
          
                <Box sx={{ maxWidth: "600px", margin: "auto", textAlign: "left", marginBottom: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Symposium & Workshops
                    </Typography>
                </Box>
    
                <Box display="flex" flexDirection="column" gap={2}>
                    {citations.map((citation, index) => (
                        <Card key={index} variant="outlined" sx={{ maxWidth: "600px", margin: "auto" }}>
                            <CardContent>
                                {/* Author and Year */}
                                <Typography variant="body2" gutterBottom fontSize={"0.7rem"} sx={{color:"GrayText"}}>
                                    {citation.author}({citation.year}).
                                    <> </>
                                    <em>
                                        {citation.link ? (
                                            <a
                                                href={citation.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: "none", color: "inherit" }}
                                            >
                                                {citation.title}
                                            </a>
                                        ) : (
                                            citation.title
                                        )}
                                    </em>
                                    <> </>
                                    {citation.source}
                                </Typography>
    
                                {/* Title with optional link
                                <Typography variant="body1" gutterBottom>
                                    <em>
                                        {citation.link ? (
                                            <a
                                                href={citation.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: "none", color: "inherit" }}
                                            >
                                                {citation.title}
                                            </a>
                                        ) : (
                                            citation.title
                                        )}
                                    </em>
                                </Typography> */}
    
                                {/* Source */}
                                {/* <Typography variant="body2" color="textSecondary">
                                    {citation.source}
                                </Typography> */}
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </div>
    );
};