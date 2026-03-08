import Image from "next/image";

export default function HeroPattern() {
  return (
    <div className="absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none">
      <Image
        src="/images/hero-hardhat.png"
        alt=""
        fill
        className="object-contain object-right-bottom opacity-[0.07]"
        loading="lazy"
        sizes="50vw"
      />
    </div>
  );
}
