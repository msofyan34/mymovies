import MWatchNow from "@/components/MWatchNow";

async function getMovieData() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=3bf5ba4a59af8d8fd84c20b853bee702&language=en-US&page=1"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const wnMovie = await getMovieData();

  const linkImage = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="container">
      <section>
        <div className="pb-5 pt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wnMovie.results.map((data: any) => (
            <div key={data.id}>
              <MWatchNow
                id={data.id}
                title={data.title}
                rdate={data.release_date}
                images={`${linkImage}/${data.poster_path}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
