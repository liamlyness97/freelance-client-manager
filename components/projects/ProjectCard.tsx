import Link from "next/link";

export type ProjectCard = {
    id: string;
    title: string;
    snippet?: string;
    status: string;
    stakeholder: string;
    dueDate: string;
};

export default function ProjectCard({
    id,
    title,
    snippet,
    status,
    stakeholder,
    dueDate,
}: ProjectCard) {
    return (
        <Link
            href={`/projects/${id}`}
            className="w-full flex flex-col bg-white p-8 gap-4 rounded-md border border-lightNavy/15 hover:drop-shadow-sm hover:-translate-y-0.5 cursor-pointer duration-300"
        >
            <div className="flex justify-between">
                {title && (
                    <p className="text-xl font-semibold text-lightNavy">
                        {title}
                    </p>
                )}
                {status && (
                    <div className="px-4 flex items-center py-1 bg-lightNavy text-sm rounded-full text-white">
                        <p className="capitalize">{status}</p>
                    </div>
                )}
            </div>
            <div>
                <p className="text-sm">{snippet}</p>
            </div>
            <div className="text-sm flex gap-4">
                {stakeholder && (
                    <div>
                        <p>{stakeholder}</p>
                    </div>
                )}
                {dueDate && (
                    <div>
                        <p>{dueDate}</p>
                    </div>
                )}
            </div>
        </Link>
    );
}
