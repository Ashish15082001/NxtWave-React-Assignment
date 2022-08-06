export async function createItem() {
  try {
    const response = await fetch(
      `https://media-content.ccbp.in/website/react-assignment/add_resource.json`
    );
    if (response.status !== 200) throw new Error("Item creation failed.");

    return { message: "Item created successfully" };
  } catch (error) {
    return Promise.reject({ message: error.message });
  }
}
