"use client"
import PrimaryBtn from "@/components/ui/buttons/primary";
import { createCompany, CreateCompanyState } from "@/lib/actions/company";
import { useActionState } from "react";

const initialState: CreateCompanyState = {}

export default function CreateCompanyModal() {
    const [state, formAction, isPending] = useActionState(createCompany, initialState);
    return (
      <div className="w-1/3 fixed mx-auto left-0 right-0 top-1/2 bg-white p-8 rounded-md -translate-y-1/2">
            <div className="flex flex-col gap-8">
                <div className="border-b border-lightNavy/15 pb-4">

              <h2 className="text-xl font-light text-lightNavy">
                  Create Company
                </h2>
                </div>
                <form className="flex flex-col gap-4" action={formAction}>
                  <label
                      htmlFor="company-name"
                      className="text-lightNavy"
                  >
                      Company name
                      <input
                          type="text"
                          name="company"
                          placeholder="Enter company name"
                          className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
                        />
                        {state.errors?.company && (
                            <p className="text-red-500 font-normal mt-1">
                                {state.errors.company[0]}
                            </p>
                        )}
                    </label>
                    <PrimaryBtn label="Create Company" type="submit" />
                </form>
          </div>
      </div>
    )
}
