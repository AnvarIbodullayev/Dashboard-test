"use client";

import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const clients = [
    { id: 1, company: "Acme Corp", status: "active", plan: "Pro", price: "$99", connectedAt: "2024-01-15" },
    { id: 2, company: "Globex LLC", status: "paused", plan: "Basic", price: "$29", connectedAt: "2023-11-02" },
    { id: 3, company: "Umbrella Inc", status: "active", plan: "Enterprise", price: "$199", connectedAt: "2024-06-10" },
];

export default function ClientsPage() {
    const isLoading = false;

    return (
        <div className="p-6 w-full">
            <h1 className="text-2xl font-semibold mb-4">B2B Clients</h1>

            <Table className="w-full">
                <TableHeader>
                    <TableRow className="bg-gray-100 dark:bg-gray-800">
                        <TableHead>Company</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Plan</TableHead>
                        <TableHead>Monthly Price</TableHead>
                        <TableHead>Connected Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {isLoading
                        ? Array.from({ length: 3 }).map((_, idx) => (
                            <TableRow key={idx}>
                                <TableCell><div className="h-4 w-24 bg-gray-300 rounded animate-pulse" /></TableCell>
                                <TableCell><div className="h-4 w-16 bg-gray-300 rounded animate-pulse" /></TableCell>
                                <TableCell><div className="h-4 w-16 bg-gray-300 rounded animate-pulse" /></TableCell>
                                <TableCell><div className="h-4 w-16 bg-gray-300 rounded animate-pulse" /></TableCell>
                                <TableCell><div className="h-4 w-20 bg-gray-300 rounded animate-pulse" /></TableCell>
                                <TableCell><div className="h-8 w-20 bg-gray-300 rounded animate-pulse ml-auto" /></TableCell>
                            </TableRow>
                        ))
                        : clients.map(client => (
                            <TableRow key={client.id}>
                                <TableCell className="font-medium text-blue-600 hover:underline">
                                    <Link href={`/dashboard/clients/${client.id}`}>{client.company}</Link>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={client.status === "active" ? "default" : "secondary"}>
                                        {client.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{client.plan}</TableCell>
                                <TableCell>{client.price}</TableCell>
                                <TableCell>{client.connectedAt}</TableCell>
                                <TableCell className="text-right pr-0">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="sm" variant="outline">Actions</Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem className="text-red-500">Pause</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </div>
    );
}
