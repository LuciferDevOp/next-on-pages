
export default async function page({params}) {
  // const response = await fetch(`https://mybot-md2-default-rtdb.firebaseio.com/${params}`);
  const data = {message : "Hello World"};
  return res.status(200).json(data);
}