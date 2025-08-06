```tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const properties = [
  {
    id: 1,
    name: "Hudson Hills Home",
    address: "3789 Hudson Hills Ln, Mason, OH",
    description: "Spacious 4-bed, 3-bath in top-rated school district.",
  },
  {
    id: 2,
    name: "Collins Mill Retreat",
    address: "8 Collins Mill Ct., Moorestown, NJ",
    description: "Charming colonial in quiet cul-de-sac with large yard.",
  },
];

export default function PropertyList() {
  return (
    <div className="space-y-6">
      {properties.map((property) => (
        <Card key={property.id}>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">{property.name}</h3>
            <p className="text-sm text-gray-500">{property.address}</p>
            <p className="text-gray-700 mt-2">{property.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```
