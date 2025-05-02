import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import PrintButton from "@/components/print-button"
import Navigation from "@/components/navigation"

export default function PrintPage() {
  return (
    <div className="grid-background min-h-screen">
      <Navigation />
      <main className="min-h-screen bg-white p-8 max-w-5xl mx-auto">
        <PrintButton />

        {/* Header */}
        <header className="border-b-4 border-[#387F65] pb-4 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#387F65]">Pieter Swaelens</h1>
              <p className="text-gray-700 mt-1">Mechatronics and Robotics Software Engineer</p>
            </div>
            <div>
              <p className="text-gray-600">°07/08/2000</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#387F65] border-b-2 border-[#387F65] pb-1 mb-3">PROFILE</h2>
              <p className="text-gray-700">
                I'm a Mechatronics and Robotics Software engineer with a keen interest in high tech robotics and
                software development. I aim to engage myself in a company that has a positive impact on society through
                innovation in important fields. To this end I am looking for a high paced environment where innovation
                and teamwork are essential.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#387F65] border-b-2 border-[#387F65] pb-1 mb-3">
                PERSONAL TRAITS
              </h2>
              <ul className="space-y-1">
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

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#387F65] border-b-2 border-[#387F65] pb-1 mb-3">IT SKILLS</h2>
              <p className="font-semibold mb-1">Proficient:</p>
              <p className="mb-3">Python, C++, CMake, Git, ROS1/ROS2, TDD, Docker, Linux</p>
              <p className="font-semibold mb-1">Good:</p>
              <p>Office 365, Lua, C, SQL Matlab, Jenkins, AzureDevOps</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#387F65] border-b-2 border-[#387F65] pb-1 mb-3">VARIA</h2>
              <p>Online course: Pytorch OpenCV free bootcamp</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#387F65] border-b-2 border-[#387F65] pb-1 mb-3">CONTACT</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="text-[#387F65] mr-3" size={16} />
                  <span>+32472063235</span>
                </li>
                <li className="flex items-center">
                  <Mail className="text-[#387F65] mr-3" size={16} />
                  <span>pieter.swaelens@hotmail.com</span>
                </li>
                <li className="flex items-center">
                  <Linkedin className="text-[#387F65] mr-3" size={16} />
                  <span>Linkedin.com/in/PieterSwaelens</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-[#387F65] mr-3 mt-1" size={16} />
                  <span>Andreas Vesaliusstraat 20, 3000 Leuven, Belgium</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#387F65] border-b-2 border-[#387F65] pb-1 mb-3">EXPERIENCE</h2>
              <div className="mb-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">Robotics Software Engineer at Octinion</h3>
                  <span className="text-gray-600">Oct 2022-now</span>
                </div>
                <p className="mb-1">
                  <span className="font-semibold">Software development:</span> project based for custom mechatronic
                  solutions. Programming done in C++, Python and the ROS stack as well as working with tools such as
                  Git, Jenkins, Confluence, etc. As a software engineer I have completed small individual projects as
                  well as doing larger projects in a team.
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Team-lead software:</span> coordinating the work of a team of 3-4
                  people for a new in house developed robotics product.
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Project management:</span> estimating budgets, negotiating with
                  customers, expectation management and ensuring deadlines are being met.
                </p>
                <p className="text-gray-600">– Leuven</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">R&D Assistant at Diabatix</h3>
                  <span className="text-gray-600">Summer 2018-2020</span>
                </div>
                <p className="mb-1">
                  Pre- and post-processing of designs in CAD (Autodesk Inventor). Programming of scripts in Visual Basic
                  and Python.
                </p>
                <p className="text-gray-600">– Leuven</p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#387F65] border-b-2 border-[#387F65] pb-1 mb-3">EDUCATION</h2>
              <div className="mb-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">Master's degree in Mechanical Engineering</h3>
                  <span className="text-gray-600">2020-2022</span>
                </div>
                <p className="mb-1">
                  <span className="font-semibold">Option:</span> Mechatronics and Robotics
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Thesis subject:</span> Towards a natural handover between human and
                  robot: Developing and programming a set-up where a human operator can pass an object to a Frank Emika
                  Panda robot. Using ROS, Python, C++ and Lua as well as the research groups own eTaSL software.
                </p>
                <p className="text-gray-600">– KU Leuven</p>
              </div>
              <div className="mb-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">Exchange program in Robotics</h3>
                  <span className="text-gray-600">2021-2021</span>
                </div>
                <p className="text-gray-600">– Norwegian University of Science and Technology, Trondheim</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">Bachelor's degree in Engineering</h3>
                  <span className="text-gray-600">2017-2020</span>
                </div>
                <p className="mb-1">
                  <span className="font-semibold">Major:</span> Electrotechnical Engineering
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Minor:</span> Mechanical Engineering
                </p>
                <p className="text-gray-600">– KU Leuven</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#387F65] border-b-2 border-[#387F65] pb-1 mb-3">LANGUAGES</h2>
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
      </main>
    </div>
  )
}
