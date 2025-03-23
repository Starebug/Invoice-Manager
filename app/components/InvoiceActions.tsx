"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DownloadCloudIcon, Mail, MoreHorizontal, PencilIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

export default function InvoiceAction() {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" variant="secondary">
                    <MoreHorizontal className="size-4"></MoreHorizontal>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem asChild> 
                <Link href="" className="flex">
                <PencilIcon className="size-4 mr-2"/>edit
                </Link>
                </DropdownMenuItem><DropdownMenuItem asChild> 
                <Link href="" className="flex">
                <DownloadCloudIcon className="size-4 mr-2"/>Download
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild> 
                <Link href="" className="flex">
                <Mail className="size-4 mr-2"/>Reminder Email
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild> 
                <Link href="" className="flex">
                <TrashIcon className="size-4 mr-2"/>Delete
                </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}