import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// reducer(current state, action)
const countModifier = (count = 0, action) => { 
  switch (action.type) {
    case ADD :
      return count + 1;
    case MINUS :
      return count - 1;
    default :
      return count;
  }
};

// create store
const countStore = createStore(countModifier);

// store.dispatch
const onChange = () => {
  number.innerText = countStore.getState();
};

// store.subscribe
countStore.subscribe(onChange);

// store.dispatch
const handleAdd = () => {
  countStore.dispatch({type : ADD});// dispatch type only objects
};

// store.dispatch
const handleMinus = () => {
  countStore.dispatch({type : MINUS});
};

// Event
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

