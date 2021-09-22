export const fetchAddContacts = async ({name,phone,id}) => {
  const res = await fetch(process.env.REACT_APP_USER + '/contacts/new',{
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({name,phone,id}),
  });
  const data = res.json();
  return data;
};
