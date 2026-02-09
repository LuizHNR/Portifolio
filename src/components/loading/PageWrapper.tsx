"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/components/loading/loading";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    let cancelled = false;

    setIsReady(false);

    const timer = setTimeout(() => {
      if (!cancelled) {
        setIsReady(true);
      }
    }, 2000); // tempo do loading

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [pathname]);

  if (!isReady) {
    return <Loading />;
  }

  return <>{children}</>;
}
