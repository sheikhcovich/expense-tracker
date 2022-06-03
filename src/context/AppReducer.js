export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD":
      return {
        ...state,
        transactions: Array.isArray(action.payload)
          ? [...action.payload]
          : [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};
