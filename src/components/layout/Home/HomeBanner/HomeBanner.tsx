import React, { useEffect, useState } from "react";
import Image from "../../../common/Image";
import styles from "./homeBanner.module.scss";
import { Typography } from "ccomponents/index";
import { COLOR_PRIMARY } from "../../../../constants/colors";
import connect from "src/context/Store/connect";
import { WindowSizeStateContext } from "src/context/WindowSizeProvider/WindowSizeProvider";
import { IWindowSizeState } from "src/context/WindowSizeProvider/types";
import classnames from "classnames";
import { IHomeBannerInfo } from "src/api/types";
import logoImageAlternative from "src/assets/img/logos/Logo_Alternative.png";
import { useHomeBannerService } from "src/api/api";

interface HomeBannerProps {
  isDesktop: boolean;
  isMobile: boolean;
}

const HomeBanner = ({ isDesktop, isMobile }: HomeBannerProps) => {
  const homeBannerService = useHomeBannerService();
  const [homeBannerInfo, setHomeBannerInfo] = useState<IHomeBannerInfo | null>(
    null
  );

  const handleGet = async () => {
    const result = await homeBannerService.get();
    setHomeBannerInfo(result);
  };

  useEffect(() => {
    if (!homeBannerInfo) {
      handleGet();
    }
  }, []);

  return (
    <>
      {homeBannerInfo && (
        <div
          className={classnames(styles.homeBannerContainer, {
            [styles.homeBannerContainerMobile]: isMobile,
          })}
        >
          <Image
            height="396px"
            width="402px"
            url={logoImageAlternative}
            altText="HomeBanner"
          />
          <div>
            <Typography
              color={COLOR_PRIMARY}
              fontFamily="fjallaOne"
              size="50px"
              variant="bold"
            >
              {homeBannerInfo.title}
            </Typography>
            {isDesktop && (
              <Typography
                align="justify"
                fontFamily="fjallaOne"
                size="20px"
                variant="bold"
              >
                <p>{homeBannerInfo.description}</p>
              </Typography>
            )}
          </div>
        </div>
      )}
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
