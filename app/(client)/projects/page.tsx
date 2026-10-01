import ProjectCard from "@/components/projects/ProjectCard";
import PrimaryBtn from "@/components/ui/buttons/primary";
import { fetchCurrentUser } from "@/lib/auth/session";
import Link from "next/link";

export default async function Projects() {
    const currentUser = await fetchCurrentUser();
    return (
        <div className="flex gap-8 flex-col">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl text-lightNavy font-bold">
                        Projects
                    </h1>
                </div>
                {currentUser.user.role === "admin" && (
                    <div>
                        <Link href="/projects/create">
                            <PrimaryBtn label="Create Project" />
                        </Link>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-3">
                <ProjectCard
                    title="Random Project"
                    status="Pending"
                    dueDate="13/10/2026"
                    stakeholder="Liam Lyness"
                    snippet="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis enim modi sed cum dolore, voluptate laudantium
                quasi harum velit corrupti"
                />
            </div>
        </div>
    );
}
