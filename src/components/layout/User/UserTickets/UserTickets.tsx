import React from "react";
import connect from "src/context/Store/connect";
import { UserStateContext } from "src/context/UserContext/UserContext";
import { IUserState } from "src/context/UserContext/types";
import { UserAccountDetailsProps } from "./types";
import { CardTicket } from "ccomponents/index";
import { USER_TICKETS } from "./constants";
import { format } from "date-fns";
import styles from "./userTickets.module.scss";

const UserTickets = ({ currentUser }: UserAccountDetailsProps) => {
  console.log({ currentUser });
  if (!currentUser) return <></>;
  return (
    <div className={styles.tickets}>
      {USER_TICKETS.map((ticket, index) => {
        return (
          <div key={index}>
            <CardTicket
              description={`
                Inicio: ${format(ticket.startDate, "dd/mm/yyyy")}
                Fin: ${format(ticket.endDate, "dd/mm/yyyy")}
              `}
              title={ticket.showTitle}
              imageProps={{
                width: "292px",
                height: "202px",
                altText: "",
                url: ticket.imageURL,
              }}
            ></CardTicket>
          </div>
        );
      })}
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

export default connect({ mapStateToProps })(UserTickets);
