export const useLocalStorage = (state) => {
  try {
    if (localStorage.getItem("items") === null && state.transactions !== [])
      localStorage.setItem("items", JSON.stringify(state.transactions));
  } catch (e) {
    console.log(e);
  }

  const update = () => {
    try {
      localStorage.removeItem("items");
      localStorage.setItem("items", JSON.stringify(state.transactions));
    } catch (e) {
      return e.message;
    }
  };
  return [JSON.parse(localStorage.getItem("items")), update];
};
