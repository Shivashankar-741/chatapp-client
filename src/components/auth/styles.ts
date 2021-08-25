import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: "24px",
      fontFamily: "Poppins-medium",
      fontWeight: "bold",
      marginTop: "30px",
      marginBottom: "10px",
      color: "#2E2E2E",
    },

    paper: {
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(2),
      borderRadius: "12px",
      // backgroundColor: '#FFFFFF',
    },
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#0057FF",
      borderRadius: "8px",
      padding: "10px 15px",
      color: "#FFFFFF",
    },
    login: {
      fontSize: "14px",
      fontFamily: "Poppins-medium",
      display: "flex",
      justifyContent: "center",
    },
    sign: {
      color: "#0057FF",
      marginLeft: "5px",
      cursor: "pointer",
    },
    fileInput: {
      width: "97%",
      margin: "10px",
    },
  })
);
