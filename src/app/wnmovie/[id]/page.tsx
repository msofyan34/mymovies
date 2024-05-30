import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Genre {
  id: number;
  name: string;
}

interface Production {
  iso_3166_1: string;
  name: string;
}

interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

async function getDetailMovie(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=3bf5ba4a59af8d8fd84c20b853bee702&language=en-US`
  );
  return res.json();
}

async function DetailMovie({ params }: { params: { id: string } }) {
  const movie = await getDetailMovie(params.id);
  const linkImage = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="container mx-auto p-6">
      <Card className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-2 text-2xl font-semibold">Detail Movie</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="rounded bg-gray-100 p-4">
            <Image
              src={`${linkImage}/${movie.poster_path}`}
              alt={movie.name}
              width={400}
              height={400}
              className="w-full h-full"
            />
          </Card>
          <Card className="rounded bg-gray-100 p-4">
            <h3 className="text-xl font-bold">Movie Name</h3>
            <p>{movie.title}</p>
            <h3 className="mt-5 text-xl font-bold">Overview</h3>
            <p className="mb-4 text-gray-700">{movie.overview}</p>
            <h3 className="mt-5 text-xl font-bold">Tagline</h3>
            <p>{movie.tagline}</p>
            <h3 className="mt-5 text-xl font-bold">Production Countries</h3>
            <p>
              {movie.production_countries
                .map((production: Production) => production.name)
                .join(", ")}
            </p>
            <h3 className="mt-5 text-xl font-bold">Language</h3>
            <p>
              {movie.spoken_languages
                .map((language: Language) => language.name)
                .join(", ")}
            </p>
            <h3 className="mt-5 text-xl font-bold">Genres</h3>
            <p>{movie.genres.map((genre: Genre) => genre.name).join(", ")}</p>
            <h3 className="mt-5 text-xl font-bold">Status</h3>
            <p>{movie.status}</p>
            <h3 className="mt-5 text-xl font-bold">Release Date</h3>
            <p>{movie.release_date}</p>
            <h3 className="mt-5 text-xl font-bold">Homepage</h3>
            <Link href={movie.homepage}>{movie.homepage}</Link>
          </Card>
        </div>
        <Link href={"/wnmovie"}>
          <Button className="mt-4">Previous</Button>
        </Link>
      </Card>
    </div>
  );
}

export default DetailMovie;
