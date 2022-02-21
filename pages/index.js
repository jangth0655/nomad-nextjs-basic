import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div>
      <Seo title="Home" />

      {results?.map((movie) => (
        <div
          key={movie.id}
          onClick={() => onClick(movie.id, movie.original_title)}
          style={{ width: "30%" }}
        >
          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            <a>
              <h4>{movie.title}</h4>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

// 어떤 코드를 작성하더라도 그것은 server로 들어가게 될것이다.
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
