// app/components/DarkToaster.tsx
"use client"

import { Toaster as SonnerToaster } from "sonner"

export function DarkToaster() {
  return (
    <SonnerToaster
      position="top-right"
      theme="dark"
      richColors
      closeButton
      duration={40000}
      expand={true}
      visibleToasts={3}
      className="toaster group"
      toastOptions={{
        className: "group-[.toaster]:!rounded-xl group-[.toaster]:!border group-[.toaster]:border-gray-800/50 group-[.toaster]:!bg-gradient-to-br group-[.toaster]:from-gray-900/95 group-[.toaster]:to-gray-950/95 group-[.toaster]:!backdrop-blur-xl group-[.toaster]:shadow-2xl",
        style: {
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        },
        descriptionClassName: "text-gray-300",
        actionButtonStyle: {
          background: "linear-gradient(135deg, #2563eb 0%, #0891b2 100%)",
          color: "white",
          fontWeight: "600",
          borderRadius: "0.5rem",
        },
        cancelButtonStyle: {
          background: "hsl(215 25% 27% / 0.8)",
          color: "hsl(210 40% 98%)",
          border: "1px solid hsl(217.2 32.6% 17.5%)",
          borderRadius: "0.5rem",
        },
      }}
    />
  )
}