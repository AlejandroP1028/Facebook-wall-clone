"use client";

import Image from "next/image";
import { Mail } from "lucide-react";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaReact } from "react-icons/fa6";
import {
  RiNextjsLine,
  RiSupabaseLine,
  RiTailwindCssFill,
} from "react-icons/ri";
export default function Sidebar() {
  return (
    <aside className="w-full lg:w-[400px] p-6 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50">
      {/* Profile Section */}
      <div className="flex items-center gap-6 mb-6">
        <Image
          src="/placeholder.JPG"
          alt="Profile"
          width={1080}
          height={1920}
          className="w-42 h-64 object-cover bg- rounded-md"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">Alejandro Prado</h2>
          <p className="text-sm text-gray-600 mt-1">Software Developer</p>
          <div className="flex items-center gap-3 mt-4 text-blue-600">
            <a href="mailto:alejandroprado885@gmail.com">
              <Mail className="w-5 h-5 hover:text-blue-800" />
            </a>
            <a href="https://github.com/AlejandroP1028" target="_blank">
              <FiGithub size={20} color="#155dfc" />
            </a>
            <a href="https://linkedin.com/in/aliprado" target="_blank">
              <FiLinkedin size={20} color="#155dfc" />
            </a>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 gap-4 text-sm text-gray-700">
        <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold text-gray-800 mb-1">Education</h4>
          <p>
            B.S. in Computer Science
            <br />
            Pamantasan ng Lungsod ng Pasig
          </p>
        </div>

        <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold text-gray-800 mb-1">Achievements</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Graduated Cum Laude</li>
            <li>Best in Thesis</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
          <p>Pasig, Metro Manila</p>
        </div>

        <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold text-gray-800 mb-1">Tech Stack</h4>
          <div className="flex flex-wrap gap-2 mt-2 text-xs text-black">
            <span className="bg-blue-100  px-2 py-1 rounded flex flex-row items-center justify-center ">
              React
              <FaReact size={20} className="ml-2" />
            </span>
            <span className="bg-gray-100  px-2 py-1 rounded flex flex-row items-center justify-center">
              Next.js
              <RiNextjsLine size={20} className="ml-2" />
            </span>
            <span className="bg-green-100  px-2 py-1 rounded flex flex-row items-center justify-center">
              Supabase
              <RiSupabaseLine size={20} className="ml-2" />
            </span>
            <span className="bg-yellow-100  px-2 py-1 rounded flex flex-row items-center justify-center">
              Tailwind CSS
              <RiTailwindCssFill size={20} className="ml-2" />
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
