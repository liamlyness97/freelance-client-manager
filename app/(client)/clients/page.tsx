import PrimaryBtn from "@/components/ui/buttons/primary";
import Modal from "@/components/ui/Modal";
import CreateClientModal from "@/components/ui/modals/CreateClientModal";
import CreateCompanyModal from "@/components/ui/modals/CreateCompany";
import { requireAdmin } from "@/lib/auth/session";
import { fetchAllClients } from "@/lib/data/clients";
import { fetchAllCompanies } from "@/lib/data/companies";

export default async function Clients() {
    await requireAdmin();

    const clients = await fetchAllClients();
    const companies = await fetchAllCompanies();

    return (
        <div className="flex gap-8 flex-col">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl text-lightNavy font-bold">
                        Clients
                    </h1>
                </div>
                <div className="flex gap-4">
                    <PrimaryBtn label="Create Client" command="show-modal" commandfor="create-client" />
                    <PrimaryBtn
                        label="Create Company"
                        command="show-modal"
                        commandfor="create-company"
                    />
                </div>
            </div>
            <div className="flex justify-between gap-8">
                <div className=" w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-4">
                    <h2 className="text-xl font-light text-lightNavy">
                        Client Accounts
                    </h2>
                    <div className="border border-lightNavy/15 rounded-lg">
                        <div className="grid grid-cols-6 border-b font-semibold text-lightNavy px-4 border-lightNavy/15 py-4">
                            <div className="col-span-3">
                                <p>Client name</p>
                            </div>
                            <div className="col-span-1">
                                <p>Company</p>
                            </div>
                            <div className="col-span-1">Status</div>
                            <div className="col-span-1">Action</div>
                        </div>
                        <div className="flex flex-col  overflow-y-scroll snap-both ">
                            {clients &&
                                clients.map((client) => (
                                    <div
                                        key={client.id}
                                        className="grid grid-cols-6  border-b last:border-none border-lightNavy/25 py-4 px-4 snap-mandatory text-sm"
                                    >
                                        <div className="col-span-3 text-lightNavy font-semibold">
                                            <p>{client.name}</p>
                                        </div>
                                        <div className="col-span-1">
                                            <p>Company</p>
                                        </div>
                                        <div className="col-span-1">
                                            Account Status
                                        </div>
                                        <div className="col-span-1">Action</div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className=" w-1/3 shrink-0 p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-4">
                    <h2 className="text-xl font-light text-lightNavy">
                        Companies
                    </h2>
                    <div className="border border-lightNavy/15 rounded-lg">
                        <div className="grid grid-cols-1 border-b font-semibold text-lightNavy px-4 border-lightNavy/15 py-4">
                            <div>
                                <p>Company Name</p>
                            </div>
                        </div>
                        <div className="flex flex-col  overflow-y-scroll snap-both ">
                            {companies && companies.map((company) => (

                                <div
                                    key={company.id}
                              className="grid grid-cols-1  border-b last:border-none border-lightNavy/25 py-4 px-4 snap-mandatory text-sm"
                          >
                              <div className=" text-lightNavy font-semibold">
                                  <p>{company.companyName}</p>
                              </div>
                          </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Modal id={"create-company"}>
                    <CreateCompanyModal />
                </Modal>
                <Modal id={"create-client"}>
                    <CreateClientModal companies={companies ?? []} />
                </Modal>
            </div>
        </div>
    );
}
