export const fetchLoginUser = async (payload) => {
  const { login, password } = payload;
  const res = await fetch(process.env.REACT_APP_USER + '/login', {
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({ login,password }),
  });
  const data = await res.json();
  return data;
};
