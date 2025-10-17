import fetchCatFact from "../utils/apiClient.js";
const email = process.env.EMAIL;
const name = process.env.NAME;
const stack = process.env.STACK;

export async function fetchUser(req, res) {
  try {
    const fact = await fetchCatFact();
    const currentTime = new Date().toISOString();

    res.status(200).json({
      status: "success",
      user: {
        email: email,
        name: name,
        stack: stack,
      },
      timestamp: currentTime,
      fact: fact,
    });
  } catch (error) {
    next(error);
  }
}
