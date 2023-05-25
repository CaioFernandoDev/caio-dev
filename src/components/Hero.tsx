import TechStack from "./TechStack";

export default function Hero() {
  return (
    <div className="flex h-full text-center text-gray-700 dark:text-gray-200 m-8">
      <div className="m-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          <span className="font-normal dark:text-gray-300"> Hey, I am </span>
          Caio Fernando
        </h2>
        <h3 className="font-bold text-primary dark:text-primary text-2xl md:text-3xl lg:text-4xl">
          a Computer Engineering Student
        </h3>
        <p className="text-lg lg:text-xl font-semibold">
          and a passionate Full Stack Developer from Brazil who loves to build
          and deliver quality products.
        </p>
        <div className="mt-5">
          <TechStack />
        </div>
      </div>
    </div>
  );
}
