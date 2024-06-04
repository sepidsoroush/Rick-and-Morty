import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/lib/logo";

// const LINKS = [
//   {
//     title: "GitHub",
//     href: "/",
//   },
//   {
//     title: "Locations",
//     href: "/location",
//   },
//   {
//     title: "Episodes",
//     href: "/episode",
//   },
// ];

export default function Footer() {
  return (
    <footer>
      <div className="flex h-12 my-2 flex-row items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-4 md:gap-2 md:px-0">
          <Logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href="https://github.com/sepidsoroush"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Sepideh Soroush
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/sepidsoroush/Rick-and-Morty"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

// export function FooterItem({ item }: Props) {
//   return (
//     <li>
//       <a
//         className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
//         rel="noopener noreferrer"
//         target="_blank"
//         href={item.link}
//       >
//         <ArrowUpRight />
//         <p className="ml-2 h-7">{item.title}</p>
//       </a>
//     </li>
//   );
// }
