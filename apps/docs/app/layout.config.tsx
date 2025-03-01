import { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export const baseOptions: BaseLayoutProps = {
    i18n: true,
    githubUrl: "https://github.com/ofabiodev/tusk",
    nav: {
        transparentMode: "none",
        title: <span className="font-bold uppercase flex gap-4 items-center justify-center"><Image src="https://raw.githubusercontent.com/ofabiodev/tusk/main/.github/assets/icon.svg" alt="logo" width={32} height={32} /><span className="text-xl font-bold">TUSK</span></span>,
    }
}