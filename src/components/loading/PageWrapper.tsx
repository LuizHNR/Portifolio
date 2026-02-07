"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/loading/loading";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000); // TEMPO TOTAL DO LOADING

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <Loading />; // página NÃO existe ainda
  }

  return <>{children}</>; // só aparece depois
}
