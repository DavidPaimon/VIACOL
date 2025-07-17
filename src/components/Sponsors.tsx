import runt from "@/assets/png/runt.png"
import mintransporte from "@/assets/png/mintransporte.png"
import simit from "@/assets/png/simit.png"

interface SponsorProps {
  image: string
  name: string
}

const sponsors: SponsorProps[] = [
  { image: runt, name: "RUNT" },
  { image: mintransporte, name: "Mintransporte" },
  { image: simit, name: "SIMIT" },
]

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-[#F2C92F]">
        Autorizados y vigilados por:
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ image, name }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2"
          >
            <img
              src={image}
              alt={name}
              className="h-24 w-auto object-contain"
            />
            <h3 className="text-xs text-muted-foreground text-center">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
