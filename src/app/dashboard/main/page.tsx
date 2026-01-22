import { SimpleWidget, WidgetsGrid } from "@/src/components";

export const metadata = {
  title: 'Admin Dashboard - Home',
  description: 'Home Page',
}

export default function MainPage() {
  return (
    <div className="flex flex-col items-center text-black p-2 ">
      <h1 className="font-bold mt-2 text-5xl">
        Hello Diego Fernando
      </h1>
      <span className="text-3xl ">
        Información general
      </span>
      <WidgetsGrid/>
    </div>
  );
}