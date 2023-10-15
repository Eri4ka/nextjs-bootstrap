export async function request(...params) {
  try {
    const response = await fetch(...params);

    if (!response.ok) {
      throw response;
    }

    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
}
