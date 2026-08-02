import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { FiSend, FiLoader } from 'react-icons/fi'
import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import Reveal from '../components/layout/Reveal'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import TextArea from '../components/ui/TextArea'
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
 * Contact section (Phase 7). Validation is react-hook-form + zod
 * (see components/contact/schema.js): each field shows its own
 * inline error, and `onInvalid` additionally surfaces one targeted
 * toast for the most relevant problem, so the person gets feedback
 * even if they don't scroll down to read every field.
 */
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  })

  async function onSubmit(values) {
    setIsSubmitting(true)
    try {
      await submitContactForm(values)
      toast.success('✅ Message sent successfully.')
      reset()
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  /**
   * Fires alongside the per-field inline errors whenever validation
   * fails. Checked in order of what's most likely wrong: a field
   * left completely empty first, then an invalid email, then a
   * message that's present but too short.
   */
  function onInvalid(formErrors) {
    const values = getValues()
    const hasEmptyRequired =
      !values.name?.trim() || !values.email?.trim() || !values.subject?.trim() || !values.message?.trim()

    if (hasEmptyRequired) {
      toast.error('❌ Please fill out all required fields.')
    } else if (formErrors.email) {
      toast.error('❌ Please enter a valid email address.')
    } else if (formErrors.message) {
      toast.error('❌ Message must contain at least 20 characters.')
    } else {
      toast.error('❌ Please check the form and try again.')
    }
  }

  return (
    <Section id="contact">
      <SectionHeader eyebrow="Contact" title="Let's build something" accent="great" />

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
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            className="glass grid gap-5 rounded-3xl p-6 sm:grid-cols-2 md:p-8"
          >
            <Input
              id="name"
              label="Name"
              placeholder="Jane Doe"
              error={errors.name?.message}
              {...register('name')}
            />
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="jane@company.com"
              error={errors.email?.message}
              {...register('email')}
            />
            <Input
              id="subject"
              label="Subject"
              placeholder="Project inquiry"
              className="sm:col-span-2"
              error={errors.subject?.message}
              {...register('subject')}
            />
            <TextArea
              id="message"
              label="Message"
              rows={5}
              placeholder="Tell me a bit about what you're looking for (at least 20 characters)..."
              className="sm:col-span-2"
              error={errors.message?.message}
              {...register('message')}
            />

            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="sm:col-span-2 w-full sm:w-fit disabled:cursor-not-allowed disabled:opacity-60"
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
