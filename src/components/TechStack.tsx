import IconDoubleDown from "@/assets/DoubleDown";
import IconFirebase from "@/assets/Firebase";
import IconFlutter from "@/assets/Flutter";
import IconGit from "@/assets/Git";
import IconJavascript from "@/assets/Javascript";
import IconPython from "@/assets/Python";
import IconReact from "@/assets/React";

export default function TechStack() {
  return (
    <div className="mt-16 md:mt-24">
      <div className="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300">
        <h2 className="text-center">What I know</h2>
        <IconDoubleDown />
      </div>

      <div className="flex flex-wrap justify-center items-center text-4xl my-5 gap-4 md:gap-8">
        <IconReact />
        <IconJavascript />
        <IconGit />
        <IconFlutter />
        <IconFirebase />
        <IconPython />
      </div>
    </div>
  );
}
