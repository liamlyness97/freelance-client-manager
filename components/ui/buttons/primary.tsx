export default function PrimaryBtn({
    label,
    command,
    commandfor,
    type
}: {
    label: string;
    command?: string;
    commandfor?: string;
    type?: 'button' | 'submit' | 'reset'
}) {
    return (
        <button
            type={type ?? 'button'}
            command={command}
            commandfor={commandfor}
            className="bg-lightNavy text-white px-4 py-2 self-start rounded-md text-sm cursor-pointer hover:opacity-75 duration-300"
        >
            {label}
        </button>
    );
}
