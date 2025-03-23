import { Suspense } from "react";
import { signOut } from "../utils/auth";
import { prisma } from "../utils/db";
import { requireUser } from "../utils/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { InvoiceGraph } from "../components/InvoiceGraph";
import { EmptyState } from "../components/EmptyState";
import {RecentInvoices} from "../components/RecentInvoices"
async function getUserData(userId:string) {
    const data = await prisma.invoice.findMany({
        where:{
            id:userId,
        },
        select:{
            id:true,
        }
    })
    return data;
}

export default async function Dashboard() { 
    const session = await requireUser();
    const data = await getUserData(session.user?.id as string)
return(
        <>
            {data.lenght<1? (
                <EmptyState title="No invoices Found" 
                description="Create an Invoice to see it right here"
                buttontext="Create Invoice"
                href="/dashboard/invoices/create"/>
            ) : (
                <Suspense fallback={<Skeleton className="w-full h-full flex-1"/>}>
                <DashboardBlocks/>
                <div className="grid gap-4 lg:grid-cols-3 md:gap-8">
                    <InvoiceGraph/>
                    <RecentInvoices/>
                    </div>
                </div>
                </Suspense>
            )}
        </>
);
}