const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log({ data });
  } catch (e) {
    console.log(e);
  }
};

export default fetchData;
