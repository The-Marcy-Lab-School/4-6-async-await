import { renderError, renderUsers } from "./dom-helpers";
import { getUsers } from "./fetch-helpers";

const main = () => {
  // how do we get the data from getUsers()? What does it return?
  getUsers();

}

main();
