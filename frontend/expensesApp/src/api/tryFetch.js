const getMovies = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/expenses');
    const json = await response.json();
    console.log(json)
    // setData(json.movies);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

export default getMovies;