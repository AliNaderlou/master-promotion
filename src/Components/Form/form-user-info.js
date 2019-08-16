import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import teal from "@material-ui/core/colors/teal";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    palette: {
      primary: teal,
      secondary: teal
    },
    status: {
      danger: "orange"
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 240
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));
const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: teal
  },
  status: {
    danger: "orange"
  }
});

export default function TextFields(props) {
  const classes = useStyles();
  const { values, handleChange } = props;

  return (
    <ThemeProvider theme={theme}>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          className={classes.textField}
          value={values.firstName}
          margin="normal"
          label="نام"
          onChange={handleChange("firstName")}
        />
        <TextField
          className={classes.textField}
          value={values.firstName}
          margin="normal"
          label="نام خانوادگی"
          onChange={handleChange("lastName")}
        />
        <TextField
          className={classes.textField}
          value={values.firstName}
          margin="normal"
          label="نام آموزش کده/دانشکده"
          onChange={handleChange("lastName")}
        />
        <TextField
          className={classes.textField}
          value={values.firstName}
          margin="normal"
          label="گروه آموزشی"
          onChange={handleChange("lastName")}
        />
        <TextField
          className={classes.textField}
          value={values.firstName}
          margin="normal"
          label="وضعیت اشتغال"
          onChange={handleChange("lastName")}
        />
        <TextField
          id="standard-select-currency"
          select
          label="وضعیت اشتغال"
          className={classes.textField}
          value={values.currency}
          onChange={handleChange("currency")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
        >
          <MenuItem value={1}>شاغل</MenuItem>
          <MenuItem value={0}>بدون شغل</MenuItem>
        </TextField>
      </form>
    </ThemeProvider>
  );
}
