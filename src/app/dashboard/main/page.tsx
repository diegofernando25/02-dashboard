import { SimpleWidget } from "@/src/components";

export default function MainPage() {
  return (
    <div className="flex flex-col text-black p-2 ">
      <h1 className="font-bold mt-2 text-xl">
        Hello Diego Fernando
      </h1>
      <span className="text-8xl ">
        Información general
      </span>
      <div className="flex flex-wrap p-2 my-2 px-2 items-center">
        <SimpleWidget/>
      </div>
    </div>
  );
}