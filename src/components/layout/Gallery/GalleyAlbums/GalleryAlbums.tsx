import React from "react";
import connect from "src/context/Store/connect";
import { Button, CardTicket } from "ccomponents/index";
import styles from "./galleryAlbums.module.scss";
import { GALLERY_ALBUMS } from "./constants";

const GalleryAlbums = () => {
  return (
    <div>
      <div className={styles.cards}>
        {GALLERY_ALBUMS.map((album, index) => {
          return (
            <div key={index} className={styles.tickets}>
              <CardTicket
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                title="Conoce nuestra escuela por Dentro"
                imageProps={{
                  width: "562px",
                  height: "303px",
                  altText: "",
                  url: "https://i0.wp.com/www.audiomusicadigital.com/wp-content/uploads/2021/05/SSL-Cube-Recording_1.jpg?ssl=1",
                }}
              >
                <div className={styles.btn}>
                  <Button variant="info">VER ALBUM</Button>
                </div>
              </CardTicket>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryAlbums;
