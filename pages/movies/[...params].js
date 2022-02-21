import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const route = useRouter();
  const [title, id] = params || [];
  console.log(title, id);
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  console.log(params);
  return {
    props: { params },
  };
}
