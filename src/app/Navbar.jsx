import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/brands">Brands</Link>
      </nav>
    </>
  );
}

export default Navbar;
