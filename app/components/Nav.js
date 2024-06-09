"use client"
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="sticky top-0 p-4">
      <div className="mx-auto flex justify-between">
        <Link href="/" className="text-white">Home</Link>
        <Link href="/about" className="text-white">About</Link>
        <Link href="/projects" className="text-white">Projects</Link>
        <Link href="/contact" className="text-white">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
