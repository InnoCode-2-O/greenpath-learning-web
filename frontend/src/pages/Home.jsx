// import { Button } from "@/components/ui/button";
// import { input } from "@/components/ui/input";
import {
  GlobeIcon,
  BookOpenIcon,
  UsersIcon,
  AwardIcon,
  Link,
} from "lucide-react";
import Footer from "../components/Footer";
import Btn from "../components/Btn";
// import Link from "nexlink";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-in-up">
                  Learn SDGs, Shape the Future
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 animate-fade-in-up animation-delay-200">
                  Empower yourself with knowledge about Sustainable Development
                  Goals. Join our interactive eLearning platform designed for
                  high school students.
                </p>
              </div>
              <div className="space-x-4 animate-fade-in-up animation-delay-300">
                <Btn text={"Get Started"} />
                <button variant="outline">Learn More</button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose GreenPATH learning?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <BookOpenIcon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Interactive Courses</h3>
                <p className="text-gray-500">
                  Engage with our multimedia-rich, interactive courses on all 17
                  SDGs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <UsersIcon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Peer Collaboration</h3>
                <p className="text-gray-500">
                  Connect with students worldwide and work on global
                  sustainability projects.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <AwardIcon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Earn Certificates</h3>
                <p className="text-gray-500">
                  Gain recognition for your learning with our SDG achievement
                  certificates.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Start Your SDG Journey Today
                </h2>
                <p className="text-gray-500 mb-4">
                  Join thousands of students who are already making a
                  difference. Our platform provides the knowledge and tools you
                  need to contribute to a sustainable future.
                </p>
                <Btn text={"Sign Up Now"} />
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold mb-2">🌍 Climate Action Course</h3>
                  <p className="text-sm text-gray-500">
                    Learn about climate change and how you can make an impact.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold mb-2">
                    🌱 Sustainable Cities Project
                  </h3>
                  <p className="text-sm text-gray-500">
                    Design sustainable solutions for urban environments.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold mb-2">💧 Clean Water Challenge</h3>
                  <p className="text-sm text-gray-500">
                    Participate in our global clean water awareness campaign.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Join Our Global Community
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
              Stay updated with our latest courses, sustainability news, and
              student success stories.
            </p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-4 mx-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Btn text={"Subscribe"} />
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
