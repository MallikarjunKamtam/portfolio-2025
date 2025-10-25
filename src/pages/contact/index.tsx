import { Box, TextField, Button } from "@mui/material";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  subject: Yup.string().required("Please enter a subject"),
  message: Yup.string().required("Please enter your message"),
});

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  async function onSubmit(
    values: ContactFormValues,
    formikHelper: FormikHelpers<ContactFormValues>
  ) {
    const url: string = `${process.env.BACKEND_SERVICE_URL}/api/contact`;

    try {
      await axios.post(url, values);
      formikHelper.resetForm();
      setIsSubmitSuccessful(true);
    } catch (error) {
      setIsSubmitSuccessful(false);
    } finally {
      setOpen(true);
    }
  }

  return (
    <main
      id="Contact"
      className="flex flex-col gap-5 justify-center items-center py-20 text-center text-white"
    >
      <h1 className="text-3xl font-bold">Get In Touch</h1>
      <div className="bg-white w-36 h-[1px]" />
      <p className="max-w-md">
        Have a sweet project in mind or just want to say hi? Feel free to send
        me a message!
      </p>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpen(false);
          setIsSubmitSuccessful(false);
        }}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert
          onClose={() => {
            setOpen(false);
            setIsSubmitSuccessful(false);
          }}
          severity={isSubmitSuccessful ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {isSubmitSuccessful
            ? "Message sent successfully!"
            : "Failed to send message. Please try again."}
        </Alert>
      </Snackbar>

      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form
            className="w-full items-center justify-center flex"
            onSubmit={handleSubmit}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                width: { xs: "90%", md: "50%", lg: "33%" },
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                "& .MuiTextField-root": {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                  "& input, & textarea": {
                    color: "white",
                  },
                  "& .MuiFormHelperText-root": {
                    color: "#ff6347",
                  },
                },
              }}
            >
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                id="subject"
                name="subject"
                label="Subject"
                variant="outlined"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.subject && Boolean(errors.subject)}
                helperText={touched.subject && errors.subject}
              />
              <TextField
                fullWidth
                id="message"
                name="message"
                label="Message"
                multiline
                maxRows={4}
                variant="outlined"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "fit-content",
                  alignSelf: "center",
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                SEND MESSAGE
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </main>
  );
};

export default Contact;
