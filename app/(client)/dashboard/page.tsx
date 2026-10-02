export default function Dashboard() {
    return (
        <div className="flex gap-8 flex-col">
            <div>
                <h1 className="text-3xl text-lightNavy font-bold">Dashboard</h1>
            </div>

            <div className="flex justify-between flex-col lg:flex-row gap-4 lg:gap-8">
                <div className="w-full flex flex-col gap-4 lg:gap-8">
                    <div className="p-8 bg-white rounded-lg border border-lightNavy/15">
                        <p className="font-bold text-2xl text-lightNavy">
                            Overview
                        </p>
                    </div>
                    <div className="flex w-full flex-col lg:flex-row gap-4 lg:gap-8">
                        <div className="p-8 bg-white rounded-lg w-full border border-lightNavy/15">
                            <p className="font-bold text-2xl text-lightNavy">
                                Open Tickets
                            </p>
                        </div>
                        <div className="p-8 bg-white rounded-lg w-full border border-lightNavy/15">
                            <p className="font-bold text-2xl text-lightNavy">
                                Latest Deployments
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/4 shrink-0 h-full flex flex-col gap-4 lg:gap-8">
                    <div className="p-8 rounded-lg bg-white border border-lightNavy/15">
                        <p className="font-bold text-2xl text-lightNavy">
                            Invoice History
                        </p>
                    </div>
                    <div className="p-8 rounded-lg bg-white border border-lightNavy/15">
                        <p className="font-bold text-2xl text-lightNavy">
                            Team members
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
