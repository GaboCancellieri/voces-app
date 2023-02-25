import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import connect from "src/context/Store/connect";
import { IUserState } from "src/context/UserContext/types";
import { UserStateContext } from "src/context/UserContext/UserContext";
import { UserWrapperProps } from "./types";

const UserWrapper = ({ children, currentUser }: UserWrapperProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, []);

  return <>{children}</>;
};

const mapStateToProps = [
  {
    context: UserStateContext,
    mapStateToProps: ({ currentUser }: IUserState) => ({ currentUser }),
  },
];

export default connect({ mapStateToProps })(UserWrapper);
