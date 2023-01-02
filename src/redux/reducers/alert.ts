import { ALERT } from "src/redux/types";

const initialState = {
  type: null,
  open: false,
  message: null,
  redirect: false,
};

export default function AlertReducer(state = initialState, action: any) {
  switch (action.type) {
    case ALERT.SUCCESS:
      return {
        ...state,
        type: "success",
        open: true,
        message: action.payload,
      };

    case ALERT.FAILURE:
      return {
        ...state,
        type: "error",
        open: true,
        message: action.payload,
      };
    case ALERT.INFO:
      return {
        ...state,
        type: "info",
        open: true,
        message: action.payload,
      };
    case ALERT.CLEAR:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
}
