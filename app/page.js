import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-grow items-center justify-center">
      <div className="container p-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold m-2">Meet Elgova AI</h1>
          <h2 className="text-2xl font-bold m-2">Your Spiritual Chat Companion</h2>
          <p className="text-xl m-2">Empowering young adults with Bible-based guidance, support, and encouragement.</p>
          <div className="space-x-4">
            <Button asChild variant="outline">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild>
              <Link href="/chat">Start Chatting</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/chat">Read Our Blogs</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

