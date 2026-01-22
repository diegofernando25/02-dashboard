'use client';
import { useAppDispatch, useAppSelector } from '@/src/store';
import { addOne, minusOne, initCounterState  } from '@/src/store/counter/counterSlice';
import { count } from 'console';
import { get } from 'http';
import { use, useEffect } from 'react';

interface Props{
    value?: number;
}

export interface CounterResponse {
    method: string;
    count:  number;
}


const getApiCounter = async() : Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then(res => res.json());

    return data as CounterResponse;
}



const CartCounter = ({ value = 0 } : Props) => {
    //const [count, setCount] = useState(value)
    
    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch();

    /*useEffect(() => {
        dispatch(initCounterState(value));
    }, [value, dispatch]);
    */
    useEffect(() => {
        getApiCounter()
            .then( ({count}) => dispatch(initCounterState(count)));
    }, [dispatch, count]);

    return (       
    <>
        <span className="text-4xl font-bold mb-4">{ count }</span>
            <div className="flex">
                <button 
                onClick={() => dispatch(addOne())}
                className="flex items-center
                    justify-center p-2 rounded-xl bg-gray-900
                    text-white hover:bg-gray-700 transition-all w-[100px]
                    mr-2 font-bold">
                +1
                </button>
                <button 
                onClick={() => dispatch(minusOne())}
                className="flex items-center
                    justify-center p-2 rounded-xl bg-gray-900
                    text-white hover:bg-gray-700 transition-all w-[100px]
                    mr-2 font-bold">
                -1
                </button>
            </div>
    </>
    )
}

export default CartCounter
