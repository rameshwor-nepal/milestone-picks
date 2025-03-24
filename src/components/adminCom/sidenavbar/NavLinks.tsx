'use client'
import { FaHistory } from "react-icons/fa";
import { IconType } from "react-icons";
import { MdDashboard, MdInfo } from "react-icons/md";
import { MdBatchPrediction } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";

type LinksProps<TExtended = boolean> = TExtended extends true
    ? {
        extended: TExtended;
        text: string;
        icon: IconType;
        active: boolean;
        sublinks: { text: string; to: string; active: boolean }[];
        to?: string;
    }
    : {
        extended: TExtended;
        text: string;
        to: string;
        icon: IconType;
        active: boolean;
    };

export const navLinks = (
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
                text: "Graph",
                icon: BsGraphUpArrow as IconType,
                to: "/admin/graph",
                active: currentPath.startsWith("/admin/graph"),
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
                extended: true,
                text: "Site Info",
                icon: MdInfo as IconType,
                active: currentPath.startsWith("/admin/info"),
                sublinks: [
                    {
                        text: "Page Info",
                        to: "/admin/info/pageInfo",
                        active: currentPath === "/admin/info/pageInfo",
                    },
                    {
                        text: "Testimonial",
                        to: "/admin/info/testimonial",
                        active: currentPath === "/admin/info/testimonial",
                    },
                    {
                        text: "FAQ",
                        to: "/admin/info/faq",
                        active: currentPath === "/admin/info/faq",
                    },
                    {
                        text: "Sports Category",
                        to: "/admin/info/sportCategory",
                        active: currentPath === "/admin/info/sportCategory",
                    },
                    {
                        text: "Message",
                        to: "/admin/info/message",
                        active: currentPath === "/admin/info/message",
                    },
                ],
            },
        ];
    }
};
