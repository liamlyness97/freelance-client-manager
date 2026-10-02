import { fetchProject } from "@/lib/data/projects";

export default async function Project({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const project = await fetchProject(id);

    return (
        <div className="flex gap-8 flex-col">
            <div>
                <h1 className="text-3xl text-lightNavy font-bold">
                    {project?.projects?.title ?? ""}
                </h1>
            </div>
            <div className="flex justify-between gap-8">
                <div className="w-full flex flex-col gap-8">
                    <div className="p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-4">
                        <p className="font-bold text-2xl text-lightNavy">
                            Overview
                        </p>
                        <div>
                            <p>{project?.projects?.description}</p>
                        </div>
                    </div>
                    <div className="flex w-full gap-8">
                        <div className="p-8 bg-white rounded-lg w-full border border-lightNavy/15">
                            <p className="font-bold text-2xl text-lightNavy">
                                Feedback Tickets
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 shrink-0 h-full flex flex-col gap-8">
                    <div className="p-8 rounded-lg flex flex-col gap-2 bg-white border border-lightNavy/15">
                        <p className="font-bold text-2xl text-lightNavy">
                            Company
                        </p>
                        <p className="text-lg">
                            {project?.company.companyName}
                        </p>
                    </div>
                    <div className="p-8 rounded-lg flex flex-col gap-2 bg-white border border-lightNavy/15">
                        <p className="font-bold text-2xl text-lightNavy">
                            Stakeholder
                        </p>
                        <p className="text-lg">{project?.user.name}</p>
                    </div>
                    <div className="p-8 rounded-lg bg-white border border-lightNavy/15">
                        <p className="font-bold text-2xl text-lightNavy">
                            Invoice History
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
