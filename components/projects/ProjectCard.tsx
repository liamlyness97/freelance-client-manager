export type ProjectCard = {
    title: string;
    snippet?: string;
    status: string;
    stakeholder: string;
    dueDate: string;
};

export default function ProjectCard({
    title,
    snippet,
    status,
    stakeholder,
    dueDate,
}: ProjectCard) {
    return (
        <div className="w-full flex flex-col bg-white p-8 gap-4 rounded-md border border-lightNavy/15">
            <div className="flex justify-between">
                {title && (
                    <p className="text-xl font-semibold text-lightNavy">
                        {title}
                    </p>
                )}
                {status && (
                    <div className="px-4 flex items-center py-1 bg-lightNavy text-sm rounded-full text-white">
                        <p>{status}</p>
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
        </div>
    );
}
