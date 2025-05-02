import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Navigation from "@/components/navigation"
import Image from "next/image"

export default function Home() {
  return (
    <div className="grid-background min-h-screen">
      <Navigation />
      <main className="min-h-screen">
        {/* Header */}
        <header className="bg-[#387F65] text-white py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mb-4 md:mb-0">
                  <Image
                    src="/images/profile.png"
                    alt="Pieter Swaelens"
                    width={160}
                    height={160}
                    className="rounded-full"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">Pieter Swaelens</h1>
                  <p className="text-gray-200 mt-2 text-center md:text-left">
                    Mechatronics and Robotics Software Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
            {/* Left Column - All sections that should be on the left */}
            <div className="md:col-span-1 space-y-8">
              {/* Profile Section */}
              <div className="bg-white shadow-md">
                <div className="bg-[#387F65] text-white py-3 px-4">
                  <h2 className="text-xl font-semibold uppercase tracking-wider">Profile</h2>
                </div>
                <div className="p-4 border-l-4 border-[#387F65]">
                  <p className="text-gray-700">
                    I'm a Mechatronics and Robotics Software engineer with a keen interest in high tech robotics and
                    software development. I aim to engage myself in a company that has a positive impact on society
                    through innovation in important fields. To this end I am looking for a high paced environment where
                    innovation and teamwork are essential.
                  </p>
                </div>
              </div>

              {/* Personal Traits Section */}
              <div className="bg-white shadow-md">
                <div className="bg-[#387F65] text-white py-3 px-4">
                  <h2 className="text-xl font-semibold uppercase tracking-wider">Personal Traits</h2>
                </div>
                <div className="p-4 border-l-4 border-[#387F65]">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-[#387F65] mr-2">✓</span>
                      <span>Quick learner</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#387F65] mr-2">✓</span>
                      <span>Strong communicator</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#387F65] mr-2">✓</span>
                      <span>Teamwork</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#387F65] mr-2">✓</span>
                      <span>Broad-minded</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* IT Skills Section */}
              <div className="bg-white shadow-md">
                <div className="bg-[#387F65] text-white py-3 px-4">
                  <h2 className="text-xl font-semibold uppercase tracking-wider">IT Skills</h2>
                </div>
                <div className="p-4 border-l-4 border-[#387F65]">
                  <p className="font-semibold mb-2">Proficient:</p>
                  <p className="mb-4">Python, C++, CMake, Git, ROS1/ROS2, TDD, Docker, Linux</p>
                  <p className="font-semibold mb-2">Good:</p>
                  <p>Office 365, Lua, C, SQL Matlab, Jenkins, AzureDevOps</p>
                </div>
              </div>

              {/* Varia Section */}
              <div className="bg-white shadow-md">
                <div className="bg-[#387F65] text-white py-3 px-4">
                  <h2 className="text-xl font-semibold uppercase tracking-wider">Varia</h2>
                </div>
                <div className="p-4 border-l-4 border-[#387F65]">
                  <p>Online course: Pytorch OpenCV free bootcamp</p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-white shadow-md">
                <div className="bg-[#387F65] text-white py-3 px-4">
                  <h2 className="text-xl font-semibold uppercase tracking-wider">Contact</h2>
                </div>
                <div className="p-4 border-l-4 border-[#387F65]">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Phone className="text-[#387F65] mr-3" size={20} />
                      <span>+32472063235</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="text-[#387F65] mr-3" size={20} />
                      <span>pieter.swaelens@hotmail.com</span>
                    </li>
                    <li className="flex items-center">
                      <Linkedin className="text-[#387F65] mr-3" size={20} />
                      <a href="https://www.linkedin.com/in/pieter-swaelens/" className="text-[#387F65] hover:underline">
                        Linkedin.com/in/pieter-swaelens
                      </a>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="text-[#387F65] mr-3 mt-1" size={20} />
                      <span>Andreas Vesaliusstraat 20, 3000 Leuven, Belgium</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Experience and Education */}
            <div className="md:col-span-2 space-y-8">
              {/* Experience Section */}
              <div className="bg-white shadow-md">
                <div className="bg-[#387F65] text-white py-3 px-4">
                  <h2 className="text-xl font-semibold uppercase tracking-wider">Experience</h2>
                </div>
                <div className="p-4 border-l-4 border-[#387F65]">
                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">Robotics Software Engineer at Octinion</h3>
                      <span className="text-gray-600">Oct 2022-now</span>
                    </div>
                    <p className="mb-2">
                      <span className="font-semibold">Software development:</span> project based for custom mechatronic
                      solutions. Programming done in C++, Python and the ROS stack as well as working with tools such as
                      Git, Jenkins, Confluence, etc. As a software engineer I have completed small individual projects
                      as well as doing larger projects in a team.
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Team-lead software:</span> coordinating the work of a team of 3-4
                      people for a new in house developed robotics product.
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Project management:</span> estimating budgets, negotiating with
                      customers, expectation management and ensuring deadlines are being met.
                    </p>
                    <p className="text-gray-600">– Leuven</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">R&D Assistant at Diabatix</h3>
                      <span className="text-gray-600">Summer 2018-2020</span>
                    </div>
                    <p className="mb-2">
                      Pre- and post-processing of designs in CAD (Autodesk Inventor). Programming of scripts in Visual
                      Basic and Python.
                    </p>
                    <p className="text-gray-600">– Leuven</p>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-white shadow-md">
                <div className="bg-[#387F65] text-white py-3 px-4">
                  <h2 className="text-xl font-semibold uppercase tracking-wider">Education</h2>
                </div>
                <div className="p-4 border-l-4 border-[#387F65]">
                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">Master's degree in Mechanical Engineering</h3>
                      <span className="text-gray-600">2020-2022</span>
                    </div>
                    <p className="mb-1">
                      <span className="font-semibold">Option:</span> Mechatronics and Robotics
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Thesis subject:</span> Towards a natural handover between human
                      and robot: Developing and programming a set-up where a human operator can pass an object to a
                      Frank Emika Panda robot. Using ROS, Python, C++ and Lua as well as the research groups own eTaSL
                      software.
                    </p>
                    <p className="text-gray-600">– KU Leuven</p>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">Exchange program in Robotics</h3>
                      <span className="text-gray-600">2021-2021</span>
                    </div>
                    <p className="text-gray-600">– Norwegian University of Science and Technology, Trondheim</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">Bachelor's degree in Engineering</h3>
                      <span className="text-gray-600">2017-2020</span>
                    </div>
                    <p className="mb-1">
                      <span className="font-semibold">Major:</span> Electrotechnical Engineering
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Minor:</span> Mechanical Engineering
                    </p>
                    <p className="text-gray-600">– KU Leuven</p>
                  </div>
                </div>
              </div>

              {/* Languages Section */}
              <div className="bg-white shadow-md">
                <div className="bg-[#387F65] text-white py-3 px-4">
                  <h2 className="text-xl font-semibold uppercase tracking-wider">Languages</h2>
                </div>
                <div className="p-4 border-l-4 border-[#387F65]">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="font-semibold">Dutch:</p>
                      <p>mother tongue</p>
                    </div>
                    <div>
                      <p className="font-semibold">English:</p>
                      <p>fluent (C2)</p>
                    </div>
                    <div>
                      <p className="font-semibold">French:</p>
                      <p>good</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
