import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 lg:p-6">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white text-sm">Log in</Button>
          <Button className="bg-[#913bff] hover:bg-[#7f33e0] text-sm">Sign up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-12 lg:py-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Transforming
              <br />
              <span className="text-[#913bff]">Healthcare</span> with
              <br />
              Blockchain <span className="text-[#913bff]">Innovations</span>
            </h1>
            <p className="text-gray-400 max-w-lg">
              Experience seamless healthcare management with our decentralized platform, where you wellness and
              security come first. Connect without the need for intermediaries.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold">$ 12M+</div>
                <div className="text-sm text-gray-400">Total Value Locked</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4600+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
            </div>
            <Button className="bg-[#913bff] hover:bg-[#7f33e0]">
              Start Now
            </Button>
            <p className="text-sm text-gray-400">Open New Wallet/Store Download Will Be Here</p>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="App mockup"
              width={600}
              height={600}
              className="relative z-10"
            />
          </div>
        </div>
      </section>

      {/* We are providing section */}
      <section className="py-12 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">
            We are providing best
            <span className="text-[#913bff]"> trading experience.</span>
          </h2>
          <p className="text-sm text-gray-400 mb-8">
            "Buy and sell, trade your health data, invest in health tokens, and more all in the same trading ecosystem."
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 lg:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Crypto meets health on
            <span className="text-[#913bff]"> MEDX</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <Button
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-transparent hover:bg-transparent"
                aria-label="Play video"
              >
                <PlayCircle className="h-16 w-16 text-[#913bff]" />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <p className="text-sm">Better and safer than any other</p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <p className="text-sm">Access robust utilities</p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <p className="text-sm">Smart levels, rewards, and stake your tokens</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 lg:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our Services:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#913bff] text-white">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Service icon"
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-4">
                  Decentralized Health Records Management
                </h3>
                <p className="text-sm">
                  Securely store and manage personal medical records on the blockchain,
                  allowing users to control their healthcare data and easily share it with
                  healthcare providers.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#913bff] text-white">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Service icon"
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-4">Decentralized Insurance</h3>
                <p className="text-sm">
                  Provide peer-to-peer health insurance where users can join insurance pools. 
                  Eliminate fraud in health insurance pools. Connect insurance 
                  providers and cutting costs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#913bff] text-white">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Service icon"
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-4">Health Data Marketplaces</h3>
                <p className="text-sm">
                  Enable users to monetize their health data by sharing it with researchers,
                  pharmaceutical companies, and wellness platforms in exchange for
                  tokens, while maintaining full control and privacy.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#913bff] text-white">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Service icon"
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-4">Fitness and Wellness Rewards</h3>
                <p className="text-sm">
                  Gamify fitness goals using a blockchain-based system where users 
                  earn tokens based on achieving fitness workouts, diet, or health check-ups. 
                  These tokens can be exchanged for services or products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-400 mb-8">
              Have questions or need assistance? We're here to help! Reach out to our team 
              for any inquiries, support, or consultations regarding our blockchain healthcare solutions. 
              Whether you're looking to integrate with our services, we're excited to connect with you 
              and support your health journey.
            </p>
            <Button className="bg-[#913bff] hover:bg-[#7f33e0]">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-12 lg:py-20 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Team related image will be here</h2>
        </div>
      </section>
    </div>
  )
}