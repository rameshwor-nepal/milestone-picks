'use client'
import { ic_dashboard } from "react-icons-kit/md/ic_dashboard";
import { ic_drafts } from "react-icons-kit/md/ic_drafts";
import { ic_assignment } from "react-icons-kit/md/ic_assignment";

type LinksProps<TExtended = boolean> = TExtended extends true
    ? {
        extended: TExtended;
        text: string;
        icon: React.ReactNode;
        active: boolean;
        sublinks: { text: string; to: string; active: boolean }[];
        to?: string;
    }
    : {
        extended: TExtended;
        text: string;
        to: string;
        icon: React.ReactNode;
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
                icon: ic_dashboard as React.ReactNode,
                to: "/admin/dashboard",
                active: currentPath === "/admin/dashboard",
            },
            // {
            //     extended: false,
            //     text: "Graph",
            //     icon: ic_drafts as React.ReactNode,
            //     to: "/admin/graph",
            //     active: currentPath.startsWith("/admin/graph"),
            // },
            // {
            //     extended: false,
            //     text: "Betting info",
            //     icon: ic_drafts as React.ReactNode,
            //     to: "/bettingInfo",
            //     active: currentPath.startsWith("/admin/bettingInfo"),
            // },
            // {
            //     extended: false,
            //     text: "Prediction",
            //     icon: ic_assignment as React.ReactNode,
            //     to: "Prediction",
            //     active: currentPath.startsWith("/admin/prediction"),
            // },
            {
                extended: true,
                text: "Site Info",
                icon: ic_assignment as React.ReactNode,
                active: currentPath.startsWith("/admin/info"),
                sublinks: [
                    {
                        text: "Page Info",
                        to: "/admin/info/pageInfo",
                        active: currentPath === "/admin/info/pageInfo",
                    },
                    // {
                    //     text: "Suchi Darta Form",
                    //     to: "/suchi-darta/add",
                    //     active: currentPath === "/suchi-darta/add",
                    // },
                ],
            },
        ];
    }
};
