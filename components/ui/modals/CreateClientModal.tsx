"use client"
import type { Company } from "@/lib/db/schema/companies"
import PrimaryBtn from "../buttons/primary"
import { CreateClient, CreateClientState } from "@/lib/actions/auth"
import { useActionState, useEffect, useRef } from "react"
import { useModal } from "@/components/ui/Modal"

const initialState: CreateClientState = {}

export default function CreateClientModal({ companies }: { companies: Company[] }) {
    const { close } = useModal();
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction, isPending] = useActionState(CreateClient, initialState);

    useEffect(() => {
        if (state.message) {
            formRef.current?.reset()
            close()
        }
    }, [state])

    return (
    <div className="w-1/3 fixed mx-auto left-0 right-0 top-1/2 bg-white p-8 rounded-md -translate-y-1/2">
          <div className="flex flex-col gap-8">
              <div className="border-b border-lightNavy/15 pb-4">
                <h2 className="text-xl font-light text-lightNavy">
                  Create Client
                </h2>
                </div>
                <form ref={formRef} className="flex flex-col gap-4" action={formAction}>
                  <label
                      htmlFor="name"
                      className="text-lightNavy"
                  >
                      Name
                      <input
                          type="text"
                          name="name"
                          placeholder="Enter client name"
                          className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        />
                        {state.errors?.name && (
                            <p className="text-red-500 font-normal mt-1">
                                {state.errors.name[0]}
                            </p>
                        )}
                    </label>
                    <label
                        htmlFor="email"
                        className="text-lightNavy"
                    >
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter client email address"
                            className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        />
                        {state.errors?.email && (
                            <p className="text-red-500 font-normal mt-1">
                                {state.errors.email[0]}
                            </p>
                        )}
                    </label>
                    <label
                        htmlFor="password"
                        className="text-lightNavy"
                    >
                        Password
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        />
                        {state.errors?.password && (
                            <p className="text-red-500 font-normal mt-1">
                                {state.errors.password[0]}
                            </p>
                        )}
                      </label>
                    <label
                        htmlFor="confirmPassword"
                        className="text-lightNavy"
                    >
                        Confirm Password
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Re-Enter password"
                            className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        />
                        {state.errors?.confirmPassword && (
                            <p className="text-red-500 font-normal mt-1">
                                {state.errors.confirmPassword[0]}
                            </p>
                        )}
                    </label>

                    <label
                        htmlFor="company"
                        className="text-lightNavy"
                    >
                        Select Company
                        <select
                            name="company"
                            className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        >
                            <option value="null">Select a company</option>
                            {companies && companies.map((company) => (
                              <option key={company.id} value={company.id}>{company.companyName}</option>
                            ))}
                        </select>
                        {state.errors?.company && (
                            <p className="text-red-500 font-normal mt-1">
                                {state.errors.company[0]}
                            </p>
                        )}
                    </label>

                    <PrimaryBtn label="Create Client" type="submit" />
                     {state.message && <p>{state.message}</p>}
                </form>
        </div>
    </div>
    )
}
