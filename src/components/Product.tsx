import { TData } from '../types';

export function Product(props: Omit<TData, 'id'>) {
  return (
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-[13rem] object-cover rounded-t-lg"
      />
      <small className="text-zinc-500 capitalize px-2">{props.category}</small>
      <div className="flex justify-between px-2 pb-2">
        <p className="font-bold">{props.name}</p>
        <p>
          <span className="bg-orange-500 text-white p-1 rounded-full">{props.price}</span>
        </p>
      </div>
    </div>
  );
}
