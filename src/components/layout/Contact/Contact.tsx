import { Button, Typography } from "ccomponents/index";
import { COLOR_ALMOST_WHITE, COLOR_PRIMARY } from "constants/colors";
import React from "react";
import { TITLE } from "./constants";
import styles from "./contact.module.scss";
const Contact = () => {
  return (
    <div>
      <div className={styles.contactBanner}>
        <Typography fontFamily="fjallaOne" size={"50px"} color={COLOR_PRIMARY}>
          {TITLE}
        </Typography>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.title}>
          <Typography
            fontFamily="fjallaOne"
            size={"30px"}
            color={COLOR_ALMOST_WHITE}
          >
            ENVIANOS TU CONSULTA
          </Typography>
        </div>

        <div className={styles.form}>
          <form>
            <div className={styles.names}>
              <label htmlFor="Nombre">
                <Typography
                  className={styles.titles}
                  color={COLOR_ALMOST_WHITE}
                >
                  Nombre:
                </Typography>{" "}
              </label>
              <input
                type="text"
                name="Nombre"
                placeholder="Ingrese su Nombre"
                className={styles.formElements}
              ></input>
              <label htmlFor="Apellido">
                <Typography
                  className={styles.titles}
                  color={COLOR_ALMOST_WHITE}
                >
                  Apellido:
                </Typography>{" "}
              </label>
              <input
                type="text"
                name="Apellido"
                placeholder="Ingrese su Apellido"
                className={styles.formElements}
              ></input>
            </div>
            <label htmlFor="Telefono">
              <Typography className={styles.titles} color={COLOR_ALMOST_WHITE}>
                Telefono:
              </Typography>{" "}
            </label>
            <input
              type="text"
              name="Telefono"
              placeholder="Ingrese su Telefono sin el 0 y sin el 15"
              className={styles.formElements}
            ></input>
            <label htmlFor="Asunto">
              {" "}
              <Typography className={styles.titles} color={COLOR_ALMOST_WHITE}>
                Asunto:
              </Typography>{" "}
            </label>
            <input
              type="text"
              name="Asunto"
              placeholder="¿De que se trata su consulta?"
              className={styles.formElements}
            ></input>
            <label htmlFor="Consulta">
              {" "}
              <Typography className={styles.titles} color={COLOR_ALMOST_WHITE}>
                Consulta:
              </Typography>{" "}
            </label>
            <textarea
              name="Consutla"
              placeholder="¿Cual es su consulta?"
              className={styles.formElements}
            ></textarea>
          </form>
        </div>
        <div className={styles.button}>
          <Button> ENVIAR </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
