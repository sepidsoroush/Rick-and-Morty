import { Logo } from "@/lib/logo";

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] my-4">
      <div className="flex flex-col md:flex-row items-center md:gap-2 md:px-0">
        <span className="hidden md:inline-block">
          <Logo />
        </span>
        <p className="text-center md:text-sm text-xs leading-loose md:text-left">
          Built by{" "}
          <a
            href="https://github.com/sepidsoroush"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Sepideh Soroush
          </a>
          .{" "}
        </p>
        <p className="text-center md:text-sm text-xs leading-loose md:text-left">
          The source code is available on{" "}
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
    </footer>
  );
}
