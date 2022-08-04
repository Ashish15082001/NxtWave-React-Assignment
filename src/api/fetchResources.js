export async function fetchResources() {
  try {
    const response = await fetch(
      "https://media-content.ccbp.in/website/react-assignment/resources.json"
    );

    console.log(response);
    const responseData = await response.json();
    return responseData;
  } catch (error) {}
}
