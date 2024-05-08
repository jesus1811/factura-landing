import { Title } from "@/components/atoms";

export function Reason() {
  return (
    <section className="w-full min-h-screen bg-neutral-600 py-8 flex  items-center">
      <div className="w-full mx-auto max-w-[75rem] px-6 xl:px-0">
        <Title data-aos="fade-up" className="text-center mb-8">
          3 Razones para elegir <span className="text-primary-500">Factura Pro</span>
        </Title>
        <div className="flex flex-col w-full gap-5">
          <div className="flex w-full flex-col xl:flex-row justify-between items-center">
            <div className="flex flex-col gap-4 w-full max-w-[550px]">
              <Title className="text-center">
                Factura y boletas <span className="text-primary-500">ilimitadas</span>
              </Title>
              <p className="text-base xl:text-xl text-center text-white">Realiza facturas y boletas sin limite y sin costos extras</p>
            </div>
            <figure className="w-full max-w-[27.5rem]">
              <img src="/invoice.svg" alt="" className="w-full h-full" />
            </figure>
          </div>
          <div className="flex  flex-col xl:flex-row-reverse w-full justify-between items-center">
            <div className="flex flex-col gap-4 w-full max-w-[550px]">
              <Title className="text-center">
                Tu tienes el <span className="text-primary-500">control</span>
              </Title>
              <p className="text-base xl:text-xl text-center text-white">
                Cambia el nombre del negocio , cambia el color a tu gusto, añade mas productos o facturas , anula facturas y/o boletas y mas
              </p>
            </div>
            <figure className="w-full max-w-[27.5rem]">
              <img src="/settings.svg" alt="" className="w-full h-full" />
            </figure>
          </div>
          <div className="flex w-full flex-col xl:flex-row justify-between items-center">
            <div className="flex flex-col gap-4 w-full max-w-[550px]">
              <Title className="text-center">
                Reportes y estadisticas con <span className="text-primary-500">graficos</span>
              </Title>
              <p className="text-base xl:text-xl text-center text-white">Prodras observar el progreso de tus ventas mendiantes graficos</p>
            </div>
            <figure className="w-full max-w-[27.5rem]">
              <img src="/reports.svg" alt="" className="w-full h-full" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reason;
