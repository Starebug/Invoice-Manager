import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/hero.png";
import CustomIcon from "./CustomBackground";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 lg:py-20">
      <div className="text-center">
        <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
          Introducing InvoiceManager 1.0
        </span>
        <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter">
          Invoicing made{" "}
          <span className="block -mt-2 bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
            super easy!
          </span>
        </h1>

        <p className="max-w-xl mx-auto mt-4 lg:text-lg text-muted-foreground">
          Creating Invoices can be a pain! We at InvoiceMarshal make it super
          easy for you to get paid in time!
        </p>

        <div className="mt-7 mb-12">
          <Link href="/login">
            <RainbowButton>Get Unlimted Access</RainbowButton>
          </Link>
        </div>
      </div>

      <div className="relative items-center w-full py-12 mx-auto mt-12">
        <CustomIcon/>
        <Image
          src={HeroImage}
          alt="Hero image"
          className="relative object-cover w-full border rounded-lg lg:rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
}