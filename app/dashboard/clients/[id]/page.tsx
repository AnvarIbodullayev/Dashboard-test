"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

export default function ClientDetailsPage() {
  const params = useParams();
  const clientId = params.id;

  const client = {
    id: clientId,
    company: clientId === "1" ? "Acme Corp" : clientId === "2" ? "Globex LLC" : "Umbrella Inc",
    plan: clientId === "1" ? "Pro" : clientId === "2" ? "Basic" : "Enterprise",
    price: clientId === "1" ? "$99" : clientId === "2" ? "$29" : "$199",
    status: clientId === "2" ? "paused" : "active",
    connectedAt: clientId === "1" ? "2024-01-15" : clientId === "2" ? "2023-11-02" : "2024-06-10",
  };

  const [status, setStatus] = useState(client.status);

  const connectedObjects = ["Object A", "Object B", "Object C"];

  return (
    <div className="p-6 w-full max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">{client.company}</h1>

      <div className="space-y-2">
        <p><strong>Plan:</strong> {client.plan}</p>
        <p><strong>Monthly Price:</strong> {client.price}</p>
        <p>
          <strong>Status:</strong>{" "}
          <Badge
            variant={status === "active" ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => setStatus(status === "active" ? "paused" : "active")}
          >
            {status}
          </Badge>
        </p>
        <p><strong>Connected Date:</strong> {client.connectedAt}</p>
      </div>

      <div className="mt-4">
        <p className="font-medium mb-2">Connected Objects:</p>
        <ul className="list-disc list-inside">
          {connectedObjects.map((obj, idx) => (
            <li key={idx}>{obj}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <Button onClick={() => history.back()}>Back</Button>
      </div>
    </div>
  );
}
