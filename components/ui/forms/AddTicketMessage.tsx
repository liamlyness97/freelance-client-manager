"use client";
import PrimaryBtn from "@/components/ui/buttons/primary";
import { addTicketMessage, AddTicketMessageState } from "@/lib/actions/tickets";
import { useActionState } from "react";

const initialState: AddTicketMessageState = {};

export default function AddTicketMessage({
  userId,
  ticketId,
}: {
  userId: string;
  ticketId: string;
}) {
  const [state, formAction, isPending] = useActionState(
    addTicketMessage,
    initialState,
  );
  return (
    <form action={formAction} className="flex flex-col gap-4">
      {userId && <input type="hidden" name="userId" value={userId} />}
      {ticketId && <input type="hidden" name="ticketId" value={ticketId} />}
      <textarea
        name="message"
        id="message"
        className="bg-background w-full font-normal text-foreground p-2 mt-2 rounded-md"
        rows={5}
        placeholder="Enter message"
      ></textarea>
      {state.errors?.message && (
        <p className="text-red-500 font-normal mt-1">
          {state.errors.message[0]}
        </p>
      )}
      <PrimaryBtn label="Submit message" type="submit" />
    </form>
  );
}
