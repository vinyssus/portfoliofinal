import React, { useRef, useState } from "react";
import swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oxx7yqn",
        "template_ku1vk8m",
        form.current,
        "KnpSwhuXxsyMxnLxJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#FFFFFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <div className="contact">
  <h2>Contactez-moi</h2>
  <form className="form" ref={form} onSubmit={sendEmail}>
    <TextField
      id="outlined-mail-input"
      label="Email"
      type="email"
      name="user_email"
      color="primary"
      variant="outlined"
      fullWidth
      required
    />
    <TextField
      id="outlined-multiline-static"
      label="Message"
      multiline
      rows={4}
      color="primary"
      variant="outlined"
      fullWidth
      required
    />
    <div className="btn">
      <Button
        variant="contained"
        color="primary"
        type="submit"
        endIcon={<SendIcon />}
      >
        Envoyer
      </Button>
    </div>
  </form>
</div>
    </ThemeProvider>
  );
};

export default Contact;
