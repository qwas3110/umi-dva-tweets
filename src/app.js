const logger = store => next => action => {
  console.group(action.type);
    console.log("Action:", action);
    const result = next(action);
    console.log("State:", store.getState());
  console.groupEnd();
  return result;
};


export const dva = {
  config: {
    onAction: logger,
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
