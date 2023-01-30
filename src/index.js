import bugAdded, { bugRemoved, bugResolved } from "./actions";
import store from "./store";
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
})

console.log(store.getState());

store.dispatch(bugAdded("Bug1 added"));
store.dispatch(bugAdded("Bug2 added"));
store.dispatch(bugAdded("Bug3 added"));
store.dispatch(bugAdded("Bug4 added"));
store.dispatch(bugRemoved(4));
store.dispatch(bugResolved(1));
store.dispatch(bugResolved(2));
unsubscribe();

