import { DiMsqlServer } from "react-icons/di";
import { SiBootstrap, SiExpress, SiReact } from "react-icons/si";

const TechItem = ({
  Icon,
  color,
  label,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  label: string;
}) => (
  <div className="flex flex-row items-center gap-2 mt-4">
    <Icon className={`w-5 h-5 ${color}`} />
    <span className="font-medium text-xs">{label}</span>
  </div>
);

export const TechReact = () => (
  <TechItem Icon={SiReact} color="text-cyan-400" label="React" />
);

export const TechExpress = () => (
  <TechItem Icon={SiExpress} color="text-gray-100" label="Express" />
);

export const TechBootstrap = () => (
  <TechItem Icon={SiBootstrap} color="text-purple-600" label="Bootstrap" />
);

export const TechMsqlServer = () => (
  <TechItem Icon={DiMsqlServer} color="text-red-600" label="Microsoft SQL" />
);
