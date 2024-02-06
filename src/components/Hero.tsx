export function Hero() {
  return (
    <section className="max-w-[103rem]  mx-auto p-4">
      <div className="'max-h-[31rem] relative ">
        {/* Overlay */}
        <div className="absolute w-full h-full rounded-xl text-gray-200 max-h-[31rem] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Foods </span>Delivered
          </h1>
        </div>
        <img
          className="w-full rounded-xl max-h-[31rem] object-cover"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="hamburguer"
        />
      </div>
    </section>
  );
}
// pexels image bank
