import React, { ReactElement } from "react";
import Link from "next/link";

function NavBar(): ReactElement {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="about">About</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/todos">todos</Link>
    </div>
  );
}

export default NavBar;
