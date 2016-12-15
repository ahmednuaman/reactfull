export default (type) =>
  (store) =>
    (data) => store.dispatch({
      type,
      data
    })
