import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { SubmitButton } from "../components/SubmitButton";

export default function Onboarding() {
    return(
        <div className="min-h-screen  w-screen flex items-center justify-center">
            <Card className="max-w-sm mx-auto">
                <CardHeader>
                    <CardTitle className="text-xl">You are almost finished</CardTitle>
                    <CardDescription>Enter Your information to create an account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-4" >
                        <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <Label>First Name</Label>
                            <Input placeholder="John"/>
                        </div>
                        <div className="grid gap-2">
                            <Label>Last Name</Label>
                            <Input placeholder="Doe"/>
                        </div>
                        </div>
                        <div className="grid gap-2">
                            <Label>Address</Label>
                            <Input placeholder="Street-xyz"/>
                        </div>
                        <SubmitButton text="Finish Onboarding"/>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}