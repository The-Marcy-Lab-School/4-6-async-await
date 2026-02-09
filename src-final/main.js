import { renderError, renderUsers } from "./dom-helpers";
import { getUsers } from "./fetch-helpers";

const main = async () => {
  const results = await getUsers();
  if (results.error) {
    console.log('error:');
    console.log(results.error);
    renderError(results.error.message);
    renderUsers([]);
  } else {
    console.log('data:');
    console.log(results.data);
    renderError();
    renderUsers(results.data);
  }

  // getUsers().then(console.log)

  // getUsers().then((data) => {
  //   console.log(data);
  // })
}

main();



fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((response) => {
    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }
    const readingPromise = response.json();
    return readingPromise;
  })
  .then((data) => {
    console.log(data); // prints undefined
  })
  .catch((error) => {
    console.log("Error caught!");
    console.log(error.message);
  })

