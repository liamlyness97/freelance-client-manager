import CreateProjectForm from "@/components/ui/forms/CreateProjectForm";
import { fetchAllCompanies } from "@/lib/data/companies";

export default async function CreateProject() {
    const companies = await fetchAllCompanies();

    return (
        <div className="flex gap-8 flex-col">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl text-lightNavy font-bold">
                        Create Project
                    </h1>
                </div>
            </div>
            <CreateProjectForm companies={companies} />
        </div>
    );
}
