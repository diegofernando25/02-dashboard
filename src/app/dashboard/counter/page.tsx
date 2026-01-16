//import { CartCounter } from "@/app/shopping-cart";
import { CartCounter } from "../../shopping-cart";

//Hay que usar
export const metadata = {
  title: "Shopping Cart Counter",
  description: "A simple counter page",
};


export default function CounterPage() {


  return (

    <div className="flex flex-col items-center 
        justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
      
    </div>
  );
}