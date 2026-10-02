"use client";
import { createTicket, CreateTicketState } from "@/lib/actions/tickets";
import { useActionState } from "react";
import PrimaryBtn from "../buttons/primary";

const initialState: CreateTicketState = {};

type ClientProjects =
    | {
          id: string;
          title: string;
          status: "pending" | "in-progress" | "complete";
          description: string | null;
          companyId: string;
          stakeholder: string;
          userId: string | null;
          createdAt: Date;
          updatedAt: Date;
      }[]
    | undefined;

export default function CreateTicketForm({
    clientId,
    companyId,
    clientProjects,
}: {
    clientId: string;
    companyId: string;
    clientProjects: ClientProjects;
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
                        {state.errors?.title && (
                            <p className="text-red-500 font-normal mt-1">
                                {state.errors.title[0]}
                            </p>
                        )}
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
                        {state.errors?.body && (
                            <p className="text-red-500 font-normal mt-1">
                                {state.errors.body[0]}
                            </p>
                        )}
                    </label>
                    <div>
                        <PrimaryBtn type="submit" label="Create Ticket" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-1/3 shrink-0">
                <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2  font-semibold text-lightNavy">
                    <h2 className="text-2xl">Priority</h2>
                    <label htmlFor="priority">
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
                        {state.errors?.priority && (
                            <p className="text-red-500 font-normal mt-1">
                                {state.errors.priority[0]}
                            </p>
                        )}
                    </label>
                </div>
                <div className="w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-2  font-semibold text-lightNavy">
                    <h2 className="text-2xl">Project</h2>
                    <label htmlFor="projectId">
                        <select
                            name="projectId"
                            className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        >
                            <option value="null">Select a project</option>
                            {clientProjects &&
                                clientProjects.map((project) => (
                                    <option key={project.id} value={project.id}>
                                        {project.title}
                                    </option>
                                ))}
                        </select>
                        {state.errors?.project && (
                            <p className="text-red-500 font-normal mt-1">
                                {state.errors.project[0]}
                            </p>
                        )}
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
