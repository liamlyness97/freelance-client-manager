import { db } from "@/lib/db";
import { tickets } from "../db/schema/tickets";

export const fetchAllTickets = async () => {
    const ticketsRes = await db.select().from(tickets);
    if (!ticketsRes) return;

    return ticketsRes;
};
