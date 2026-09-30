"use client";
import { createTicket, CreateTicketState } from "@/lib/actions/tickets";
import { useActionState } from "react";
import PrimaryBtn from "../buttons/primary";

const initialState: CreateTicketState = {};

export default function CreateTicketForm({
    clientId,
    companyId,
}: {
    clientId: string;
    companyId: string;
}) {
    const [state, formAction, isPending] = useActionState(
        createTicket,
        initialState,
    );
    return (
        <form action={formAction} className="flex justify-between gap-8 w-full">
            <input type="hidden" name="clientId" value={clientId} />
            <input type="hidden" name="companyId" value={companyId} />
            <div className="flex flex-col gap-4 w-full">
                <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2  font-semibold text-lightNavy">
                    <h2 className="text-2xl">Ticket Title</h2>
                    <label htmlFor="title">
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter ticket title"
                            className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        />
                    </label>
                </div>
                <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2  font-semibold text-lightNavy">
                    <h2 className="text-2xl">Details</h2>
                    <label htmlFor="body">
                        <textarea
                            name="body"
                            rows={10}
                            placeholder="Enter ticket details"
                            className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        />
                    </label>
                    <div>
                        <PrimaryBtn type="submit" label="Create Ticket" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-1/3 shrink-0">
                <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2  font-semibold text-lightNavy">
                    <h2 className="text-2xl">Priority</h2>
                    <label htmlFor="title">
                        <select
                            name="priority"
                            className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        >
                            <option value="null">Select a priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="critical">Critical</option>
                        </select>
                    </label>
                </div>
                <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2  font-semibold text-lightNavy">
                    <h2 className="text-2xl">Assignee</h2>
                    <p className="font-normal">
                        This ticket will be assigned to Liam Lyness
                    </p>
                </div>
            </div>
        </form>
    );
}
