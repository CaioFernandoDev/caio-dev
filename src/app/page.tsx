import Hero from "@/components/Hero";

export const metadata = {
  title: "Caio - Developer",
  description: "Caio - Developer Home",
};

export default function Home() {
  return (
    <div className="wrapper-small md:px-10">
      <div className="h-auto mt-5">
        <Hero />
      </div>
    </div>
  );
}
