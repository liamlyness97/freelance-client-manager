import timeAgo, { formatTimeAgo } from "@/lib/helpers/time-ago";

type Messages =
  | {
      ticket_messages: {
        id: string;
        message: string;
        ticketId: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
      };
      user: {
        id: string;
        name: string;
        email: string;
        emailVerified: boolean | null;
        role: "admin" | "client" | null;
        image: string | null;
        companyId: string | null;
        banned: boolean | null;
        banReason: string | null;
        banExpires: Date | null;
        createdAt: Date;
        updatedAt: Date;
      };
    }[]
  | undefined;

export default function TicketMessages({ messages }: { messages: Messages }) {
  return (
    <div className="w-full flex flex-col gap-4 py-4">
      {messages &&
        messages.map((message) => (
          <div key={message.ticket_messages.id} className="flex flex-col">
            <div className="w-full flex justify-between items-center">
              <p className="font-semibold text-lightNavy">
                {message.user.name}
              </p>
              <p className="text-sm opacity-25">
                {
                  formatTimeAgo(timeAgo(message.ticket_messages.createdAt))
                    .label
                }
              </p>
            </div>
            <p>{message.ticket_messages.message}</p>
          </div>
        ))}
    </div>
  );
}
