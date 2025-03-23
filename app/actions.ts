"use server"
import { requireUser } from "./utils/hooks"
import {parseWithZod} from "@conform-to/zod"
import { OnboardingSchema } from "./utils/zodSchema";
import { prisma } from "./utils/db";
export async function onBoardUser(formData:FormData) {
    const session = await requireUser();
    const submission = parseWithZod(formData,{
        schema: OnboardingSchema
    })
    if(submission.status!=="success") {
        return submission.reply();  
    }
    const data = await prisma.user.update({
        where: {
            id:session.user?.id,
        },
        data:{
            firstName: session.first
        }
    })
}