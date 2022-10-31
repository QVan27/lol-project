const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data1 = await response.json();
    return data1;
  } catch (e) {
    console.log(e);
  }
};

export default fetchData;

