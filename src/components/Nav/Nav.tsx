import { Logo } from "$components/Global";
import { UserNav } from "$components/ui/UserNav";
import { useAuth } from "$hooks";
import Link from "next/link";

export function Nav() {
  const { currentUser } = useAuth();

  return (
    <nav className="border-b border-slate-500 bg-transparent  shadow ">
      <div className="container flex items-center justify-between py-2">
        <Logo />

        {currentUser ? (
          <UserNav />
        ) : (
          <Link
            href={"/signup"}
            className="transform rounded-md bg-blue-600 px-6 py-2 text-xs font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Signup
          </Link>
        )}
      </div>
    </nav>
  );
}
