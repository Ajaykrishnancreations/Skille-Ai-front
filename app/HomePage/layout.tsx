"use client";
import Header from "../component/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
        <Header>
        <section>{children}</section>
        </Header>
        </>
    );
}
