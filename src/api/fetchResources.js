export async function fetchResources() {
  try {
    const response = await fetch(
      "https://media-content.ccbp.in/website/react-assignment/resources.json"
    );
    if (response.status !== 200) throw new Error("Item creation failed.");
    // console.log(response);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return Promise.reject({ message: error.message });
  }
}
