export const fetchInitContacts = async (id) => {
  const res = await fetch(process.env.REACT_APP_USER + '/contacts',{
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({id}),
  });
  const data = res.json();
  return data;
};
