export function Hero() {
  return (
    <section className="w-full min-h-screen bg-neutral-600 py-8 flex  items-center">
      <div className="w-full mx-auto max-w-[75rem] px-6 xl:px-0 flex justify-center items-center ">
        <div className="flex flex-col gap-5 flex-1">
          <h2 data-aos="fade-up" className="text-[3.75rem] text-center text-white leading-[70px]">
            Facturación electrónica
            <span className="text-primary-500"> para emprendedores</span>
          </h2>
          <p data-aos="fade-up" className="text-xl text-center text-white">
            con sistema de inventario e impresion de facturas / bolettas
          </p>
        </div>
        <figure className="flex-1 h-auto">
          <img src="/banner.svg" alt="" className="w-full h-full" />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
