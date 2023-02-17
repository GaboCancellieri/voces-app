import { Card, Typography } from "ccomponents/index";
import { COLOR_PRIMARY } from "../../../../constants/colors";
import connect from "src/context/Store/connect";
import { WindowSizeStateContext } from "src/context/WindowSizeProvider/WindowSizeProvider";
import { IWindowSizeState } from "src/context/WindowSizeProvider/types";
import classnames from "classnames";
import { IActivitiesCards } from "src/api/types";
import { useActivitiesCardsService } from "src/api/api";
import React, { useEffect, useState } from "react";
import styles from "./activitiesCards.module.scss";
interface ActivitiesProps {
  isDesktop: boolean;
  isMobile: boolean;
}

const ActivitiesCards = ({ isDesktop, isMobile }: ActivitiesProps) => {
  const activitiesCardsService = useActivitiesCardsService();
  const [activitiesInfo, setActivitiesInfo] = useState<IActivitiesCards | null>(
    null
  );

  const handleGet = async () => {
    const result = await activitiesCardsService.get();
    setActivitiesInfo(result);
  };

  useEffect(() => {
    if (!activitiesInfo) {
      handleGet();
    }
  }, []);

  return (
    <div>
      <div className={styles.title}></div>
      {activitiesInfo && (
        <div
          className={classnames(styles.activitiesCards_Container, {
            [styles.activitiesCardsContainerMobile]: isMobile,
          })}
        >
          <div className={styles.cards}>
            {JSON.parse(JSON.stringify(activitiesInfo)).map(
              (activitiesInfo: any) => (
                <div>
                  <Card
                    title={activitiesInfo.title}
                    description={activitiesInfo.description}
                    imageProps={{
                      width: "292px",
                      height: "202px",
                      altText: "",
                      url: activitiesInfo.imageURL,
                    }}
                  ></Card>
                </div>
              )
            )}
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

export default connect({ mapStateToProps })(ActivitiesCards);
