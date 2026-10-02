import { redirect } from "next/navigation";

export default function Home() {
    redirect("/dashboard");
    return (
        <div>
            <p className="text-2xl text-navy font-bold">
                This is the dashboard
            </p>
        </div>
    );
}
