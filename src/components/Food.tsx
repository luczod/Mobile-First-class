import { MouseEventHandler, useState } from 'react';
import { data } from '../../API/_data';
import { Product } from './Product';
import { TData } from '../types';
import { Category } from './Category';

export function Food() {
  const [foods, setFoods] = useState<TData[]>(data);

  //   Filter Type
  const filterType = (category: string) => {
    setFoods(data.filter((item: TData) => item.category.toLowerCase().includes(category)));
  };

  //   Filter by price
  const filterPrice = (price: string) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      }),
    );
  };
  return (
    <main className="max-w-[103rem] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filer Type</p>
          <div className="flex justify-start md:justify-between flex-wrap">
            <ButtonFilter fn={() => setFoods(data)} text="All" />
            <ButtonFilter fn={() => filterType('burger')} text="Burger" />
            <ButtonFilter fn={() => filterType('pizza')} text="Pizza" />
            <ButtonFilter fn={() => filterType('salad')} text="Salads" />
            <ButtonFilter fn={() => filterType('chicken')} text="Chicken" />
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-start md:justify-between flex-wrap">
            <ButtonFilter fn={() => filterPrice('$')} text="$" />
            <ButtonFilter fn={() => filterPrice('$$')} text="$$" />
            <ButtonFilter fn={() => filterPrice('$$$')} text="$$$" />
            <ButtonFilter fn={() => filterPrice('$$$$')} text="$$$$" />
          </div>
        </div>
      </div>
      {/* Displey Food */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </section>
      <Category />
    </main>
  );
}

function ButtonFilter({ text, fn }: { text: string; fn?: () => void }) {
  return (
    <button
      onClick={fn}
      className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white"
    >
      {text}
    </button>
  );
}
