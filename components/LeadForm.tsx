"use client";

import { useActionState, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Section } from "@/components/Section";
import { sendLeadAction, type SendLeadState } from "@/app/actions/sendLead";

const serviceOptions = [
  "Custom Apparel (DTF & Silkscreen)",
  "Banners & Signs",
  "Business Cards & Magnets",
  "Digital Print & Design",
  "Other / Not sure yet",
] as const;

const initialState: SendLeadState = null;

const ease = [0.22, 1, 0.36, 1] as const;

function fieldClass(hasError: boolean) {
  const base =
    "mt-2.5 w-full rounded-lg border bg-[var(--surface-3)] px-4 py-3.5 text-white outline-none transition duration-300 ease-out placeholder:text-zinc-500";
  if (hasError) {
    return `${base} border-red-500/80 focus:border-red-500 focus:ring-2 focus:ring-red-500/25`;
  }
  return `${base} border-zinc-700 input-focus-brand`;
}

type LeadFormFieldsProps = {
  embedded: boolean;
  onSendAnother: () => void;
};

function LeadFormFields({ embedded, onSendAnother }: LeadFormFieldsProps) {
  const [state, formAction, isPending] = useActionState(
    sendLeadAction,
    initialState,
  );

  const isSuccess = Boolean(state && "success" in state && state.success);
  const err = state && "error" in state ? state.error : undefined;

  if (isSuccess) {
    return (
      <motion.div
        role="status"
        aria-live="polite"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{
          opacity: 1,
          scale: [0.98, 1.01, 1],
        }}
        transition={{
          opacity: { duration: 0.35, ease },
          scale: {
            duration: 0.75,
            times: [0, 0.5, 1],
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        className="flex min-h-[min(20rem,55vh)] w-full flex-col items-center justify-center px-4 py-10 text-center sm:min-h-[18rem] sm:py-12"
      >
        <p className="max-w-md text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
          Thanks — we&apos;ve received your request.
        </p>
        <p className="mt-4 max-w-sm text-base leading-relaxed text-zinc-400 sm:text-lg">
          We&apos;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={onSendAnother}
          className="btn-premium mt-10 rounded-lg border border-zinc-600 bg-[var(--surface-3)]/80 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-zinc-200 hover:border-brand hover:text-white"
        >
          Send Another Request
        </button>
      </motion.div>
    );
  }

  const intro = (
    <motion.div
      initial={{ opacity: 0, y: embedded ? 16 : 24 }}
      animate={embedded ? { opacity: 1, y: 0 } : undefined}
      whileInView={embedded ? undefined : { opacity: 1, y: 0 }}
      viewport={embedded ? undefined : { once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease }}
      className={embedded ? "text-left" : "text-center"}
    >
      <h2
        className={
          embedded
            ? "font-display text-2xl font-black tracking-tight text-white sm:text-3xl"
            : "font-display text-3xl font-black tracking-tight text-white sm:text-4xl"
        }
      >
        Request a Custom Quote
      </h2>
      <p
        className={
          embedded
            ? "mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base"
            : "mt-4 text-zinc-400 sm:text-lg"
        }
      >
        Tell us what you need and we&apos;ll take care of the rest.
      </p>
      <p className="mt-3 text-xs text-zinc-500 sm:text-sm">
        Takes less than 1 minute.
      </p>
    </motion.div>
  );

  const form = (
    <motion.form
      action={formAction}
      initial={{ opacity: 0, y: embedded ? 12 : 20 }}
      animate={embedded ? { opacity: 1, y: 0 } : undefined}
      whileInView={embedded ? undefined : { opacity: 1, y: 0 }}
      viewport={embedded ? undefined : { once: true, margin: "-40px" }}
      transition={{
        delay: embedded ? 0.08 : 0.1,
        duration: 0.6,
        ease,
      }}
      className={
        embedded
          ? "mt-8 space-y-6 sm:mt-8"
          : "form-panel-ambient mt-10 space-y-6 rounded-2xl bg-[var(--surface-2)]/70 p-6 sm:p-8"
      }
    >
      <div>
        <label
          htmlFor={embedded ? "hero-name" : "name"}
          className="block text-sm font-semibold text-zinc-300"
        >
          Full Name
        </label>
        <input
          id={embedded ? "hero-name" : "name"}
          name="name"
          type="text"
          minLength={2}
          autoComplete="name"
          placeholder="Your full name"
          aria-invalid={Boolean(err?.name?.length)}
          aria-describedby={err?.name ? `${embedded ? "hero-" : ""}name-error` : undefined}
          className={fieldClass(Boolean(err?.name?.length))}
        />
        {err?.name ? (
          <p
            id={`${embedded ? "hero-" : ""}name-error`}
            className="mt-1.5 text-sm text-red-400"
          >
            {err.name[0]}
          </p>
        ) : null}
      </div>
      <div>
        <label
          htmlFor={embedded ? "hero-email" : "email"}
          className="block text-sm font-semibold text-zinc-300"
        >
          Email
        </label>
        <input
          id={embedded ? "hero-email" : "email"}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={Boolean(err?.email?.length)}
          aria-describedby={err?.email ? `${embedded ? "hero-" : ""}email-error` : undefined}
          className={fieldClass(Boolean(err?.email?.length))}
        />
        {err?.email ? (
          <p
            id={`${embedded ? "hero-" : ""}email-error`}
            className="mt-1.5 text-sm text-red-400"
          >
            {err.email[0]}
          </p>
        ) : null}
      </div>
      <div>
        <label
          htmlFor={embedded ? "hero-service" : "service"}
          className="block text-sm font-semibold text-zinc-300"
        >
          Service type
        </label>
        <select
          id={embedded ? "hero-service" : "service"}
          name="service"
          defaultValue=""
          aria-invalid={Boolean(err?.service?.length)}
          aria-describedby={
            err?.service ? `${embedded ? "hero-" : ""}service-error` : undefined
          }
          className={fieldClass(Boolean(err?.service?.length))}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {err?.service ? (
          <p
            id={`${embedded ? "hero-" : ""}service-error`}
            className="mt-1.5 text-sm text-red-400"
          >
            {err.service[0]}
          </p>
        ) : null}
      </div>
      <div>
        <label
          htmlFor={embedded ? "hero-message" : "message"}
          className="block text-sm font-semibold text-zinc-300"
        >
          Project Details
        </label>
        <textarea
          id={embedded ? "hero-message" : "message"}
          name="message"
          minLength={10}
          rows={embedded ? 4 : 5}
          placeholder="Quantity, sizes, deadline, and any ideas you have…"
          aria-invalid={Boolean(err?.message?.length)}
          aria-describedby={
            err?.message ? `${embedded ? "hero-" : ""}message-error` : undefined
          }
          className={`${fieldClass(Boolean(err?.message?.length))} min-h-[6.5rem] resize-y sm:min-h-[7rem]`}
        />
        {err?.message ? (
          <p
            id={`${embedded ? "hero-" : ""}message-error`}
            className="mt-1.5 text-sm text-red-400"
          >
            {err.message[0]}
          </p>
        ) : null}
      </div>

      {err?.server ? (
        <p
          className="rounded-lg border border-red-500/40 bg-red-950/40 px-4 py-3 text-center text-sm font-medium text-red-300"
          role="alert"
        >
          {err.server[0]}
        </p>
      ) : null}

      <div className="space-y-3 pt-1">
        <button
          type="submit"
          disabled={isPending}
          className="btn-premium flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand py-4 text-base font-black uppercase tracking-wide text-zinc-950 hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
        >
          <Send className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" aria-hidden />
          {isPending ? "Sending…" : "Request a Custom Quote"}
        </button>
        <p className="text-center text-sm text-zinc-500">
          Most quotes delivered within 24 hours. No commitment required.
        </p>
      </div>
    </motion.form>
  );

  return (
    <>
      {intro}
      {form}
    </>
  );
}

type LeadFormProps = {
  embedded?: boolean;
};

export function LeadForm({ embedded = false }: LeadFormProps) {
  const [resetKey, setResetKey] = useState(0);

  const fields = (
    <LeadFormFields
      key={resetKey}
      embedded={embedded}
      onSendAnother={() => setResetKey((k) => k + 1)}
    />
  );

  if (embedded) {
    return (
      <div id="start" className="scroll-mt-24">
        {fields}
      </div>
    );
  }

  return (
    <Section id="start" className="relative overflow-hidden bg-[var(--surface-2)]/35">
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand/[0.11] blur-[100px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-xl">{fields}</div>
    </Section>
  );
}
