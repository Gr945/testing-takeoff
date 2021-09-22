export const fetchDeleteContacts = async ({contId,userId}) => {
  const res = await fetch(process.env.REACT_APP_USER + '/contacts/new', {
    method: "DELETE",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({contId,userId}),
  });
  const data = await res.json();
  return data;
};
