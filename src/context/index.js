import React, { useState, createContext, useContext } from "react";
import { usePins } from '../hooks/index';
import { randomString} from "../helper";

export const ActiveStepContext = createContext();
export const ActiveStepProvider = ({children}) => {
    const [curActiveStep, setCurActiveStep] = useState(0);

    return  (
        <ActiveStepContext.Provider value = {{curActiveStep, setCurActiveStep}}>
            {children}
        </ActiveStepContext.Provider>
    )
}
export const useActiveStepValue = () => useContext(ActiveStepContext);

export const UserModeContext = createContext();

// var userID = "";
// const setUserID = (oldID, newID) => {
//   console.log("in user id");
//   userID.substr(0,0);
//   userID.concat(newID);
//   console.log(newID);
//   console.log(userID);
// }

// var userMode = "";
// const setUserMode = (oldMode, newMode) => {
//   console.log("In user mode");
//   userMode.substr(0, 0);
//   userMode.concat(newMode);
//   console.log(newMode);
//   console.log(userID);
// }

export const UserModeProvider = ({children}) => {
    const [userID, setUserID] = useState("");
    const [userMode, setUserMode] = useState("");
    return  (
        <UserModeContext.Provider value = {{userMode, setUserMode, userID, setUserID}}>
            {children}
        </UserModeContext.Provider>
    )
}
export const useUserModeValue = () => useContext(UserModeContext);

export const SessionContext = createContext();
const newDoc = randomString(19);
//temporarily use date as sessionID
const date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
const tempNewDoc = (month+"-"+day+"-"+year)

export const SessionProvider = ({ children }) => {

  const [mediaUrl, setMediaUrl] = useState("https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg");
  const [mediaDuration, setMediaDuration] = useState("MEDIA_BLOB");
  const [button, setButton] = useState(false);
  const [sessionID, setSessionID] = useState(tempNewDoc);
  const [vonageSessionID, setVonageSessionID] = useState("YOUR_SESSION_ID");
  const [token, setToken] = useState("YOUR_TOKEN");
  const [apiKey, setApiKey] = useState("YOUR_API_KEY");

  return (
    <SessionContext.Provider value={{sessionID, vonageSessionID, setVonageSessionID, token, setToken, apiKey, setApiKey, mediaUrl, setMediaUrl, mediaDuration, setMediaDuration, button, setButton}}>
      {children}
    </SessionContext.Provider>
  );
};
export const useSessionValue = () => useContext(SessionContext);

// const tempPins = usePins(newDoc);
export const PinsContext = createContext();
var pins = [];
export const PinsProvider = ({ children }) => {
  return (
    <PinsContext.Provider value={{pins}}>
      {children}
    </PinsContext.Provider>
  );
};
export const usePinsValue = () => useContext(PinsContext);
