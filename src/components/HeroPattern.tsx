import Image from "next/image";

export default function HeroPattern() {
  return (
    <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[40%] max-w-[400px] aspect-square pointer-events-none">
      <Image
        src="/images/hero-hardhat.png"
        alt=""
        fill
        className="object-contain opacity-[0.07]"
        loading="lazy"
        sizes="40vw"
      />
    </div>
  );
}
