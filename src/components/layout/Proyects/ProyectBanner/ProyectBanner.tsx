import React, { useEffect, useState } from "react";
import styles from "./proyectBanner.module.scss";
import { Typography } from "ccomponents/index";
import { COLOR_PRIMARY } from "../../../../constants/colors";
import connect from "src/context/Store/connect";
import { WindowSizeStateContext } from "src/context/WindowSizeProvider/WindowSizeProvider";
import { IWindowSizeState } from "src/context/WindowSizeProvider/types";
import classnames from "classnames";
import { IProyectBannerInfo } from "src/api/types";
import { useProyectBannerService } from "src/api/api";

interface ProyectBannerProps {
  isDesktop: boolean;
  isMobile: boolean;
}

const ProyectBanner = ({ isDesktop, isMobile }: ProyectBannerProps) => {
  const proyectBannerService = useProyectBannerService();
  const [proyectBannerInfo, setProyectBannerInfo] =
    useState<IProyectBannerInfo | null>(null);

  const handleGet = async () => {
    const result = await proyectBannerService.get();
    setProyectBannerInfo(result);
  };

  useEffect(() => {
    if (!proyectBannerInfo) {
      handleGet();
    }
  }, []);

  return (
    <>
      {proyectBannerInfo && (
        <div
          className={classnames(styles.proyectBannerContainer, {
            [styles.proyectBannerContainerMobile]: isMobile,
          })}
        >
          <div className={styles.title}>
            <Typography
              color={COLOR_PRIMARY}
              fontFamily="fjallaOne"
              size="50px"
              variant="bold"
            >
              {proyectBannerInfo.title}
            </Typography>
            {isDesktop && (
              <div className={styles.bannerDescription}>
                <Typography
                  fontFamily="fjallaOne"
                  size="20px"
                  variant="bold"
                  align="justify"
                >
                  <p>{proyectBannerInfo.description}</p>
                </Typography>
              </div>
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

export default connect({ mapStateToProps })(ProyectBanner);
