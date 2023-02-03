import BraveIcon from "./icons/BraveIcon";
import ChromeIcon from "./icons/ChromeIcon";
import EdgeIcon from "./icons/EdgeIcon";
import FirefoxIcon from "./icons/FirefoxIcon";
import LinuxIcon from "./icons/LinuxIcon";
import MacIcon from "./icons/MacIcon";
import OperaIcon from "./icons/OperaIcon";
import SafariIcon from "./icons/SafariIcon";
import WindowsIcon from "./icons/WindowsIcon";

export enum RequestlyType {
    BROWSER_EXTENSION = "browser-extension",
    DESKTOP_APP = "desktop-app",
}

export enum PLATFORMS {
    MAC= "mac",
    LINUX = "linux",
    WINDOWS = "windows",
    CHROME = "chrome",
    FIREFOX = "firefox",
    EDGE = "edge",
    OPERA = "opera",
    SAFARI = "safari",
    BRAVE = "brave",
}


export const PARENT_SECTIONS = [
    {
        id: RequestlyType.BROWSER_EXTENSION,
        name: "Browser Extension",
        icon: null,
        defaultChild: PLATFORMS.CHROME,
    },
    {
        id: RequestlyType.DESKTOP_APP,
        name: "Desktop App",
        icon: null,
        defaultChild: PLATFORMS.MAC,
    },
];

export const SECTIONS = [
    {
        id: PLATFORMS.CHROME,
        name: "Chrome",
        icon: ChromeIcon,
        parent: RequestlyType.BROWSER_EXTENSION,
    },
    {
        id: PLATFORMS.FIREFOX,
        name: "Firefox",
        icon: FirefoxIcon,
        parent: RequestlyType.BROWSER_EXTENSION,
    },
    {
        id: PLATFORMS.EDGE,
        name: "Edge",
        icon: EdgeIcon,
        parent: RequestlyType.BROWSER_EXTENSION,
    },
    {
        id: PLATFORMS.BRAVE,
        name: "Brave",
        icon: BraveIcon,
        parent: RequestlyType.BROWSER_EXTENSION,
    },
    {
        id: PLATFORMS.OPERA,
        name: "Opera",
        icon: OperaIcon,
        parent: RequestlyType.BROWSER_EXTENSION,
    },
    {
        id: PLATFORMS.SAFARI,
        name: "Safari",
        icon: SafariIcon,
        parent: RequestlyType.BROWSER_EXTENSION,
    },
    {
        id: PLATFORMS.MAC,
        name: "Mac",
        icon: MacIcon,
        parent: RequestlyType.DESKTOP_APP,
    },
    {
        id: PLATFORMS.WINDOWS,
        name: "Windows",
        icon: WindowsIcon,
        parent: RequestlyType.DESKTOP_APP,
    },
    {
        id: PLATFORMS.LINUX,
        name: "Linux",
        icon: LinuxIcon,
        parent: RequestlyType.DESKTOP_APP,
    },
];

const computeSectionRouteIds = () => {
    const ids = [];
    PARENT_SECTIONS.map((p) => {
        SECTIONS.map(c => {
            if(c.parent == p.id) {
                ids.push(p.id + '_' + c.id);
            }
        })
    })
    return ids;
}

export const SECTION_ROUTE_IDS = computeSectionRouteIds();