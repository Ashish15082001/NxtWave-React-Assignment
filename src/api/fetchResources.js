export async function fetchResources() {
  try {
    const response = await fetch(
      "https://media-content.ccbp.in/website/react-assignment/resources.json"
    );

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {}
}
