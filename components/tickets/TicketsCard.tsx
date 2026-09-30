import type { Priority, Status } from "@/lib/db/schema/tickets";

export default function TicketsCard({
    title,
    content,
    status,
    priority,
    createdAt,
    updatedAt,
}: {
    title: string;
    content: string;
    status: Status;
    priority: Priority;
    createdAt: Date;
    updatedAt: Date;
}) {
    return (
        <div className="grid grid-cols-12 w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex-col gap-8 ">
            <div className="col-span-8 flex flex-col gap-2 w-3/4">
                <p className="text-lightNavy text-2xl">{title}</p>
                <p className="text-sm">{content}</p>
            </div>
            <div className="col-span-1 items-center flex capitalize">
                <p>{status}</p>
            </div>
            <div className="col-span-1 items-center flex capitalize">
                <p>{priority}</p>
            </div>
            <div className="col-span-1 items-center flex">1h ago</div>
            <div className="col-span-1 items-center flex">2 days ago</div>
        </div>
    );
}
