const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const data = rawData.json();

  return data;
};

export default fetchJson;
