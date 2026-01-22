'use client';

import { IoCart, IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/src/store";
import { use } from "react";



const WidgetsGrid = () => {
    const isCart = useAppSelector(state => state.counter.count);
  return (
    <div>
      <div className="flex flex-wrap p-2 my-2 px-2 items-center">
        <SimpleWidget
          subTitle="Productos en el carrito"
          title= {isCart.toString()}
          label="Contador"
          icon={<IoCartOutline size={40} className="text-blue-400" />}
          href="/dashboard/counter"
        />
      </div>
    </div>
  )
}

export default WidgetsGrid
