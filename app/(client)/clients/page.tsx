import ClientRow from "@/components/clients/ClientRow";
import PrimaryBtn from "@/components/ui/buttons/primary";
import Modal from "@/components/ui/Modal";
import CreateClientModal from "@/components/ui/modals/CreateClientModal";
import CreateCompanyModal from "@/components/ui/modals/CreateCompany";
import EditCompany from "@/components/ui/modals/EditCompany";
import { requireAdmin } from "@/lib/auth/session";
import { fetchAllClients } from "@/lib/data/clients";
import { fetchAllCompanies } from "@/lib/data/companies";

export default async function Clients() {
  await requireAdmin();

  const clients = await fetchAllClients();
  const companies = await fetchAllCompanies();

  return (
    <div className="flex gap-8 flex-col">
      <div className="flex justify-between flex-col lg:flex-row items-start gap-4 lg:items-center">
        <div>
          <h1 className="text-3xl text-lightNavy font-bold">Clients</h1>
        </div>
        <div className="flex gap-4">
          <PrimaryBtn
            label="Create Client"
            command="show-modal"
            commandfor="create-client"
          />
          <PrimaryBtn
            label="Create Company"
            command="show-modal"
            commandfor="create-company"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className=" w-full p-4 lg:p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-4">
          <h2 className="text-xl font-light text-lightNavy">Client Accounts</h2>
          <div className="border border-lightNavy/15 rounded-lg">
            <div className="grid grid-cols-6 border-b font-semibold text-lightNavy px-4 border-lightNavy/15 py-4">
              <div className="col-span-3">
                <p>Client name</p>
              </div>
              <div className="hidden lg:flex col-span-1">
                <p>Company</p>
              </div>
              <div className="hidden lg:flex col-span-1">Status</div>
              <div className="hidden lg:flex col-span-1">Action</div>
            </div>
            <div className="flex flex-col overflow-y-scroll snap-both ">
              {clients &&
                clients.map((client) => (
                  <ClientRow
                    key={client.id}
                    name={client.name}
                    company={client.company.companyName}
                    email={client.email}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 shrink-0 p-4 lg:p-8 bg-white rounded-lg border border-lightNavy/15 flex flex-col gap-4">
          <h2 className="text-xl font-light text-lightNavy">Companies</h2>
          <div className="border border-lightNavy/15 rounded-lg">
            <div className="grid grid-cols-1 border-b font-semibold text-lightNavy px-4 border-lightNavy/15 py-4">
              <div>
                <p>Company Name</p>
              </div>
            </div>
            <div className="flex flex-col  overflow-y-scroll snap-both ">
              {companies &&
                companies.map((company) => (
                  <div
                    key={company.id}
                    className="grid grid-cols-1  border-b last:border-none border-lightNavy/25 py-4 px-4 snap-mandatory text-sm"
                  >
                    <div className=" text-lightNavy flex justify-between items-center font-semibold">
                      <div>
                        <p>{company.companyName}</p>
                      </div>
                      <button
                        command="show-modal"
                        commandfor={`edit-company-${company.id}`}
                        className="flex justify-end items-center gap-0.5 cursor-pointer h-full w-fit"
                      >
                        <div className="w-1 h-1 rounded-full bg-lightNavy"></div>
                        <div className="w-1 h-1 rounded-full bg-lightNavy"></div>
                        <div className="w-1 h-1 rounded-full bg-lightNavy"></div>
                      </button>
                    </div>
                    <Modal id={`edit-company-${company.id}`}>
                      <EditCompany key={company.id} company={company} />
                    </Modal>
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
