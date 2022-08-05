export async function fetchResourceDetails({ resource_id }) {
  try {
    const response = await fetch(
      `https://media-content.ccbp.in/website/react-assignment/resource/${resource_id}.json`
    );

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return Response.reject();
  }
}
