import IconGithub from "@/assets/Github";
import IconLinkedin from "@/assets/Linkedin";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="wrapper mx-auto px-5 dark:bg-gray-900">
      <hr className="h-px mt-6 border-gray-300 max-w-screen-xl mx-auto" />
      <div className="md:py-5">
        <div className="flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row">
          <div className="logo flex items-center">
            <p className="text-sm text-gray-700 dark:text-gray-200 mx-1">
              Built with ♡ by Caio Fernando
            </p>
          </div>

          <div>
            <div className="wrapper flex flex-wrap text-base text-center m-3 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
              <Link
                aria-label="Github"
                className="social-link hover:text-primary mx-3"
                href="https://github.com/CaioFernandoDev"
                target="_blank"
              >
                <IconGithub />
              </Link>

              <Link
                aria-label="LinkedIn"
                className="social-link hover:text-primary mx-3"
                href="https://www.linkedin.com/in/caio-fernando-andrade/"
                target="_blank"
              >
                <IconLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
