import React from "react";
import Card from "ccomponents/Card";
import styles from "./activitiesCards.module.scss";

import {
  ACTIVITIES_1_DESCRIPTION,
  ACTIVITIES_1_IMG,
  ACTIVITIES_1_TITLE,
  ACTIVITIES_2_DESCRIPTION,
  ACTIVITIES_2_IMG,
  ACTIVITIES_2_TITLE,
  ACTIVITIES_3_DESCRIPTION,
  ACTIVITIES_3_IMG,
  ACTIVITIES_3_TITLE,
  ACTIVITIES_4_DESCRIPTION,
  ACTIVITIES_4_IMG,
  ACTIVITIES_4_TITLE,
} from "./constants";

const Activities = () => {
  return (
    <div className={styles.activitiesCards_container}>
      <div>
        <Card
          title={ACTIVITIES_1_TITLE}
          imageProps={ACTIVITIES_1_IMG}
          description={ACTIVITIES_1_DESCRIPTION}
        ></Card>
      </div>
      <div>
        <Card
          title={ACTIVITIES_2_TITLE}
          imageProps={ACTIVITIES_2_IMG}
          description={ACTIVITIES_2_DESCRIPTION}
        ></Card>
      </div>
      <div>
        <Card
          title={ACTIVITIES_3_TITLE}
          imageProps={ACTIVITIES_3_IMG}
          description={ACTIVITIES_3_DESCRIPTION}
        ></Card>
      </div>
      <div>
        <Card
          title={ACTIVITIES_4_TITLE}
          imageProps={ACTIVITIES_4_IMG}
          description={ACTIVITIES_4_DESCRIPTION}
        ></Card>
      </div>
    </div>
  );
};

export default Activities;
