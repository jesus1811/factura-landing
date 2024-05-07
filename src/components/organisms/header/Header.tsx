import Link from "next/link";
import { MOCK } from "./mock";
import { Button } from "@/components/atoms";

export function Header() {
  return (
    <section className="w-full bg-[#0B0B0B] sticky top-0 ">
      <div className="w-full mx-auto max-w-[75rem] px-6 xl:px-0 h-[4.375rem] flex items-center justify-between">
        <input type="checkbox" className="hidden" />
        <h1 className="text-3xl text-primary-500 font-semibold">Factura Pro</h1>
        <label htmlFor="check" className="w-full max-w-[2.8125rem] hidden">
          <img src="menu.svg" alt="menu" className="w-full" />
        </label>
        <nav className="flex items-center gap-4">
          {MOCK?.map((mockItem) => (
            <Link key={mockItem?.label} href={mockItem?.href} className="hover:underline">
              {mockItem?.label}
            </Link>
          ))}
          <Button onClick={() => window.open("https://factura-pro.vercel.app", "_blank")}>Probar la demo</Button>
        </nav>
      </div>
    </section>
  );
}

export default Header;
