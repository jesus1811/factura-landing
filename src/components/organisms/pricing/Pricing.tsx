import { Button, Title } from "@/components/atoms";
import { MOCK_PRINCING } from "./mock";
import { PHONE } from "@/config";

export function Pricing() {
  const sendMessage = (pricing: { title: string; priceText: string }) => {
    const message = `Deseo el sistema Factura Pro con el plan ${pricing?.title} de ${pricing?.priceText}`;
    window.open(`https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="w-full min-h-screen bg-[#282C34] py-8 flex  items-center">
      <div className="w-full mx-auto max-w-[75rem] px-6 xl:px-0">
        <Title data-aos="fade-up" className="text-center">
          Elige el plan que se <span className="text-primary-500">adapta</span> a tu nesesidad
        </Title>
        <div className="grid xl:[grid-template-columns:repeat(auto-fit,minmax(18.75rem,1fr))] [grid-template-columns:repeat(auto-fit,minmax(17rem,1fr))] gap-7 w-full justify-items-center  mt-12">
          {MOCK_PRINCING?.map((princingItem) => (
            <article key={princingItem?.title} className="border-[1px] border-primary-500 gap-3 flex flex-col justify-between rounded-xl px-5 py-7 w-full">
              <div className="w-full flex flex-col gap-3">
                <Title className="!text-4xl text-center !text-primary-500">{princingItem?.title}</Title>
                <h2 className="text-3xl text-white text-center">{princingItem?.priceText}</h2>
                <p className="text-white text-center">{princingItem?.subTitle}</p>
                <p className="text-center text-gray-400">
                  * Cada mes te sale a{" "}
                  {princingItem?.priceForMount !== 20 && (
                    <del className="no-underline relative before:absolute before:left-0 before:top-[50%] before:block before:h-[2px] before:w-full before:bg-current before:rotate-[-24deg]">S/20</del>
                  )}{" "}
                  S/
                  {princingItem?.priceForMount}
                </p>
              </div>
              <Button onClick={() => sendMessage({ title: princingItem?.title, priceText: princingItem?.priceText })} isFull>
                {princingItem?.buttonText}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
