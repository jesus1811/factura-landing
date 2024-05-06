import { Button } from "@/components/atoms";

export function GalleryUi() {
  return (
    <section className="w-full min-h-screen bg-neutral-500 py-8 flex  items-center">
      <div className="w-full mx-auto max-w-[75rem] px-6 xl:px-0">
        <h2 data-aos="fade-up" className="text-[3.75rem] text-center text-white leading-[70px]">
          <span className="text-primary-500">Panel de control</span> con un diseño <span className="text-primary-500">intuitivo</span> y simple que <span className="text-primary-500">facilita</span>{" "}
          su uso
        </h2>
        <figure className="flex-1 h-auto mt-5">
          <img src="/shops.png" alt="" className="w-full h-full rounded-xl" />
        </figure>
        <div className="flex gap-5 w-full items-center justify-center mt-5">
          <Button variant="outline">Solicitar sistema</Button>
          <Button>Prueba la demo</Button>
        </div>
      </div>
    </section>
  );
}

export default GalleryUi;
