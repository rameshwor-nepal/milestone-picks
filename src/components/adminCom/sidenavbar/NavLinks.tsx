'use client'
import { FaHistory } from "react-icons/fa";
import { IconType } from "react-icons";
import { MdDashboard, MdInfo, MdOutlineSettings, MdOutlineSportsVolleyball, MdPerson } from "react-icons/md";
import { MdBatchPrediction } from "react-icons/md";
import { TbBallFootball } from "react-icons/tb";

type SublinkProps = {
    text: string;
    to: string;
    active: boolean;
    extended?: boolean;
    sublinks?: { to: string; text: string; active: boolean }[];
};

export type LinksProps<TExtended = boolean> = TExtended extends true
    ? {
        extended: TExtended;
        text: string;
        icon: IconType;
        active: boolean;
        sublinks: SublinkProps[];
        to?: string;
    }
    : {
        extended: TExtended;
        text: string;
        to: string;
        icon: IconType;
        active: boolean;
    };

export const AdminNavLinks = (
    currentPath: string
): LinksProps[] => {
    {
        return [
            {
                extended: false,
                text: "Dashboard",
                icon: MdDashboard as IconType,
                to: "/admin/dashboard",
                active: currentPath === "/admin/dashboard",
            },
            {
                extended: false,
                text: "Match",
                icon: TbBallFootball as IconType,
                to: "/admin/match",
                active: currentPath.startsWith("/admin/match"),
            },
            {
                extended: false,
                text: "Prediction",
                icon: MdBatchPrediction as IconType,
                to: "/admin/prediction",
                active: currentPath.startsWith("/admin/prediction"),
            },
            {
                extended: false,
                text: "History",
                icon: FaHistory as IconType,
                to: "/admin/history",
                active: currentPath.startsWith("/admin/history"),
            },
            {
                extended: false,
                text: "Sport",
                icon: MdOutlineSportsVolleyball as IconType,
                to: "/admin/sport",
                active: currentPath.startsWith("/admin/sport"),
            },
            {
                extended: true,
                text: "Site Info",
                icon: MdInfo as IconType,
                active: currentPath.startsWith("/admin/info"),
                sublinks: [
                    {
                        extended: false,
                        text: "Home",
                        to: "/admin/info/pageInfo",
                        active: currentPath === "/admin/info/pageInfo",

                    },
                    {
                        extended: false,
                        text: "About page",
                        to: "/admin/info/about",
                        active: currentPath === "/admin/info/about",
                        // sublinks: [
                        //     {
                        //         text: "Sub Header",
                        //         to: "/admin/info/about/sub-header",
                        //         active: currentPath === "/admin/info/about/sub-header"
                        //     }
                        // ]

                    },
                    {
                        extended: false,
                        text: "Testimonial",
                        to: "/admin/info/testimonial",
                        active: currentPath === "/admin/info/testimonial",
                    },
                    {
                        extended: false,
                        text: "Betting Info",
                        to: "/admin/info/betting",
                        active: currentPath === "/admin/info/betting",
                    },
                    {
                        extended: false,
                        text: "FAQ",
                        to: "/admin/info/faq",
                        active: currentPath === "/admin/info/faq",
                    },
                    {
                        extended: false,
                        text: "Sports Category",
                        to: "/admin/info/sportCategory",
                        active: currentPath === "/admin/info/sportCategory",
                    },
                    {
                        extended: false,
                        text: "Message",
                        to: "/admin/info/message",
                        active: currentPath === "/admin/info/message",
                    },
                ],
            },
        ];
    }
};


export const UserNavLinks = (
    currentPath: string
): LinksProps[] => {
    {
        return [
            {
                extended: false,
                text: "Dashboard",
                icon: MdDashboard as IconType,
                to: "/user",
                active: currentPath === "/user",
            },
            {
                extended: false,
                text: "History",
                icon: MdBatchPrediction as IconType,
                to: "/user/history",
                active: currentPath.startsWith("/user/history"),
            },
            {
                extended: false,
                text: "Profile",
                icon: MdPerson as IconType,
                to: "/user/profile",
                active: currentPath.startsWith("/user/profile"),
            },
            {
                extended: false,
                text: "Settings",
                icon: MdOutlineSettings as IconType,
                to: "/user/settings",
                active: currentPath.startsWith("/user/settings"),
            },
        ];
    }
};