import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Meet Elgova AI – Your Spiritual Chat Companion</h1>
        <p className="text-xl mb-8">Empowering young adults with Bible-based guidance, support, and encouragement.</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/chat">Start Chatting</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/about">Learn More</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/chat">Get Support</Link>
          </Button>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Start chatting with Elgova AI</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          {/* Placeholder for chat interface */}
          <p className="text-center">Chat interface will be implemented here</p>
        </div>
      </section>
    </div>
  )
}

