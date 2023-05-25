export const metadata = {
  title: "Caio - About",
  description: "Caio - Developer About",
};

export default function About() {
  return (
    <div className="max-w-screen-lg mx-auto my-10 px-5 sm:px-10">
      <div className="text-gray-700 dark:text-gray-200">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
          Hi there!
        </h1>
        <p className="text-base md:text-lg lg:text-xl py-1">
          <span>👋🏼 I&apos;m Caio, a Computer Engineering Student at </span>
          <a
            className="underline hover:text-primary"
            target="_blank"
            href="http://www.internationaloffice.unicamp.br/about-unicamp/"
          >
            Unicamp
          </a>
          , one of the best Universities in Latin America.
        </p>
        <p className="text-base md:text-lg lg:text-xl py-1">
          <span>🇧🇷 I&apos;m based in Campinas, Brazil.</span>
        </p>
        <p className="text-base md:text-lg lg:text-xl py-1">
          <span>💼 Now I&apos;m working at </span>
          <a
            className="underline hover:text-primary"
            target="_blank"
            href="https://www.gringo.com.vc/"
          >
            Gringo
          </a>{" "}
          as a Full-Stack developer.
        </p>
        <p className="text-base md:text-lg lg:text-xl py-1">
          <span>🚀 I worked at a junior company called </span>
          <a
            className="underline hover:text-primary"
            target="_blank"
            href="https://www.conpec.com.br/"
          >
            Conpec
          </a>{" "}
          as a Full-Stack developer.
        </p>
        <p className="text-base md:text-lg lg:text-xl py-1">
          <span>
            ✌🏻 Former Director of Education of a philanthropic association
            called{" "}
          </span>
          <a
            className="underline hover:text-primary"
            target="_blank"
            href="https://www.olamundos.com.br/"
          >
            Olá Mundos
          </a>
          .
        </p>
        <p className="text-base md:text-lg lg:text-xl py-1">
          <span>🏀 I play basketball and chess in my free time.</span>
        </p>
      </div>
    </div>
  );
}
