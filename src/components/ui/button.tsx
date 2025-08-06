import React from "react";

export function Button({ children, className }: { children: React.ReactNode; className?: string }) {
  return <button className={`px-4 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 ${className}`}>{children}</button>;
}
