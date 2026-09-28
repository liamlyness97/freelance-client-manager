export default function Sidebar() {
    return (
        <div className="w-1/6 bg-white h-screen shrink-0 flex flex-col gap-12 border-r border-borderColour">
            {/* TODO: Revisit this */}
            <div className="py-6 px-8">
                <p className="font-bold text-2xl">Client Portal</p>
            </div>
            <div className="px-8 text-lg font-medium flex flex-col gap-4">
                <p>Dashboard</p>
                <p>Projects</p>
                <p>Tickets</p>
                <p>Invoices</p>
            </div>
            <div className="justify-self-end justify-end h-full py-6 text-lg font-medium flex flex-col gap-2 px-8">
                <p>Settings</p>
                <p>Logout</p>
            </div>
        </div>
    );
}
