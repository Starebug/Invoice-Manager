import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import InvoiceAction from "./InvoiceActions";

export function InvoiceList() {
    return(
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Invoice Id</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="text-right">
                        <InvoiceAction/>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}