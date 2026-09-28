import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
    return (
        <div className="flex gap-8 flex-col">
            <div>
                <h1 className="text-3xl text-lightNavy font-bold">Projects</h1>
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
