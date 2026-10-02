import { fetchTicket } from "@/lib/data/tickets";
import { fetchCurrentUser } from "@/lib/auth/session";
import { notFound } from "next/navigation";
import timeAgo, { formatTimeAgo } from "@/lib/helpers/time-ago";
import { fetchProject } from "@/lib/data/projects";

export default async function ViewTicket({
    params,
}: {
    params: Promise<{ ticketId: string }>;
}) {
    const { ticketId } = await params;
    const user = await fetchCurrentUser();
    const ticket = await fetchTicket(ticketId);
    const project = await fetchProject(ticket?.projectId ?? "");

    const isAdmin = user.user.role === "admin";
    const isOwner = user.user.id === ticket?.clientId;

    if (!isAdmin && !isOwner) notFound();

    return (
        <div className="flex gap-8 flex-col">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl text-lightNavy font-bold">
                        {ticket?.title}
                    </h1>
                </div>
            </div>
            <div className="flex justify-between gap-8 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2   text-lightNavy">
                        <h2 className="text-2xl font-semibold">Details</h2>
                        <div>
                            <p>{ticket?.content}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-1/3 shrink-0">
                    <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2   text-lightNavy">
                        <h2 className="text-2xl font-semibold">Priority</h2>
                        <p className="capitalize">{ticket?.priority}</p>
                    </div>
                    <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2   text-lightNavy">
                        <h2 className="text-2xl font-semibold">Project</h2>
                        <p className="capitalize">{project?.projects.title}</p>
                    </div>
                    <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2   text-lightNavy">
                        <h2 className="text-2xl font-semibold">Created At</h2>
                        {ticket && (
                            <p>
                                {formatTimeAgo(timeAgo(ticket.createdAt)).label}
                            </p>
                        )}
                    </div>
                    <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2   text-lightNavy">
                        <h2 className="text-2xl font-semibold">Updated At</h2>
                        {ticket && (
                            <p>
                                {formatTimeAgo(timeAgo(ticket.updatedAt)).label}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
