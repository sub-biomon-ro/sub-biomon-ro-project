import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function Publications() {

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
        }
    ]

    return (
        <div className="Publications">
            <Box sx={{
                marginTop: 5,
                marginLeft: { xs: 5, sm: 15, md: 30 },
                marginRight: { xs: 5, sm: 15, md: 30 },
                marginBottom: { xs: 5, sm: 15, md: 30 },

            }}>
                <Typography variant="h6" textAlign="center" gutterBottom>
                    Symposium Publications
                </Typography>
                <Box display="flex" flexDirection="column" gap={2}>
                    {citations.map((citation, index) => (
                        <Card key={index} variant="outlined" sx={{ maxWidth: "600px", margin: "auto" }}>
                            <CardContent>
                                {/* Author and Year */}
                                <Typography variant="body1" gutterBottom>
                                    <strong>{citation.author}</strong> ({citation.year}).
                                </Typography>

                                {/* Title with optional link */}
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
                                </Typography>

                                {/* Source */}
                                <Typography variant="body2" color="textSecondary">
                                    {citation.source}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </div>
    );
};