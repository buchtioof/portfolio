import usePrefersColorScheme from "use-prefers-color-scheme";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";


export default function ButtonSwitchTheme() {
    const prefersColorScheme = usePrefersColorScheme();
    const isDarkMode = prefersColorScheme === "dark";

    return ( isDarkMode ? <MoonIcon size={24} weight="bold" /> : <SunIcon size={24} weight="bold" /> );
}