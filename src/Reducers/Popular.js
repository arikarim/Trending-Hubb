// Create Poplar Reducer

export const popularMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "POPULAR":
      return [...action.popular];
    default:
      return state;
  }
};
