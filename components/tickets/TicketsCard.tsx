import type { Priority, Status } from "@/lib/db/schema/tickets";
import timeAgo, { formatTimeAgo } from "@/lib/helpers/time-ago";
import Link from "next/link";

export default function TicketsCard({
    id,
    title,
    content,
    status,
    priority,
    createdAt,
    updatedAt,
}: {
    id: string;
    title: string;
    content: string;
    status: Status;
    priority: Priority;
    createdAt: Date;
    updatedAt: Date;
}) {
    return (
        <Link
            href={`/tickets/${id}`}
            className="grid grid-cols-12 w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex-col gap-8 hover:drop-shadow cursor-pointer duration-200"
        >
            <div className="col-span-8 flex flex-col gap-2 w-3/4">
                <p className="text-lightNavy text-2xl">{title}</p>
                <p className="text-sm">{content}</p>
            </div>
            <div className="col-span-1 items-center flex capitalize text-sm">
                <p>{status}</p>
            </div>
            <div className="col-span-1 items-center flex capitalize text-sm">
                <p>{priority}</p>
            </div>
            <div className="col-span-1 items-center flex text-sm">
                {formatTimeAgo(timeAgo(createdAt)).label}
            </div>
            <div className="col-span-1 items-center flex text-sm">
                {formatTimeAgo(timeAgo(updatedAt)).label}
            </div>
        </Link>
    );
}
