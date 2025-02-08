import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">About Elgova AI</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Mide Arowolo"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold mb-4">Founder: Mide Arowolo</h2>
            <p className="mb-4">
              Mide served in YoungLife at UNT Denton and attends FreeLife Church in Forney. He is also active in the
              Young Adult Ministry.
            </p>
            <p>
              Created Elgova AI on Feb 25, 2025, to help young adults worldwide find spiritual guidance and emotional
              support.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Meaning of Elgova</h2>
        <p className="mb-4">Elgova combines two powerful elements:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>"El-":</strong> Rooted in "Helios," the Greek sun god, symbolizing knowledge and illumination.
          </li>
          <li>
            <strong>"-Gova":</strong> Derived from "gubernare," meaning governance and strategic direction in Latin. It
            represents the guiding principles of Elgova AI.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">How AI and Faith Work Together</h2>
        <p>
          Elgova AI combines the latest in technology with the timeless wisdom of the Bible, offering relevant guidance
          to young adults seeking support in their spiritual and emotional lives.
        </p>
      </section>
    </div>
  )
}

