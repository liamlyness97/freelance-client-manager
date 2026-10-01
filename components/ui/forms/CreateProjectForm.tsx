"use client";
import PrimaryBtn from "@/components/ui/buttons/primary";
import { createProject, CreateProjectState } from "@/lib/actions/projects";
import { fetchCompaniesClients } from "@/lib/data/companies";
import { SelectUser } from "@/lib/db/schema/auth";
import { useActionState, useEffect, useState } from "react";

type Companies =
    | {
          id: string;
          companyName: string;
          createdAt: Date;
          updatedAt: Date;
      }[]
    | undefined;

const initialState: CreateProjectState = {};

export default function CreateProjectForm({
    companies,
    userId,
}: {
    companies: Companies;
    userId: string;
}) {
    const [state, formAction, isPending] = useActionState(
        createProject,
        initialState,
    );

    const [clients, setClients] = useState<SelectUser[]>([]);
    const [selectedCompany, setSelectedCompany] = useState("");

    useEffect(() => {
        if (!selectedCompany) return;

        let cancelled = false;

        const loadClients = async () => {
            const result = await fetchCompaniesClients(selectedCompany);
            if (!cancelled) setClients(result ?? []);
        };

        loadClients();

        return () => {
            cancelled = true;
        };
    }, [selectedCompany]);

    return (
        <form action={formAction} className="flex justify-baseline gap-8">
            <input type="hidden" name="userId" value={userId} />
            <div className="flex flex-col gap-4 w-full">
                <div className="bg-white rounded-lg p-8 w-full border border-lightNavy/15 flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-lightNavy">
                        Project Title
                    </h2>
                    <label htmlFor="title">
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter ticket title"
                            className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        />
                    </label>
                </div>
                <div className="bg-white rounded-lg p-8 w-full border border-lightNavy/15 flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold text-lightNavy">
                        Description
                    </h2>
                    <label htmlFor="description">
                        <textarea
                            name="description"
                            rows={10}
                            placeholder="Enter project description"
                            className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        />
                    </label>
                    <div>
                        <PrimaryBtn type="submit" label="Create Project" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-1/3 shrink-0">
                <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2  font-semibold text-lightNavy">
                    <h2 className="text-2xl">Status</h2>
                    <label htmlFor="status">
                        <select
                            name="status"
                            className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        >
                            <option value="null">Select a status</option>
                            <option value="pending">Pending</option>
                            <option value="in-progress">In-Progress</option>
                            <option value="complete">Complete</option>
                        </select>
                    </label>
                </div>
                <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2  font-semibold text-lightNavy">
                    <h2 className="text-2xl">Company</h2>
                    <label htmlFor="companyId">
                        <select
                            name="companyId"
                            className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                            onChange={(event) => {
                                setSelectedCompany(event.target.value);
                            }}
                        >
                            <option value="">Select a company</option>
                            {companies?.map((company) => (
                                <option key={company.id} value={company.id}>
                                    {company.companyName}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                {selectedCompany !== "" && clients.length !== 0 && (
                    <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2  font-semibold text-lightNavy">
                        <h2 className="text-2xl">Stakeholder</h2>
                        <label htmlFor="stakeholder">
                            <select
                                name="stakeholder"
                                className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                            >
                                <option value="">
                                    Select a main stakeholder
                                </option>
                                {clients &&
                                    clients.map((client) => (
                                        <option
                                            key={client.id}
                                            value={client.id}
                                        >
                                            {client.name}
                                        </option>
                                    ))}
                            </select>
                        </label>
                    </div>
                )}
            </div>
        </form>
    );
}
