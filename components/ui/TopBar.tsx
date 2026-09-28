export default function TopBar() {
    return (
        <div className="w-full bg-white flex justify-between items-center py-4 px-8 border-b border-borderColour">
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search or type a command"
                        className="bg-background  px-4 py-2 placeholder:text-sm placeholder:font-medium rounded"
                    />
                </form>
            </div>
            <div>
                <p>Logged in user</p>
            </div>
        </div>
    );
}
