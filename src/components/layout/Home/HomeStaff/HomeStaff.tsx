import { Card, Typography } from "ccomponents/index";
import { COLOR_PRIMARY } from "../../../../constants/colors";
import connect from "src/context/Store/connect";
import { WindowSizeStateContext } from "src/context/WindowSizeProvider/WindowSizeProvider";
import { IWindowSizeState } from "src/context/WindowSizeProvider/types";
import classnames from "classnames";
import { IHomeStaff } from "src/api/types";
import { useHomeStaffService } from "src/api/api";
import React, { useEffect, useState } from "react";
import styles from "./homeStaff.module.scss";
interface StaffProps {
  isDesktop: boolean;
  isMobile: boolean;
}

const HomeStaff = ({ isDesktop, isMobile }: StaffProps) => {
  const homeStaffService = useHomeStaffService();
  const [staffInfo, setStaffInfo] = useState<IHomeStaff[] | null>(null);

  const handleGet = async () => {
    const result = await homeStaffService.get();
    setStaffInfo(result);
  };

  useEffect(() => {
    if (!staffInfo) {
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
          STAFF DE VOCES
        </Typography>
      </div>
      {staffInfo && (
        <div
          className={classnames(styles.staffContainer, {
            [styles.staffContainerMobile]: isMobile,
          })}
        >
          <div className={styles.cards}>
            {staffInfo.map((staffInfo) => (
              <div key={staffInfo.id}>
                <Card
                  title={staffInfo.title}
                  description={staffInfo.description}
                  imageProps={{
                    width: "292px",
                    height: "202px",
                    altText: "",
                    url: staffInfo.imageURL,
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

export default connect({ mapStateToProps })(HomeStaff);
