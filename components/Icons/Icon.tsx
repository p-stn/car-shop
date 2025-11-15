import { icons, IconName } from "./icons";

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

export function Icon({ name, size = 24, color = "currentColor", className }: IconProps) {
  const IconSvg = icons[name];

  if (!IconSvg) {
    console.error(`Icon "${name}" not found`);
    return null;
  }

  return (
    <span className="flex flex-row justify-center items-center">
      {IconSvg}
    </span>
  );
}
