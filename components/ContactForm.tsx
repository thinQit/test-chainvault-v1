"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type ErrorState = {
  name: string;
  email: string;
  message: string;
  form: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<ErrorState>({
    name: "",
    email: "",
    message: "",
    form: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = () => {
    const next: ErrorState = { name: "", email: "", message: "", form: "" };
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.includes("@")) next.email = "Valid email is required.";
    if (form.message.trim().length < 10) next.message = "Message must be at least 10 characters.";
    setErrors(next);
    return !next.name && !next.email && !next.message;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrors((p) => ({ ...p, form: "" }));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as
          | { error?: string; issues?: { message: string }[] }
          | null;

        const message =
          body?.issues?.[0]?.message ||
          (body?.error === "VALIDATION_ERROR" ? "Please check your entries." : "Request failed.");
        setErrors((p) => ({ ...p, form: message }));
        setStatus("idle");
        return;
      }

      setStatus("success");
    } catch {
      setErrors((p) => ({ ...p, form: "Network error. Please try again." }));
      setStatus("idle");
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Card className="rounded-xl border border-border bg-card/80 p-6 text-card-foreground shadow-sm">
          <h2 className="text-2xl font-semibold">Contact ChainVault</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Questions on listings, fees, or enterprise access? Send a message.
          </p>

          {status === "success" ? (
            <div className="mt-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
              Thanks—your message has been sent. We’ll reply within 1–2 business days.
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              {errors.form ? (
                <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive-foreground">
                  {errors.form}
                </div>
              ) : null}

              <div>
                <Input
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name ? <p className="mt-1 text-xs text-rose-300">{errors.name}</p> : null}
              </div>

              <div>
                <Input
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email ? <p className="mt-1 text-xs text-rose-300">{errors.email}</p> : null}
              </div>

              <div>
                <textarea
                  placeholder="Tell us what you need..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-28 w-full rounded-md border border-input bg-background p-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
                {errors.message ? (
                  <p className="mt-1 text-xs text-rose-300">{errors.message}</p>
                ) : null}
              </div>

              <Button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send message"}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
