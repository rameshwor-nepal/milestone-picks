// import type { Metadata } from "next";
import AdminLayout from "@/components/adminCom/layout/AdminLayout";

// export const metadata: Metadata = {
//   title: "Milestone Picks",
//   description: "Number one betting picks",
// };

export default function MAdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AdminLayout>
            {children}
        </AdminLayout>


    );
}
