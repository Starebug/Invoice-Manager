import {z} from 'zod'
export const OnboardingSchema = z.object({
    firstName:z.string().min(2,"First name is required"),
    lastName:z.string().min(2,"First name is required"),
    address:z.string().min(5,"Address is required")

})