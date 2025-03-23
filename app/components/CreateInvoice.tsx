import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateInvoice() {
    return(
        <Card className="w-full max-w-4xl mx-auto">
            <CardContent className="p-6">
                <div className="flex flex-col gap-1 w-fit">
                    <div className="flex items-center gap-4">
                    <Badge variant="secondary">Draft</Badge>
                    <Input placeholder="123"/>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="">
                        <Label>
                            
                        </Label>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}