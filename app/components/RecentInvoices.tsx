import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "../utils/db";
import { requireUser } from "../utils/hooks";
import { formatCurrency } from "../utils/formatCurrency";

async function getData(userId: string) {
  const data = await prisma.invoice.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      clientName: true,
      clientEmail: true,
      total: true,
      currency: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 7,
  });

  return data;
}

export async function RecentInvoices() {
  const session = await requireUser();
  const data = await getData(session.user?.id as string);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Invoices</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center md:gap-2 lg:gap-2 p-2 rounded-lg overflow-hidden"
            >
              <Avatar className="hidden sm:flex shrink-0 size-9">
                <AvatarFallback>{item.clientName.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {item.clientName}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {item.clientEmail}
                </p>
              </div>
              <div className="font-medium text-right whitespace-nowrap">
                +{formatCurrency({ amount: item.total, currency: item.currency as any })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}