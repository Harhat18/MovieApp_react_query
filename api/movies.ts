export const fetchTopRatedMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2FiMTdmM2U2ZjIxMmJlMjZkOTFjYTdjNmU4ZDY4MyIsInN1YiI6IjYzYWZiOTIwMjdkOWNjMDBjODY5MWFjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WYL4obzMAPynaStT9x-8SQ3qclrrvC8hzRaXKZaktaI",
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }
  const json = await res.json();
  return json.results;
};
