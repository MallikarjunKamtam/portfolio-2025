import { Box, TextField, Button } from "@mui/material";

const Contact = () => {
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
          },
        }}
      >
        <TextField fullWidth id="name" label="Name" variant="outlined" />
        <TextField fullWidth id="email" label="Email" variant="outlined" />
        <TextField fullWidth id="subject" label="Subject" variant="outlined" />
        <TextField
          fullWidth
          id="message"
          label="Message"
          multiline
          maxRows={4}
          variant="outlined"
        />
        <Button
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
    </main>
  );
};

export default Contact;
