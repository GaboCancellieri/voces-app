import React from "react";
import { Link } from "react-router-dom";
import { Button, Image, Typography } from "..";
import styles from "./adminBar.module.scss";
import { ADMIN_BAR_OPTIONS } from "./constants";
import logoImageAlternative from "src/assets/img/logos/Logo_Alternative.png";

const AdminBar = () => {
  return (
    <div className={styles.adminBarContainer}>
      <div className={styles.adminBarContent}>
        <Image
          height="130px"
          width="140px"
          url={logoImageAlternative}
          altText="HomeBanner"
        />
        {ADMIN_BAR_OPTIONS.map((option, index) => {
          return (
            <div key={index} className={styles.adminBarOption}>
              <Link to={option.url}>
                <Button size="full">
                  <Typography>{option.name}</Typography>
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminBar;
