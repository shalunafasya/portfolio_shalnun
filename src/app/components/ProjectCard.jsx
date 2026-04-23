import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  title,
  status,
  description,
  tools = [],
  doc = [],
}) => {
  return (
    <div className="
      border border-white/10
      rounded-lg
      min-h-[240px]
      sm:min-h-[260px]
      md:min-h-[280px]
      relative
      bg-[#181818]
      p-4
      flex flex-col justify-between
    ">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h5 className="text-white sm:text-lg font-semibold leading-snug">
            {title}
          </h5>

          {status && (
            <span
              className={`shrink-0 flex items-center gap-1 text-[10px] sm:text-xs px-2 py-1 rounded-full ${
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
              />
              <span>{status}</span>
            </span>
          )}
        </div>

        <p className="text-[#ADB7BE] text-xs sm:text-sm py-2 line-clamp-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {tools.map((tool, index) => (
            <img
              key={index}
              src={tool.src}
              alt={tool.alt}
              className="h-5 sm:h-6"
            />
          ))}
        </div>
      </div>

      <div className="flex gap-3 flex-wrap mt-5">
        {doc.map((doc, idx) => (
          <Link
            key={idx}
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            {doc.icon && (
              <Image
                src={doc.icon}
                alt="icon"
                width={26}
                height={26}
                className="sm:w-7 sm:h-7"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;