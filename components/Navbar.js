import Link from "next/link";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";

export default function NavBar() {
  // Router와 연결해줄 수 있는것
  const router = useRouter();

  return (
    <nav>
      {/* 클라이언트 사이드 네비게이션을 제공해준다. Link는 단지 href을 위한 것  */}
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? styles.active : ""}>
          about
        </a>
      </Link>
    </nav>
  );
}
