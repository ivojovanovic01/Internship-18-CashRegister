const LOAD_CASHIER = "LOAD_CASHIER";

const initialState = {
  cashier: {},
  cashRegister: {}
};

export const loadCashier = () => dispatch => {
  return dispatch({
    type: LOAD_CASHIER,
    cashier
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CASHIER:
      return {
        ...state,
        cashier: action.cashier
      };
    default:
      return state;
  }
};

export default reducer;
