import { Button, Typography } from "ccomponents/index";
import { COLOR_ALMOST_WHITE, COLOR_PRIMARY } from "constants/colors";
import React, { useState } from "react";
import { TITLE } from "./constants";
import styles from "./contact.module.scss";
const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");

  const handleSend = () => {};

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
                value={name}
                type="text"
                name="Nombre"
                placeholder="Ingrese su Nombre"
                className={styles.formElements}
                onChange={(e) => setName(e.target.value)}
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
                value={lastName}
                type="text"
                name="Apellido"
                placeholder="Ingrese su Apellido"
                className={styles.formElements}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
            <label htmlFor="Telefono">
              <Typography className={styles.titles} color={COLOR_ALMOST_WHITE}>
                Telefono:
              </Typography>{" "}
            </label>
            <input
              value={phone}
              type="text"
              name="Telefono"
              placeholder="Ingrese su Telefono sin el 0 y sin el 15"
              className={styles.formElements}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <label htmlFor="Asunto">
              <Typography className={styles.titles} color={COLOR_ALMOST_WHITE}>
                Asunto:
              </Typography>
            </label>
            <input
              value={subject}
              type="text"
              name="Asunto"
              placeholder="¿De que se trata su consulta?"
              className={styles.formElements}
              onChange={(e) => setSubject(e.target.value)}
            ></input>
            <label htmlFor="Consulta">
              {" "}
              <Typography className={styles.titles} color={COLOR_ALMOST_WHITE}>
                Consulta:
              </Typography>{" "}
            </label>
            <textarea
              value={question}
              name="Consulta"
              placeholder="¿Cual es su consulta?"
              className={styles.formElements}
              onChange={(e) => setQuestion(e.target.value)}
            ></textarea>
          </form>
        </div>
        <div className={styles.button}>
          <Button
            onClick={handleSend}
            type="submit"
            disabled={
              !name || !lastName || !phone || !subject || !question
                ? true
                : false
            }
          >
            <Typography>Enviar</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
