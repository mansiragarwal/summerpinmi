import { useState, useEffect } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { firebase } from "../../../hooks/firebase";

import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import ColorLibButton from "../ColorLibComponents/ColorLibButton";
import ColorLibTextField from "../ColorLibComponents/ColorLibTextField";
import { setSessionID } from "../../Store";
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from "constants";

const useStyles = makeStyles((theme) => ({
  welcome_container: {
    padding: "50px 68px 50px 68px",
    textAlign: "center",
  },
  welcome_intro: {
    color: theme.palette.teal.dark,
  },
  welcome_definition: {
    color: theme.palette.gray.main,
    fontStyle: "italic",
    padding: "10px 20px 10px 20px",
  },
  button_wrapper: {
    marginBottom: "68px",
    textAlign: "center",
  },
  session_container: {
    padding: "25px 34px 25px 34px",
    textAlign: "center",
  },
}));

const Review = (props) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [session, setSession] = useState();
  const [sessionsList, setSessionsList] = useState([]);
  const [p, setP] = useState([]);
  const usernameRef = useRef("");

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    if (username.length) {
      updateSessionList();
    }
  }, [username]);

  // const loadPins = async (s) => {
  //   await firebase
  //     .firestore()
  //     .collection("sessions_by_usernames")
  //     .doc(username)
  //     .collection("sessions")
  //     .doc(s)
  //     .collection("pins")
  //     .get()
  //     .then((doc) => {
  //       var tmpPins = doc.docs.map((d) => d.data());
  //       tmpPins.sort((a, b) => a.pinTime - b.pinTime);
  //       props.setPins(tmpPins);
  //       props.setPage(1);
  //     });
  // };

  // const loadUserMode = async (s) => {
  //   await firebase
  //     .firestore()
  //     .collection("sessions_by_usernames")
  //     .doc(username)
  //     .collection("sessions")
  //     .doc(s)
  //     .get()
  //     .then((doc) => {
  //       props.setUserMode({
  //         userMode: doc.data().caller_name == username ? "caller" : "callee",
  //       });
  //     });
  // };

  const updateSessionList = async () => {
    await firebase
      .firestore()
      .collection("sessions_by_usernames")
      .doc(username)
      .get()
      .then(async (doc) => {
        if (doc.exists) {
          let document = await firebase
            .firestore()
            .collection("sessions_by_usernames")
            .doc(username)
            .collection("sessions");

          document.get().then((e) => {
            let L1 = e.docs.map((doc) => {
              return { session: doc.id, date: doc.data().date };
            });
            setSessionsList(L1);
          });
        } else {
          setSessionsList([]);
        }
      });
  };

  const updateSessionInfo = async (session) => {
    // loadUserMode(session);
    // loadPins(session);
    props.setReviewSessionID(session);
    props.setUserName(username);
  };

  return (
    <>
      <Container className={classes.welcome_container} maxWidth="md">
        <Box m={1} display="inline">
          <ColorLibTextField
            id="outlined-basic"
            label="Your Unique ID"
            variant="outlined"
            value={username}
            inputRef={usernameRef}
            onChange={() => setUsername(usernameRef.current.value)}
          />
        </Box>
      </Container>
      {/* <div className={classes.button_wrapper}>
        <ColorLibButton variant="contained" size="large">
          Let's get started!
        </ColorLibButton>
      </div> */}
      {sessionsList.map((s) => (
        <div className={classes.button_wrapper}>
          <ColorLibButton
            variant="contained"
            size="large"
            onClick={() => updateSessionInfo(s.session)}
          >
            {s.date}
          </ColorLibButton>
        </div>
      ))}
    </>
  );
};

export default Review;
