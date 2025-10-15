import { ROUTES } from "@/definitions";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found ">
      <h1>404 Page Not Found</h1>

      <p>
        Return to <Link href={ROUTES.STORIES}>Home</Link>
      </p>
    </div>
  );
}
