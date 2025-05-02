import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function ProjectsPage() {
  return (
    <div className="grid-background min-h-screen">
      <Navigation />
      <main className="min-h-screen">
        {/* Header */}
        <header className="bg-[#387F65] text-white py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
                <p className="text-gray-200 mt-2">Showcasing my work in robotics and software development</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-[#387F65]">
              <CardHeader>
                <CardTitle>Tomato Deleafing Robot</CardTitle>
                <CardDescription>Robotics Project at Octinion</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Designed and implemented a behaviour architecture to integrate computer vision detection into the robotic platform. Implemented filtering and sorting for optimised cutting behaviour and increased robot efficienty. Performed on-site testing and deployment of software on 10+ robots. 
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">Technologies: C++, ROS2, Docker, Python, CMake</p>
              </CardFooter>
            </Card>

            <Card className="border-l-4 border-l-[#387F65]">
              <CardHeader>
                <CardTitle>Robotic Arm Implement</CardTitle>
                <CardDescription>Team Lead Software Project at Octinion</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Led the software team in developing a new robotic arm prototype. Rebuilding and integrating existing components into a new form factor. Oversaw the bi-weekly sprint meetings, distributed tasks and reported to project lead. Integrated motor drivers into new system and programmed behaviour and motion planning.
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">Technologies: C++, Python, ROS2, Motorcortex, Industrial Motor Driver APIs</p>
              </CardFooter>
            </Card>

            <Card className="border-l-4 border-l-[#387F65]">
              <CardHeader>
                <CardTitle>Camera Inspection System</CardTitle>
                <CardDescription>Research Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Designed and implemented software & networking for a camera-tower on a mobile platform for crop-inspection in greenhouses. Implemented the logical behaviour layer, buffering strategy, data handling into cloud, camera integration, networking and the communication layer to the platform. Went through multiple design iterations on this platform, each time improving efficiency and quality. 
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">Technologies: C++, Python, ROS, PostgreSQL, Docker, Industrial Camera SDKs</p>
              </CardFooter>
            </Card>

            <Card className="border-l-4 border-l-[#387F65]">
              <CardHeader>
                <CardTitle>Software Architecture for Quality Control</CardTitle>
                <CardDescription>Industrial Automation Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Designed the architecture for a computer vision system for the inspection of a food production line. Selected the camera components for both IR and mono inspection of the inspection system. 
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">Technologies: Python, OpenCV, TensorFlow, Industrial Cameras</p>
              </CardFooter>
            </Card>
            
            <Card className="border-l-4 border-l-[#387F65]">
              <CardHeader>
                <CardTitle>Human-Robot Handover System</CardTitle>
                <CardDescription>Master's Thesis Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Developed a natural handover system between humans and a Frank Emika Panda robot. Implemented human-like trajectory planning, force control and behaviour patterns for smooth and safe object transfers.
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">Technologies: ROS, Python, C++, Lua, eTaSL</p>
              </CardFooter>
            </Card>

            <Card className="border-l-4 border-l-[#387F65]">
              <CardHeader>
                <CardTitle>CAD Automation Tools</CardTitle>
                <CardDescription>R&D Project at Diabatix</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Created scripts to automate pre- and post-processing of CAD designs, reducing manual work and
                  improving consistency in design outputs.
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">Technologies: Python, Visual Basic, Autodesk Inventor API</p>
              </CardFooter>
            </Card>
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
