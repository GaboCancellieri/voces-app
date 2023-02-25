import { Carousel, Typography } from "ccomponents/index";
import { COLOR_PRIMARY } from "../../../../constants/colors";
import connect from "src/context/Store/connect";
import { WindowSizeStateContext } from "src/context/WindowSizeProvider/WindowSizeProvider";
import { IWindowSizeState } from "src/context/WindowSizeProvider/types";
import classnames from "classnames";
import { IHomeNews } from "src/api/types";
import { useHomeNewsService } from "src/api/api";
import React, { useEffect, useState } from "react";
import styles from "./homeNews.module.scss";
interface NewsProps {
  isDesktop: boolean;
  isMobile: boolean;
}

const HomeNews = ({ isDesktop, isMobile }: NewsProps) => {
  const homeNewsService = useHomeNewsService();
  const [newsInfo, setNewsInfo] = useState<IHomeNews | null>(null);

  const handleGet = async () => {
    const result = await homeNewsService.get();
    setNewsInfo(result);
  };

  useEffect(() => {
    if (!newsInfo) {
      handleGet();
    }
  }, []);

  return (
    <div>
      <div className={styles.title}>
        <Typography
          color={COLOR_PRIMARY}
          fontFamily="fjallaOne"
          size="50px"
          variant="bold"
        >
          NOVEDADES
        </Typography>
      </div>
      {newsInfo && (
        <div
          className={classnames(styles.newsContainer, {
            [styles.newsContainerMobile]: isMobile,
          })}
        >
          <div>
            {JSON.parse(JSON.stringify(newsInfo)).map((newsInfo: any) => (
              <Carousel
                imageProps={{
                  width: "1368px",
                  height: "650px",
                  altText: "",
                  url: newsInfo.imageURL,
                }}
              />
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

export default connect({ mapStateToProps })(HomeNews);
