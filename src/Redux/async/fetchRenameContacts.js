
export const fetchRenameContacts = async ({newName,newPhone,userId,contId}) => {
  const res = await fetch(process.env.REACT_APP_USER + '/contacts/new',{
    method: "PUT",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({newName,newPhone,userId,contId}),
  });
  const data = res.json();
  return data;
};
