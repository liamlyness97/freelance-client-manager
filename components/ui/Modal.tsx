import { type ReactNode } from "react";
export default function Modal({
    children,
    id,
}: {
    children: ReactNode;
    id: string;
}) {
    return (
        <dialog
            id={id}
            className="backdrop:bg-lightNavy/25 backdrop:backdrop-blur-xs"
        >
            {children}
        </dialog>
    );
}
