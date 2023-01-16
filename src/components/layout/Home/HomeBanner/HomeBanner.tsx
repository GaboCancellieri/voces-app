import React from "react";
import Image from "../../../common/Image";
import styles from "./homeBanner.module.scss";
import Typography from "../../../common/Typography";
import { COLOR_PRIMARY } from "../../../../constants/colors";
import Card from "ccomponents/Card/Card";
import {
  HOME_BANNER_P1,
  HOME_BANNER_P2,
  HOME_BANNER_P3,
  HOME_BANNER_P4,
  HOME_BANNER_TITLE,
} from "./constants";
import connect from "src/context/Store/connect";
import { WindowSizeStateContext } from "src/context/WindowSizeProvider/WindowSizeProvider";
import { IWindowSizeState } from "src/context/WindowSizeProvider/types";
import classnames from "classnames";

interface HomeBannerProps {
  isDesktop: boolean;
  isMobile: boolean;
}

const HomeBanner = ({ isDesktop, isMobile }: HomeBannerProps) => {
  return (
    <>
      <div
        className={classnames(styles.homeBannerContainer, {
          [styles.homeBannerContainerMobile]: isMobile,
        })}
      >
        <Image
          height="396px"
          width="402px"
          url="src/assets/img/logos/Logo_Alternative.png"
          altText="HomeBanner"
        />
        <div>
          <Typography
            color={COLOR_PRIMARY}
            fontFamily="fjallaOne"
            size="50px"
            variant="bold"
          >
            {HOME_BANNER_TITLE}
          </Typography>
          {isDesktop && (
            <Typography align="justify">
              <p>{HOME_BANNER_P1}</p>
              <p>{HOME_BANNER_P2}</p>
              <p>{HOME_BANNER_P3}</p>
              <p>{HOME_BANNER_P4}</p>
            </Typography>
          )}
        </div>
      </div>
      <Card />
    </>
  );
};

const mapStateToProps = [
  {
    context: WindowSizeStateContext,
    mapStateToProps: ({ isDesktop, isMobile }: IWindowSizeState) => ({
      isDesktop,
      isMobile,
    }),
  },
];

export default connect({ mapStateToProps })(HomeBanner);
