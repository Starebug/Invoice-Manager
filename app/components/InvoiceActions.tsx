"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { CheckCircle, DownloadCloudIcon, Mail, MoreHorizontal, PencilIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface iAppProps{ 
    id: string
    status: string
}

export default function InvoiceAction({id,status}:iAppProps) {

    const handleSendReminder = () => {
        toast.promise(fetch(`/api/email/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "applicaion/json"
            }
        },
    ), {
        loading: "Sending Reminder Email",
        success: "Reminder Email Sent Successfully",
        error: "Failed to send reminder email"
    })
    }
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" variant="secondary">
                    <MoreHorizontal className="size-4"></MoreHorizontal>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem asChild> 
                <Link href={`/dashboard/invoices/${id}`} className="flex">
                <PencilIcon className="size-4 mr-2"/>Edit
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild> 
                <Link href={`/api/invoices/${id}`} className="flex" target="_blank">
                <DownloadCloudIcon className="size-4 mr-2"/>Download
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild> 
                <Link href="" className="flex">
                <Mail className="size-4 mr-2"/>Reminder Email
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild> 
                <Link href={`/dashboard/invoices/${id}/delete`} className="flex">
                <TrashIcon className="size-4 mr-2"/>Delete
                </Link>
                </DropdownMenuItem>
                {status!=="PAID"&&<DropdownMenuItem asChild>
                    <Link href={`/dashboard/invoices/${id}/paid`} className="flex">
                        <CheckCircle/> Mark as Paid
                    </Link>
                </DropdownMenuItem>}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}