export const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }
    // start the async process of reading the ReadableStream and return a promise
    const responseData = await response.json();

    return { data: responseData, error: null };
    // return responseData;
  }

  catch (error) { // prevent the program from crashing and handle the error
    console.log(`Error: ${error.message}`);
    return { data: null, error: error };
    // return null;
  }
}