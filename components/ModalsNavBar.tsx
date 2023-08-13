import React, { ReactElement } from "react";
import Link from "next/link";

function ModalsNavBar(): ReactElement {
  return (
    <div>
      <Link href="/modals/popstate">popstate</Link>
      <Link href="/modals/query">query</Link>
    </div>
  );
}

export default ModalsNavBar;
