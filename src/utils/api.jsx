

const API_URL = "http://localhost:3000/api"; // Backend URL

export const fetchStores = async () => {
  const response = await fetch(`${"http://localhost:3000/api"}/stores`);
  return response.json();
};

export const registerUser = async (userData) => {
  const response = await fetch(`${"http://localhost:3000/api"}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};
