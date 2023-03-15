import React, { useEffect, useState } from "react";
import styles from "./userAccountDetails.module.scss";
import connect from "src/context/Store/connect";
import { UserStateContext } from "src/context/UserContext/UserContext";
import { IUserState } from "src/context/UserContext/types";
import { UserAccountDetailsProps } from "./types";
import Typography from "ccomponents/Typography";
import { IUser } from "src/api/types";
import UsersService from "src/api/services/UsersService";
import { useUsersService } from "src/api/api";

const UserAccountDetails = ({ currentUser }: UserAccountDetailsProps) => {
  console.log({ currentUser });
  if (!currentUser) return <></>;
  /* const usersService = useUsersService();
  const [usersInfo, setUsersInfo] = useState<IUser[] | null>(null);
  console.log({ usersInfo });

  const handleGet = async () => {
    const result = await usersService.get();
    setUsersInfo(result);
  };

  useEffect(() => {
    if (!usersInfo) {
      handleGet();
    }
  }, []);
*/
  return (
    <div className={styles.userAccountContainer}>
      <Typography>Nombre:</Typography>
      <Typography>{currentUser.name}</Typography>
      <Typography>Apellido:</Typography>
      <Typography>{currentUser.lastName}</Typography>
      <Typography>Email:</Typography>
      <Typography>{currentUser.email}</Typography>
    </div>
  );
};

const mapStateToProps = [
  {
    context: UserStateContext,
    mapStateToProps: ({ currentUser }: IUserState) => ({
      currentUser,
    }),
  },
];

export default connect({ mapStateToProps })(UserAccountDetails);
