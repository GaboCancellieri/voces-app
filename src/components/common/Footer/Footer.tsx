import React from "react";
import styles from "./footer.module.scss";
import Logo from "../Logo";
import Typography from "ccomponents/Typography";
import { COLOR_PRIMARY, COLOR_WHITE } from "constants/colors";
import {
  ABOUT_US,
  ABOUT_US_DESCRIPTION,
  CONTACT,
  CONTACT_CONTENT,
  FOOTER_COPYRIGHT,
  FOOTER_DESIGN,
  LINKS,
  LINKS_OPTIONS,
} from "./constants";
import { Link } from "react-router-dom";
import Button from "ccomponents/Button";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <Logo height="100%" width="160px" />
        <div className={styles.aboutUs}>
          <Typography
            align="left"
            fontFamily="fjallaOne"
            size={"25px"}
            color={COLOR_PRIMARY}
          >
            {ABOUT_US}
          </Typography>
          <Typography
            fontFamily="fjallaOne"
            align="left"
            size={"15px"}
            color={COLOR_WHITE}
          >
            {ABOUT_US_DESCRIPTION}
          </Typography>
        </div>
        <div className={styles.links}>
          <Typography
            align="left"
            fontFamily="fjallaOne"
            size={"25px"}
            color={COLOR_PRIMARY}
          >
            {LINKS}
          </Typography>

          {LINKS_OPTIONS.map((option, index) => {
            return (
              <div key={index}>
                <Link to={option.link}>
                  <Button variant="blank" hoverEffect align="left" size="fit">
                    <Typography
                      fontFamily="fjallaOne"
                      size={"15px"}
                      color={COLOR_WHITE}
                    >
                      {option.name}
                    </Typography>
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        <div className={styles.contact}>
          <Typography
            align="left"
            fontFamily="fjallaOne"
            size={"25px"}
            color={COLOR_PRIMARY}
          >
            {CONTACT}
          </Typography>
          <Typography
            align="left"
            fontFamily="fjallaOne"
            size={"15px"}
            color={COLOR_WHITE}
          >
            {CONTACT_CONTENT}
          </Typography>
        </div>
      </div>

      <div className={styles.footerFoot}>
        <Typography fontFamily="fjallaOne" size={"15px"} color={COLOR_WHITE}>
          {FOOTER_COPYRIGHT}
        </Typography>
        <Typography fontFamily="fjallaOne" size={"15px"} color={COLOR_WHITE}>
          {FOOTER_DESIGN}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
