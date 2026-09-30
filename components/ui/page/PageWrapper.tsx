import { ReactNode } from "react";

export default function PageWrapper({ children, title }: { children: ReactNode; title: string }) {
    return (
      <div className="flex gap-8 flex-col">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-3xl text-lightNavy font-bold">
                    {title}
                </h1>
              </div>
            </div>
            {children}
        </div>
    )
}
