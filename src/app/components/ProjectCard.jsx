import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  imgUrl,
  title,
  status,
  description,
  tools = [],
  doc = [],
}) => {
  return (
    <div className="border-purple-500/20 border-2 rounded-lg h-60 sm:h-48 md:h-96 lg:h-[30vh]">
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <div className="flex items-center gap-2 mb-2 justify-between">
          <h5 className="text-xl font-semibold">{title}</h5>
          {status && (
            <span
              className={`flex items-center gap-1 text-sm px-2 py-0.5 rounded-full ${
                status === "ongoing"
                  ? "bg-yellow-900 text-yellow-400"
                  : "bg-green-900 text-green-400"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  status === "ongoing"
                    ? "bg-yellow-400"
                    : "bg-green-400"
                }`}
              ></span>
              <span className="md:hidden lg:inline">{status}</span>
            </span>
          )}
        </div>
        <p className="text-[#ADB7BE] text-xs">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3 mb-3">
          {tools.map((tool, index) => (
            <img key={index} src={tool.src} alt={tool.alt} className="h-6" />
          ))}
        </div>
        <div className="flex flex-row gap-2 flex-wrap">
      {doc.map((doc, idx) => (
        <Link
          key={idx}
          href={doc.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 pt-3"
        >
          {doc.icon && (
            <Image src={doc.icon} alt={`icon`} width={28} height={28} />
          )}
        </Link>
      ))}
    </div>
      </div>
    </div>
  );
};

export default ProjectCard;
