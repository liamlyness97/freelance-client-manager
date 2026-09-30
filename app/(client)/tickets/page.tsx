export default function Tickets() {
    return (
      <div className="flex gap-8 flex-col">
        <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl text-lightNavy font-bold">
                  Tickets
              </h1>
            </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-12 w-full py-4 px-8 bg-white rounded-lg border border-lightNavy/15 flex-col gap-8  font-semibold text-lightNavy">
                    <div className="col-span-8">
                        Title
                    </div>
                    <div className="col-span-1">
                        Status
                    </div>
                    <div className="col-span-1">
                        Priority
                    </div>
                    <div className="col-span-1">
                        Updated
                    </div>
                    <div className="col-span-1">
                        Created at
                    </div>
                </div>
                <div className="grid grid-cols-12 w-full p-8 bg-white rounded-lg border border-lightNavy/15 flex-col gap-8 ">
                    <div className="col-span-8 flex flex-col gap-2 w-3/4">
                        <p className="text-lightNavy text-2xl">This is the ticket title</p>
                        <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptates nemo nam odio consectetur consequatur quaerat animi maxime ratione vel inventore repellat aspernatur porro voluptas dolores earum optio vero natus.</p>
                    </div>
                    <div className="col-span-1 items-center flex ">
                        <p>Pending</p>
                    </div>
                    <div className="col-span-1 items-center flex">
                        <p>High</p>
                    </div>
                    <div className="col-span-1 items-center flex">
                        1h ago
                    </div>
                    <div className="col-span-1 items-center flex">
                        2 days ago
                    </div>
                </div>
            </div>
      </div>
    )
}
