import React, { useEffect, useState } from "react";
import Image from "../../../common/Image";
import styles from "./homeBanner.module.scss";
import Typography from "../../../common/Typography";
import { COLOR_PRIMARY } from "../../../../constants/colors";
import connect from "src/context/Store/connect";
import { WindowSizeStateContext } from "src/context/WindowSizeProvider/WindowSizeProvider";
import { IWindowSizeState } from "src/context/WindowSizeProvider/types";
import classnames from "classnames";
import { HomeBannerService } from "src/api/services";
import { IHomeBannerInfo } from "src/api/types";

interface HomeBannerProps {
  isDesktop: boolean;
  isMobile: boolean;
}

const HomeBanner = ({ isDesktop, isMobile }: HomeBannerProps) => {
  const homeBannerService = new HomeBannerService(null);
  const [homeBannerInfo, setHomeBannerInfo] = useState<IHomeBannerInfo | null>(
    null
  );

  const handleGet = async () => {
    const result = await homeBannerService.get();
    console.log({ result });
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
              {homeBannerInfo.title}
            </Typography>
            {isDesktop && (
              <Typography align="justify">
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
