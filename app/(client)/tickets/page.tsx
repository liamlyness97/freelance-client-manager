import TicketsCard from "@/components/tickets/TicketsCard";
import PrimaryBtn from "@/components/ui/buttons/primary";
import { fetchAllTickets } from "@/lib/data/tickets";
import Link from "next/link";

export default async function Tickets() {
    const tickets = await fetchAllTickets();

    return (
        <div className="flex gap-8 flex-col">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl text-lightNavy font-bold">
                        Tickets
                    </h1>
                </div>
                <div>
                    <Link href="/tickets/create">
                        <PrimaryBtn label="Create Ticket" />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-12 w-full py-4 px-8 bg-white rounded-lg border border-lightNavy/15 flex-col gap-8  font-semibold text-lightNavy">
                    <div className="col-span-8">Title</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-1">Priority</div>
                    <div className="col-span-1">Updated</div>
                    <div className="col-span-1">Created at</div>
                </div>
                {tickets &&
                    tickets.map((ticket) => (
                        <TicketsCard
                            key={ticket.id}
                            title={ticket.title}
                            content={ticket.content ?? ""}
                            status={ticket.status}
                            priority={ticket.priority}
                            createdAt={ticket.createdAt}
                            updatedAt={ticket.updatedAt}
                        />
                    ))}
            </div>
        </div>
    );
}
