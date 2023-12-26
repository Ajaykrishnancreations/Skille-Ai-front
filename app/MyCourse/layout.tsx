"use client";
import SideNav from "../component/SideNav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
        <SideNav>
        <section>{children}</section>
        </SideNav>
        </>
    );
}
