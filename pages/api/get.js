
import axios from 'axios';
export const runtime = 'edge';

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Missing id parameter' });
  }

  try {
    const response = await axios.get(`https://mybot-md2-default-rtdb.firebaseio.com/${id}`);
    const data = response.data;
    return res.status(200).json(data);
  
} catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch data' });
  }
}
