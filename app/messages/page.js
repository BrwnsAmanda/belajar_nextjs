import { messages } from "@/lib/db";
import { deleteMessageAction } from "./actions";

import { Button } from "@/components/ui/button";

export default function MessagesPage() {
  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-3xl px-6 py-20">
        <div>
          <p className="text-sm font-semibold text-primary">
            Messages
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Pesan Masuk
          </h1>
        </div>

        <div className="mt-8 space-y-4">
          {messages.length === 0 ? (
            <p className="text-muted-foreground">
              Belum ada pesan masuk.
            </p>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className="rounded-xl border border-white/10 bg-foreground/[0.03] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-medium">
                      {msg.name} — {msg.email}
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {msg.message}
                    </p>
                  </div>

                  <form
                    action={deleteMessageAction.bind(null, msg.id)}
                  >
                    <Button
                      type="submit"
                      variant="destructive"
                      size="sm"
                      className="shrink-0 rounded-full"
                    >
                      Hapus
                    </Button>
                  </form>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}