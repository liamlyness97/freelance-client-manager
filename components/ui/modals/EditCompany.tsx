"use client";
import PrimaryBtn from "@/components/ui/buttons/primary";
import { editCompany, EditCompanyState } from "@/lib/actions/company";
import { useModal } from "@/components/ui/Modal";
import { useActionState, useEffect, useRef } from "react";

export type Company = {
    id: string;
    companyName: string;
};

const initialState: EditCompanyState = {};

export default function EditCompany({ company }: { company: Company }) {
    const { close } = useModal();
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction, isPending] = useActionState(
        editCompany,
        initialState,
    );

    useEffect(() => {
        if (state.message) {
            formRef.current?.reset();
            close();
        }
    });

    return (
        <div className="w-1/3 fixed mx-auto left-0  right-0 top-1/2 bg-white p-8 rounded-md -translate-y-1/2">
            <div className="flex flex-col gap-8">
                <div className="border-b border-lightNavy/15 pb-4">
                    <h2 className="text-xl font-light text-lightNavy">
                        Edit {company.companyName}
                    </h2>
                </div>
                <form
                    ref={formRef}
                    action={formAction}
                    className="flex flex-col gap-4"
                >
                    <div>
                        <h3 className="text-lg font-light text-lightNavy">
                            Company Details
                        </h3>
                    </div>
                    <input type="hidden" name="id" value={company.id} />
                    <label htmlFor="companyName" className="text-lightNavy">
                        Company name
                        <input
                            type="text"
                            name="companyName"
                            defaultValue={company.companyName ?? ""}
                            placeholder="Enter company name"
                            className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        />
                        {state.errors?.companyName && (
                            <p className="text-red-500 font-normal mt-1">
                                {state.errors.companyName[0]}
                            </p>
                        )}
                    </label>
                    <PrimaryBtn label="Save" type="submit" />
                    {state.message && <p>{state.message}</p>}
                </form>
            </div>
        </div>
    );
}
