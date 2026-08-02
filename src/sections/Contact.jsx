import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { FiSend, FiLoader } from 'react-icons/fi'
import Section from '../components/layout/Section'
import Reveal from '../components/layout/Reveal'
import Button from '../components/ui/Button'
import FormField from '../components/contact/FormField'
import ContactInfoItem from '../components/contact/ContactInfoItem'
import { contactSchema } from '../components/contact/schema'
import { CONTACT_INFO } from '../data/contact'

/**
 * Stand-in for a real send API — no backend exists yet. Swap this for
 * an actual request (e.g. a serverless function or email service)
 * when one is wired up; the form/validation/UI around it don't need
 * to change.
 */
async function submitContactForm(values) {
  await new Promise((resolve) => setTimeout(resolve, 900))
  return values
}

/**
 * Contact section (Phase 7) — replaces the temporary anchor
 * placeholder in Home.jsx. Validation mirrors the same
 * react-hook-form + zod pairing used across the stack; layout follows
 * the two-column, Section/Reveal pattern established by About.
 */
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  })

  async function onSubmit(values) {
    setIsSubmitting(true)
    try {
      await submitContactForm(values)
      toast.success("Message sent — I'll get back to you soon.")
      reset()
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">Contact</p>
        <h2 className="mt-4 text-display-lg font-display font-medium text-ink">
          Let&apos;s build something <span className="text-gradient-accent">great</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        {/* Info column */}
        <Reveal delay={0.1}>
          <p className="max-w-sm text-ink-muted">
            Have a project in mind or just want to say hello? Send a message and
            I&apos;ll get back to you within a couple of days.
          </p>

          <div className="mt-8 flex flex-col gap-2">
            {CONTACT_INFO.map((item) => (
              <ContactInfoItem key={item.label} {...item} />
            ))}
          </div>
        </Reveal>

        {/* Form column */}
        <Reveal delay={0.15}>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="glass grid gap-5 rounded-3xl p-6 sm:grid-cols-2 md:p-8"
          >
            <FormField
              id="name"
              label="Name"
              placeholder="Jane Doe"
              error={errors.name?.message}
              {...register('name')}
            />
            <FormField
              id="email"
              label="Email"
              type="email"
              placeholder="jane@company.com"
              error={errors.email?.message}
              {...register('email')}
            />
            <FormField
              id="subject"
              label="Subject"
              placeholder="Project inquiry"
              className="sm:col-span-2"
              error={errors.subject?.message}
              {...register('subject')}
            />
            <FormField
              as="textarea"
              id="message"
              label="Message"
              rows={5}
              placeholder="Tell me a bit about what you're looking for..."
              className="sm:col-span-2"
              inputClassName="resize-none"
              error={errors.message?.message}
              {...register('message')}
            />

            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full sm:col-span-2 sm:w-fit disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <FiSend aria-hidden="true" />
                </>
              )}
            </Button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
