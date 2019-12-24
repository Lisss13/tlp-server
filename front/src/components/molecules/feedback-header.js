import React from "react"
import { Button, Grid, Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import MailOutline from "@material-ui/icons/MailOutline"
import { useTranslation } from "react-i18next"
import * as axios from "axios"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      color: theme.palette.primary.dark,
      padding: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
    form: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
    },
    titleContainer: {
      display: "flex",
      alignItems: "center",
    },
    title: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      fontSize: "16px",
      padding: theme.spacing(1),
      paddingLeft: 10,
      color: theme.palette.primary.dark,
    },
    field: {
      width: "100%",
    },
    fieldMulti: {
      width: "100%",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
    },
    buttonText: {
      color: theme.palette.common.white,
      fontSize: 16,
    },
  })
)

/**
 * Page header component
 * @param props Props
 */
export const FeedbackHeader = props => {
  const { t } = useTranslation()
  const classes = useStyles(props)

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [subject, setSubject] = React.useState("")
  const [message, setMessage] = React.useState("")

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const handleSubjectChange = event => {
    setSubject(event.target.value)
  }

  const handleMessageChange = event => {
    setMessage(event.target.value)
  }

  React.useEffect(() => {
    axios.post("/feedback", {
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
  }, [email, message, name, subject])

  return (
    <Paper square={true} className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.titleContainer}>
            <MailOutline />
            <Typography
              variant="h3"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {t("feedback.formTitle")}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.field}
              label={t("feedback.nameField")}
              variant="outlined"
              onChange={handleNameChange}
              value={name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.field}
              label={t("feedback.emailField")}
              variant="outlined"
              onChange={handleEmailChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label={t("feedback.subjectField")}
              variant="outlined"
              onChange={handleSubjectChange}
              value={subject}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.fieldMulti}
              label={t("feedback.messageField")}
              multiline
              onChange={handleMessageChange}
              value={message}
              rowsMax="8"
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.buttonContainer} item xs={12}>
            <Button variant="contained" color="secondary">
              <Typography
                variant="subtitle2"
                color="inherit"
                noWrap
                className={classes.buttonText}
              >
                Submit
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}
