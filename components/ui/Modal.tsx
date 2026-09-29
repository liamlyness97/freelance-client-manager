"use client"
import { createContext, useContext, useRef, type ReactNode } from "react";

type ModalContextValue = {
  close: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function useModal() {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('useModal must be used inside a Modal');
    }

    return context;
}

export default function Modal({
    children,
    id,
}: {
    children: ReactNode;
    id: string;
    }) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const close = () => dialogRef.current?.close();

    return (
        <dialog
            id={id}
            ref={dialogRef}
            className="backdrop:bg-lightNavy/25 backdrop:backdrop-blur-xs"
        >
            <ModalContext value={{ close }}>
              {children}
            </ModalContext>
        </dialog>
    );
}
