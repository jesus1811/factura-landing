import { Title } from "@/components/atoms";

export function Hero() {
  return (
    <section className="w-full min-h-screen bg-neutral-600 py-8 flex  items-center">
      <div className="w-full mx-auto max-w-[75rem] px-6 xl:px-0 flex flex-col xl:flex-row justify-center items-center ">
        <div className="flex flex-col gap-5 flex-1">
          <Title className="text-center">
            Facturación electrónica
            <span className="text-primary-500"> para emprendedores</span>
          </Title>
          <p data-aos="fade-up" className="text-xl text-center text-white">
            con sistema de inventario e impresion de facturas y boletas
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
