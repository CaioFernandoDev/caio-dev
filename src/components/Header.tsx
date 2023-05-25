import Link from "next/link";
import ColorSwitcher from "./ColorSwitcher";

export const linkStyle =
  "@apply ml-5 font-medium text-center text-lg sm:text-xl text-gray-700 dark:text-gray-200 dark:hover:text-primary hover:text-primary m-auto;";

export default function Header() {
  return (
    <div>
      <nav className="wrapper py-6 dark:bg-gray-900">
        <div className="px-5 sm:px-10 flex justify-between items-center">
          <Link href="/">
            <h1 className="font-normal text-center text-4xl text-gray-700 dark:text-gray-200 dark:hover:text-primary hover:text-primary m-auto font-caveat">
              Caio Fernando
            </h1>
          </Link>

          <div className="flex flex-row items-center">
            <Link className={linkStyle} href="/about">
              About
            </Link>
            <ColorSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
}
