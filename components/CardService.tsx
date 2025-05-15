import React from "react";

interface CardServiceProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export default function CardService({
  Icon,
  title,
  description,
}: CardServiceProps) {
  return (
    <div className="w-full h-28 bg-white/10 backdrop-blur-xl rounded-lg p-4">
      <div className="flex flex-row justify-center items-center w-full h-full gap-4">
        <Icon className="w-12 h-12 text-primary" />
        <div className="flex flex-col">
          <h2 className="text-md font-semibold">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
