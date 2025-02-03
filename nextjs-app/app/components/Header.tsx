import Link from "next/link";

export default function Header({ leftNav, rightNav }) {
  return (
    <header className="fixed z-50 h-24 inset-0 bg-white/80 flex items-center backdrop-blur-lg">
      <div className="container py-6 sm:px-6">
        <div className="flex items-center justify-between gap-5">


          <nav className="">
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
            >
              <li>
                <Link className="" href="/online">
                  Online
                </Link>
              </li>
              <li>
                <Link href="/offline" className="">
                  Offline
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}
