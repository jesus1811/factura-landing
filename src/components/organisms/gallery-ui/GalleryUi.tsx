import { Button, Title } from "@/components/atoms";
import { PHONE } from "@/config";
import { MouseEventHandler } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
export function GalleryUi() {
  const sendMessage = () => {
    const message = `Deseo solicitar el sistema Factura Pro`;
    window.open(`https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(message)}`, "_blank");
  };

  const images: ReactImageGalleryItem[] = [
    {
      original: "/shops.png",
      thumbnail: "/shops.png",
    },
    {
      original: "/shops.png",
      thumbnail: "/shops.png",
    },
    {
      original: "/shops.png",
      thumbnail: "/shops.png",
    },
  ];
  return (
    <section className="w-full min-h-screen bg-neutral-500 py-8 flex  items-center">
      <div className="w-full mx-auto max-w-[75rem] px-6 xl:px-0">
        <Title data-aos="fade-up" className="text-center">
          <span className="text-primary-500">Panel de control</span> con un diseño <span className="text-primary-500">intuitivo</span> y simple que <span className="text-primary-500">facilita</span>{" "}
          su uso
        </Title>
        <div className="w-full mt-6">
          <ImageGallery
            items={images}
            autoPlay={true}
            showPlayButton={false} // Ocultar botón de reproducción automática
            renderLeftNav={(onClick) => (
              <button
                onClick={onClick}
                className="top-[50%] absolute  z-10 left-0 translate-y-[-50%] hover:scale-125 cursor-pointer transition-all duration-[.4s] stroke-white hover:stroke-primary-500"
              >
                <svg className="w-8 xl:w-[60px] aspect-square " xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            )}
            renderRightNav={(onClick) => (
              <button
                onClick={onClick}
                className="top-[50%] absolute z-10 right-0 translate-y-[-50%]  hover:scale-125 cursor-pointer transition-all duration-[.4s] stroke-white hover:stroke-primary-500"
              >
                <svg className="w-8 xl:w-[60px] aspect-square " xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            )}
          />
        </div>
        <div className="flex gap-5 w-full items-center justify-center mt-5">
          <Button variant="outline" onClick={() => sendMessage()}>
            Solicitar sistema
          </Button>
          <Button onClick={() => window.open("https://factura-pro.vercel.app", "_blank")}>Prueba la demo</Button>
        </div>
      </div>
    </section>
  );
}

export default GalleryUi;
