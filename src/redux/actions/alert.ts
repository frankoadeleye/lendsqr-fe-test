import { ALERT } from "src/redux/types";

export const AlertSuccess = (message: string) => {
  return {
    type: ALERT.SUCCESS,
    payload: message,
  };
};

export const AlertInfo = (message: string) => {
  return {
    type: ALERT.INFO,
    payload: message,
  };
};

export const AlertFailure = (message: any) => {
  return {
    type: ALERT.FAILURE,
    payload: message,
  };
};

export const AlertClear = () => {
  return {
    type: ALERT.CLEAR,
  };
};

const AlertActions = {
  clear: AlertClear,
  info: AlertInfo,
  success: AlertSuccess,
  failure: AlertFailure,
};

export default AlertActions;
