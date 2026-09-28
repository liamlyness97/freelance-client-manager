export default function PrimaryBtn({ label }: { label: string }) {
    return (
        <button className="bg-lightNavy text-white px-4 py-2 rounded-md text-sm cursor-pointer hover:opacity-75 duration-300">
            {label}
        </button>
    );
}
