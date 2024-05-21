import React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from "../firebase";

const Gallery = () => { 
  // import image data from firease storage
  const [images, setImages] = useState([]);
// 
  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, 'images');
      const result = await listAll(storageRef);

      const urlPromises = result.items.map((imageRef) => 
        getDownloadURL(imageRef).then((url) => ({
          url,
          title: imageRef.name,
        }))
      );

      const urls = await Promise.all(urlPromises);
      setImages(urls);
    };

    fetchImages();
  }, []);


  return (
    <>
      <div className="gallery">
        <hr className="MuiDivider-root" />
        <h1 className="gallery-title">Gallery</h1>
      </div>
      <hr className="MuiDivider-root" />
      <div className="gallery">
        <Box
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          <ImageList variant="masonry" gap={4}>
          {images.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={`${item.url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
          </ImageList>
        </Box>
      </div>
    </>
  );
};

export default Gallery;
