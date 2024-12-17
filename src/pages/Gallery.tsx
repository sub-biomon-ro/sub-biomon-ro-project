import React from "react";
import pozeGallery from "../pozegallery/1000008529.jpg"
import { RowsPhotoAlbum } from "react-photo-album";

import { Box, ImageList, ImageListItem, useMediaQuery, useTheme } from "@mui/material";
import "react-photo-album/rows.css";


import img1 from "../pozegallery/1000008529.jpg";
import img2 from "../pozegallery/1000008595.jpg";
import img3 from "../pozegallery/1000010548.jpg";
import img4 from "../pozegallery/1000010575.jpg";
import img5 from "../pozegallery/1000010668.jpg";
import img6 from "../pozegallery/1000012125.jpg";
import img7 from "../pozegallery/1000012133.jpg";
import img8 from "../pozegallery/1000012139.jpg";
import img9 from "../pozegallery/1000012212.jpg";
import img10 from "../pozegallery/1000012235.jpg";
import img11 from "../pozegallery/1000012581.jpg";

export default function Gallery() {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

    const photos = [
        { src: img1, width: 1600, height: 1200 },
        { src: "../pozegallery/1000008595.jpg", width: 2296, height: 4080 },
        { src: "..//pozegallery/100008780.jpg", width: 2048, height: 1536 },
        { src: "../pozegallery/1000010548.jpg", width: 4080, height: 2296 },
        { src: "../pozegallery/1000010575.jpg", width: 2296, height: 4080 },
        { src: "../pozegallery/1000010688.jpg", width: 1600, height: 1200 },
        { src: "../pozegallery/1000012125.jpg", width: 2296, height: 3082 },
        { src: "../pozegallery/1000012133.jpg", width: 2296, height: 3659 },
        { src: "../pozegallery/1000012139.jpg", width: 2250, height: 3218 },
        { src: "../pozegallery/1000012212.jpg", width: 2048, height: 1536 },
        { src: "../pozegallery/1000012235.jpg", width: 1536, height: 2048 },
        { src: "../pozegallery/1000012581.jpg", width: 1520, height: 1785 }
    ];

    const images = [
        {
            img: img2,
        },
        {
            img: img3,
        },
        {
            img: img4,
        },
        {
            img: img5,
        },
        {
            img: img6,
        },
        {
            img: img7,
        },
        {
            img: img8,
        },
        // {
        //     img: img9,
        // },
        {
            img: img10,
        },
        {
            img: img11,
        },
    ]

    const cols = isSmallScreen ? 1 : 3;

    return (
        <div className="Gallery">
            <Box sx={{
                marginTop: 5,
                marginLeft: { xs: 5, sm: 15, md: 30 },
                marginRight: { xs: 5, sm: 15, md: 30 },
                marginBottom: { xs: 5, sm: 15, md: 30 },
                display: "flex",
                justifyContent: "center",
            }}>
                <ImageList cols={cols}>
                    {images.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                loading="lazy"
                                style={{maxHeight: '300px'}}
                            >
                            </img>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    );
};