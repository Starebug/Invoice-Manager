import { prisma } from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { emailClient } from "@/app/utils/mailTrap";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request: Request, {params}: {params: Promise<{invoiceId:string}>}) {
    const session = await requireUser();
    const {invoiceId} = await params;
    try{
    const invoiceData = await prisma.invoice.findUnique({
        where: {
            id: invoiceId,
            userId: session.user?.id
        }
    })
    if(!invoiceData) return NextResponse.json({message: "Invoice Not found"},{status:404})

    const sender = {
            email: "hello@demomailtrap.co",
            name: "Mailtrap Test",
    };

    emailClient.send({
        from: sender,
        to: [{email: "22326@iiitu.ac.in"}],
        subject: 'Reminder Invoice Payment',
        text: "Hey you forgot to pay the invoice"
    })
    return NextResponse.json({success:true});}
    catch(error) {
        return NextResponse.json({error: "Failed to get email reminder"}, {status: 500})
    }
}