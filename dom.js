const dom = document.querySelector("#mood");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const type = button.id;
    store.dispatch({type});
    const state = store.getState();
    dom.innerText = state.mood;
  })
})