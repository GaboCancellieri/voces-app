import React, { useEffect, useState } from "react";
import styles from "./streamingShows.module.scss";
import { Card, Typography } from "ccomponents/index";
import connect from "src/context/Store/connect";
import { WindowSizeStateContext } from "src/context/WindowSizeProvider/WindowSizeProvider";
import { IWindowSizeState } from "src/context/WindowSizeProvider/types";
import classnames from "classnames";
import { IShow } from "src/api/types";
import { useShowsService } from "src/api/api";
import { COLOR_PRIMARY } from "constants/colors";

interface ShowsProps {
  isDesktop: boolean;
  isMobile: boolean;
}

const StreamingShows = ({ isDesktop, isMobile }: ShowsProps) => {
  const streamingShowsService = useShowsService();
  const [showsInfo, setShowsInfo] = useState<IShow | null>(null);

  const handleGet = async () => {
    const result = await streamingShowsService.get();
    setShowsInfo(result);
  };

  useEffect(() => {
    if (!showsInfo) {
      handleGet();
    }
  }, []);

  return (
    <div>
      {showsInfo && (
        <div
          className={classnames(styles.showsContainer, {
            [styles.showsContainerMobile]: isMobile,
          })}
        >
          <Typography
            color={COLOR_PRIMARY}
            fontFamily={"fjallaOne"}
            size={"50px"}
          >
            CARTELERA
          </Typography>
          <div className={styles.cards}>
            {JSON.parse(JSON.stringify(showsInfo)).map((showsInfo: any) => (
              <div>
                <Card
                  title={showsInfo.title}
                  description={showsInfo.description}
                  imageProps={{
                    width: "292px",
                    height: "202px",
                    altText: "",
                    url: showsInfo.imageURL,
                  }}
                ></Card>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
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

export default connect({ mapStateToProps })(StreamingShows);
