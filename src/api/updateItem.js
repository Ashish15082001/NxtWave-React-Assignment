export async function updateItem() {
  try {
    const response = await fetch(
      "https://media-content.ccbp.in/website/react-assignment/resource/update.json"
    );

      
    if (response.status !== 200) throw new Error("Item creation failed.");
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return Promise.reject({ message: error.message });
  }
}
