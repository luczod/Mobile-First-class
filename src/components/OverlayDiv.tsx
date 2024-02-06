import { ReactNode } from 'react';

export function OverlayCard({ children }: { children: ReactNode }) {
  return <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">{children}</div>;
}

export function OverlayScreen() {
  return <div className="bg-black/70 fixed w-full h-screen z-10 top-0 left-0"></div>;
}
