export async function fetchResourceDetails({ resource_id }) {
  try {
    const response = await fetch(
      `https://media-content.ccbp.in/website/react-assignment/resource/${resource_id}.json`
    );
    if (response.status !== 200) throw new Error("Item creation failed.");
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return Promise.reject({ message: error.message });
  }
}
