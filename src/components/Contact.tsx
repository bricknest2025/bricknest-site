```tsx
import React from "react";
import { Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="space-y-4 text-gray-700">
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4" />
        <span>office@bricknest.com</span>
      </div>
      <div className="flex items-center gap-2">
        <Home className="w-4 h-4" />
        <span>8 Collins Mill Ct., Moorestown, NJ 08057</span>
      </div>
      <Button className="mt-4">Send a Message</Button>
    </div>
  );
}
```
