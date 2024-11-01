// components/providers/SessionProvider.tsx
"use client";

import { SessionProvider } from "next-auth/react";

const Providers = ({ children, session }: { children: React.ReactNode; session: any }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Providers;
