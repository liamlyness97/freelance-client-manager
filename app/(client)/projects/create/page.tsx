import CreateProjectForm from "@/components/ui/forms/CreateProjectForm";
import { fetchCurrentUser } from "@/lib/auth/session";
import { fetchAllCompanies } from "@/lib/data/companies";

export default async function CreateProject() {
    const companies = await fetchAllCompanies();
    const currentUser = await fetchCurrentUser();

    return (
        <div className="flex gap-8 flex-col">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl text-lightNavy font-bold">
                        Create Project
                    </h1>
                </div>
            </div>
            <CreateProjectForm
                companies={companies}
                userId={currentUser.user.id}
            />
        </div>
    );
}
