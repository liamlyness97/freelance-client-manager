import CreateTicketForm from "@/components/ui/forms/CreateTicketForm";
import { fetchCurrentUser } from "@/lib/auth/session";
import { user } from "@/lib/db/schema/auth";

export default async function CreateTicket() {
    const currentUser = await fetchCurrentUser();

    return (
        <div className="flex gap-8 flex-col">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl text-lightNavy font-bold">
                        Create Ticket
                    </h1>
                </div>
            </div>
            {user && (
                <CreateTicketForm
                    clientId={currentUser.user.id ?? ""}
                    companyId={currentUser?.company.id ?? ""}
                />
            )}
        </div>
    );
}
