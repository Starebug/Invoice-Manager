import { Suspense } from "react";
import { prisma } from "../utils/db";
import { requireUser } from "../utils/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { DashboardBlocks } from "../components/DashboardBlocks";
import { InvoiceGraph } from "../components/InvoiceGraph";
import { EmptyState } from "../components/EmptyState";
import { RecentInvoices } from "../components/RecentInvoices"
async function getUserData(userId:string) {
    const data = await prisma.invoice.findMany({
        where:{
            userId:userId,
        },
        select:{
            id:true,
        }
    })
    return data;
}

export default async function Dashboard() {
    // await new Promise((resolve)=> setTimeout(resolve,2000))
    const session = await requireUser();
    const data = await getUserData(session.user?.id as string);
    return (
        <div className="w-full max-w-full px-4"> {/* Added padding for spacing */}
            {data.length < 1 ? (
                <EmptyState 
                    title="No invoices Found" 
                    description="Create an Invoice to see it right here"
                    buttontext="Create Invoice"
                    href="/dashboard/invoices/create"
                />
            ) : (
                <Suspense fallback={<Skeleton className="w-full h-[500px] flex-1"/>}>
                    <DashboardBlocks />
                    <div className="grid w-full gap-2 md:gap-6 lg:gap-6 grid-cols-1 lg:grid-cols-3">
                        <InvoiceGraph/> 
                        <RecentInvoices/>
                    </div>
                </Suspense>
            )}
        </div>
    );
}
