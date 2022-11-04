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
        <form className="form" ref={form} onSubmit={sendEmail}>
          <h2>Contact</h2>

          <TextField
            id="outlined-mail-input"
            label="Email:"
            autoComplete="current-email"
            type="email"
            name="user_email"
            color="secondary"
            value={text}
            focused
            onChange={(e) => {
              setText(e.target.value);
            }}
            required
          />

          <div id="message">
            <TextField
              id="outlined-multiline-static"
              label="Message: *"
              multiline
              rows={4}
              // defaultValue="Default Value"
              color="secondary"
              fullWidth
              // autoFocus
              focused
              // contrastText
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <div className="btn">
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => {
                if (text !== "" && message !== "") {
                  swal.fire("Message envoyer", "Restez en attente", "success");
                }
              }}
              type="submit"
              value="Submit"
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
