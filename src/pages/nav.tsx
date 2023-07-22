import Link from "../Link";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/portals">portals</Link>
      </ul>
    </nav>
  );
};

export default Nav;
