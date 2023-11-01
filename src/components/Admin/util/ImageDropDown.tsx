import { MouseEventHandler, SVGProps } from "react";
import Link from "next/link";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  LucideIcon,
} from "lucide-react";

import { Button } from "shadcn/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "shadcn/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "shadcn/components/ui/avatar";

type TMenu = {
  Icon?: any;
  title: string;
  shortcut?: string | React.ReactNode;
  onclick?: MouseEventHandler<HTMLDivElement> | undefined;
  link?: string;
};

interface IConfiguration {
  url: string;
  imgOpt?: string;
  alt?: string;
  label: string;

  menus: TMenu[][];
}

function flatArray(arr: any) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    flat.push(<DropdownMenuSeparator key={`${i}-sep`} />);
    element.forEach((e: any) => {
      flat.push(e);
    });
  }

  return flat;
}

export function ImgDropDown({ config }: { config: IConfiguration }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={config.url} alt={config.alt || "logo"} />
          <AvatarFallback>{config?.imgOpt && config?.imgOpt[0] + config.imgOpt && config.imgOpt[1]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{config.label}</DropdownMenuLabel>

        {flatArray(
          config.menus.map((menu, indexP) => {
            return menu.map((item, indexC) => {
              if (item.link) {
                return (
                  <Link href={item.link} key={`${indexP} ${indexC}`}>
                    <DropdownMenuItem onClick={item.onclick}>
                      {item.Icon && <item.Icon className="mr-2 h-4 w-4" />}
                      <span>{item.title}</span>
                      <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </Link>
                );
              } else {
                return (
                  <DropdownMenuItem onClick={item.onclick} key={`${indexP} ${indexC}`}>
                    {item.Icon && <item.Icon className="mr-2 h-4 w-4" />}

                    <span>{item.title}</span>
                    <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                );
              }
            });
          })
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function FluentEmojiHighContrastBlackCat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="M23.07 2c-.57-.01-1.13.061-1.66.18a.981.981 0 0 0-.595 1.51c.002.003.005.006.005.011c.23.35.65.52 1.06.43c.36-.09.74-.13 1.12-.13c2.84 0 5.14 2.38 4.99 5.25a4.995 4.995 0 0 1-1.385 3.2l.04.076a6.49 6.49 0 0 0-5.145-2.526c-.98 0-1.96.22-2.84.65l-4.77 2.32c-.41.2-.88-.1-.88-.55v-1.33c0-1.25-.47-2.39-1.24-3.26l-4.05-4.51c-.25-.28-.72-.11-.72.27v2.71c-1.87.43-3.34 2.32-3.72 4.27c-.05.25-.27.43-.52.43a.76.76 0 0 0-.76.76v.22c0 2.22 1.8 4.02 4.02 4.02v1.59a4.41 4.41 0 0 0 3.98 4.39v6.65c0 .2.17.37.38.37h2.25c.21 0 .38-.17.38-.38v-5.879l1.4 5.879c.06.22.26.38.49.38h2.13c.24 0 .42-.23.36-.45l-1.557-6.55h4.014l-1.557 6.55c-.06.22.12.45.36.45h2.13c.23 0 .43-.16.49-.38l1.17-4.91l.95.95c.21.21.27.52.15.79l-1.3 3.03c-.12.24.06.52.33.52h2.18c.15 0 .29-.09.34-.23l2.52-5.89c.26-.58.39-1.21.39-1.84v-4.54c0-.784-.139-1.535-.393-2.231A6.996 6.996 0 0 0 30 8.9c-.05-3.78-3.15-6.86-6.93-6.9ZM5.813 10.747c0-.359.29-.637.637-.637c.359 0 .637.29.637.637v.95a.642.642 0 0 1-.637.637a.635.635 0 0 1-.637-.637v-.95Z"
      ></path>
    </svg>
  );
}
