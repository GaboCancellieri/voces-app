import { Card, Typography } from "ccomponents/index";
import { COLOR_PRIMARY } from "../../../../constants/colors";
import connect from "src/context/Store/connect";
import { WindowSizeStateContext } from "src/context/WindowSizeProvider/WindowSizeProvider";
import { IWindowSizeState } from "src/context/WindowSizeProvider/types";
import classnames from "classnames";
import { IProyectAreas } from "src/api/types";
import { useProyectAreasService } from "src/api/api";
import React, { useEffect, useState } from "react";
import styles from "./areasBanner.module.scss";
interface AreasProps {
  isDesktop: boolean;
  isMobile: boolean;
}

const ProyectAreas = ({ isDesktop, isMobile }: AreasProps) => {
  const proyectAreasService = useProyectAreasService();
  const [areasInfo, setAreasInfo] = useState<IProyectAreas | null>(null);

  const handleGet = async () => {
    const result = await proyectAreasService.get();
    setAreasInfo(result);
  };

  useEffect(() => {
    if (!areasInfo) {
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
          AREAS
        </Typography>
      </div>
      {areasInfo && (
        <div
          className={classnames(styles.areasContainer, {
            [styles.areasContainerMobile]: isMobile,
          })}
        >
          <div className={styles.cards}>
            {JSON.parse(JSON.stringify(areasInfo)).map((areasInfo: any) => (
              <div>
                <Card
                  isStatic
                  title={areasInfo.title}
                  description={areasInfo.description}
                  imageProps={{
                    width: "292px",
                    height: "202px",
                    altText: "",
                    url: areasInfo.imageURL,
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

export default connect({ mapStateToProps })(ProyectAreas);
