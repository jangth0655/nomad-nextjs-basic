import NavBar from "./Navbar";

// children, react js가 제공하는 prop이다.
// 하나의 컴포넌트를 또다른 컴포넌트안에 넣을 때 쓸 수 있다.
// 너무 큰 _app.js 파일을 원하지 않기때문에 Layout을 만든 것.
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
