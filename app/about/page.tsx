import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="grid-background min-h-screen">
      <Navigation />
      <main className="min-h-screen">
        {/* Header */}
        <header className="bg-[#387F65] text-white py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
                <p className="text-gray-200 mt-2">Learn more about my journey and interests</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-8 py-8">
          <Link href="/">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resume
            </Button>
          </Link>

          <div className="bg-white shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#387F65] mb-4">My Journey</h2>
            <p className="mb-4">
              My journey into the world of robotics and mechatronics began during my undergraduate studies in
              Electrotechnical Engineering at KU Leuven. The intersection of mechanical systems, electronics, and
              software fascinated me, leading me to pursue a minor in Mechanical Engineering to broaden my understanding
              of these interconnected fields.
            </p>
            <p className="mb-4">
              During my master's program, I specialized in Mechatronics and Robotics, where I developed a deep
              appreciation for the complexities and possibilities of robotic systems. My thesis project, which focused
              on natural human-robot interaction through object handover, allowed me to combine theoretical knowledge
              with practical implementation using technologies like ROS, Python, and C++.
            </p>
            <p>
              My exchange program at the Norwegian University of Science and Technology further expanded my perspective
              on robotics research and applications in different contexts. These experiences, combined with my
              professional work at Octinion and Diabatix, have shaped me into a versatile engineer with a passion for
              creating innovative solutions that can positively impact society.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#387F65] mb-4">Professional Philosophy</h2>
            <p className="mb-4">
              I believe that technology should serve humanity by addressing real-world challenges and improving quality
              of life. This philosophy guides my approach to engineering and problem-solving. I am particularly
              interested in robotics applications that can assist in healthcare, environmental conservation, and
              sustainable manufacturing.
            </p>
            <p>
              As a software engineer, I value clean, maintainable code and robust architecture. I enjoy working in
              collaborative environments where diverse perspectives contribute to innovative solutions. My experience as
              a team lead has reinforced my belief in the importance of clear communication, mutual respect, and shared
              goals in achieving project success.
            </p>
          </div>

          <div className="bg-white shadow-md p-6">
            <h2 className="text-2xl font-bold text-[#387F65] mb-4">Beyond Engineering</h2>
            <p className="mb-4">
              Outside of my professional life, I enjoy staying active through (trail-)running, climbing and hiking, which provide both
              physical exercise and opportunities to appreciate nature. I've run multiple ultra-marathons and go hiking as much as I can every summer. I'm also an avid reader of non-fiction history books and enjoy listening to history podcasts. Besides that I spend my time with friends and family.
            </p>
            <p>
              I'm passionate about sharing knowledge with others. Whether it's discussing technical problems with colleagues or discussing ideas with my house-mates. Working out new ideas and brainstorming with friends about exciting new technologies never gets old.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#387F65] text-white py-6">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <p>© {new Date().getFullYear()} Pieter Swaelens | Mechatronics and Robotics Software Engineer</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
