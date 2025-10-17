import axios from "axios";

export default async function fetchCatFact() {
  try {
    const result = await axios.get("https://catfact.ninja/fact", {
      timeout: 10000,
    });
    return result.data.fact;
  } catch (error) {
    throw error;
  }
}
