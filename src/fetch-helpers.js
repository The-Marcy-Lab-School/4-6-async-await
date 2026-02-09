export const getUsers = () => {
  const promiseToGetResponse = fetch('https://jsonplaceholder.typicode.com/users')

  return promiseToGetResponse
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }
      const promiseToExtractData = response.json();
    })
    .then((data) => {
      // print out the data to see its structure
      console.log(data); // <-- undefined!

      // Here, we're trying to choose the data for each user to return
      const users = data.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email
      }));

      return users;
    })
    .catch((error) => {
      // TypeError: Cannot read properties of undefined (reading 'map')
      console.log("Error caught!", error);
      return null;
    })
};