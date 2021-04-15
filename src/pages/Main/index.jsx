import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  LinearProgress,
  Divider,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Password Manager
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: "12px",
    marginBottom: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  version: {
    flex: 1,
    height: "100%",
    margin: "7px 0 0 11px",
  },

  inputMasterPassword: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: "20px",
    width: "400px",
  },
  progressMasterPassword: {
    marginTop: "3px",
    marginLeft: "10px",
    width: "380px",
    borderRadius: 4,
    overflow: "hidden",
  },

  accordion: {
    width: "100%",
  },
  accordionHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  accordionInput: {
    marginTop: 0,
    marginBottom: 0,
  },
  accordionAddNewPassword: {
    width: "100%",
    backgroundColor: "#3f51b5",
  },
  addNewPasswordTitle: {
    width: "100%",
  },

  buttonAddNewPassword: {
    width: "70%",
    marginTop: "40px",
  },

  footer: {
    padding: theme.spacing(2, 1),
    marginTop: "auto",
    // backgroundColor: theme.palette.grey[200],
  },
}));

export const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.header} component="header" maxWidth="xl">
        <Box>
          <TextField
            className={classes.inputMasterPassword}
            variant="outlined"
            margin="normal"
            id="password"
            label="Master password"
            name="password"
            autoComplete="password"
            type="password"
            size="small"
            fullWidth
          />
          <LinearProgress
            variant="determinate"
            value={25}
            className={classes.progressMasterPassword}
          />
        </Box>
        <Typography
          component="h1"
          variant="h4"
          color="inherit"
          align="left"
          noWrap
        >
          Password Manager
        </Typography>
        <Typography
          component="h2"
          variant="h6"
          color="inherit"
          align="left"
          noWrap
          className={classes.version}
        >
          v 1.0.0
        </Typography>
        <Button size="large">Log out</Button>
      </Container>
      <Divider />

      {/* Main */}
      <Container className={classes.main} component="div" maxWidth="lg">
        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h3" variant="h5">
              Google
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <TextField
                  className={classes.accordionInput}
                  variant="outlined"
                  margin="normal"
                  label="Login"
                  name="login"
                  size="small"
                  autoComplete="off"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.accordionInput}
                  variant="outlined"
                  margin="normal"
                  label="Password"
                  name="password"
                  type="password"
                  size="small"
                  autoComplete="off"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.accordionInput}
                  variant="outlined"
                  margin="normal"
                  label="Description"
                  name="description"
                  size="small"
                  autoComplete="off"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={4} className={classes.accordionGrid}>
                <Button
                  className={classes.buttonMasterPassword}
                  size="medium"
                  variant="outlined"
                  color="primary"
                  fullWidth
                >
                  Edit
                </Button>
              </Grid>
              <Grid item xs={4} className={classes.accordionGrid}>
                <Button
                  className={classes.buttonMasterPassword}
                  size="medium"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={2} />
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h3" variant="h5">
              GitLab
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <TextField
                  className={classes.accordionInput}
                  variant="outlined"
                  margin="normal"
                  label="Login"
                  name="login"
                  size="small"
                  autoComplete="off"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.accordionInput}
                  variant="outlined"
                  margin="normal"
                  label="Password"
                  name="password"
                  type="password"
                  size="small"
                  autoComplete="off"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.accordionInput}
                  variant="outlined"
                  margin="normal"
                  label="Description"
                  name="description"
                  size="small"
                  autoComplete="off"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={4} className={classes.accordionGrid}>
                <Button
                  className={classes.buttonMasterPassword}
                  size="medium"
                  variant="outlined"
                  color="primary"
                  fullWidth
                >
                  Edit
                </Button>
              </Grid>
              <Grid item xs={4} className={classes.accordionGrid}>
                <Button
                  className={classes.buttonMasterPassword}
                  size="medium"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={2} />
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h3" variant="h5">
              Moodle
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <TextField
                  className={classes.accordionInput}
                  variant="outlined"
                  margin="normal"
                  label="Login"
                  name="login"
                  size="small"
                  autoComplete="off"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.accordionInput}
                  variant="outlined"
                  margin="normal"
                  label="Password"
                  name="password"
                  type="password"
                  size="small"
                  autoComplete="off"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.accordionInput}
                  variant="outlined"
                  margin="normal"
                  label="Description"
                  name="description"
                  size="small"
                  autoComplete="off"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={4} className={classes.accordionGrid}>
                <Button
                  className={classes.buttonMasterPassword}
                  size="medium"
                  variant="outlined"
                  color="primary"
                  fullWidth
                >
                  Edit
                </Button>
              </Grid>
              <Grid item xs={4} className={classes.accordionGrid}>
                <Button
                  className={classes.buttonMasterPassword}
                  size="medium"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={2} />
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              component="h3"
              variant="h5"
              align="center"
              color="primary"
              className={classes.addNewPasswordTitle}
            >
              Add new password
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  className={classes.accordionInput}
                  variant="outlined"
                  margin="normal"
                  label="Name"
                  name="name"
                  size="small"
                  autoComplete="off"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.accordionInput}
                  variant="outlined"
                  margin="normal"
                  label="Login"
                  name="login"
                  size="small"
                  autoComplete="off"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.accordionInput}
                  variant="outlined"
                  margin="normal"
                  label="Password"
                  name="password"
                  size="small"
                  autoComplete="off"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.accordionInput}
                  variant="outlined"
                  margin="normal"
                  label="Description"
                  name="description"
                  size="small"
                  autoComplete="off"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3} />
              <Grid item xs={6} className={classes.accordionGrid}>
                <Button
                  className={classes.buttonMasterPassword}
                  size="medium"
                  variant="outlined"
                  color="primary"
                  fullWidth
                >
                  Add
                </Button>
              </Grid>

              <Grid item xs={3} />
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
      {/* Main */}
      <footer className={classes.footer}>
        <Container maxWidth="xl">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};
