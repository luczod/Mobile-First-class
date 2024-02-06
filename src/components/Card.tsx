import { THeadlineData } from '../types';
import { OverlayCard } from './OverlayDiv';

export function Card({ title, subtitle, image }: Partial<THeadlineData>) {
  return (
    <div className="'rounded-xl relative">
      <OverlayCard>
        <p className="font-bold text-2xl px-2 pt-4">{title}</p>
        <p className="px-2">{subtitle}</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">
          Order Now
        </button>
      </OverlayCard>
      <img
        className="max-h-[10rem] md:max-h-[12rem] w-full object-cover rounded-xl"
        src={image}
        alt="/"
      />
    </div>
  );
}
