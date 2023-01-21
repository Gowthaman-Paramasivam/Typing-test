const reducer = (state = { wpm: 0, error: 0, typed: 0, timer: 0 }, action) => {
  switch (action.type) {
    case "COUNTWPM":
      return { ...state, wpm: action.payload };
    case "COUNTERROR":
      return { ...state, error: action.payload };
    case "COUNTLETTERTYPED":
      return { ...state, typed: action.payload };
    case "TIMER":
      return { ...state, timer: action.payload };
    default:
      return state;
  }
}

export default reducer;