import { useEffect, useState } from 'react'

/**
 * Cycles through `words`, typing each one out character by character,
 * pausing, deleting it, then moving to the next — the classic
 * rotating-job-title effect. Pure state machine driven by
 * setTimeout, no external dependency.
 */
export function useTypewriter(
  words,
  { typingSpeed = 70, deletingSpeed = 40, pauseTime = 1400 } = {}
) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    let timeout

    if (!isDeleting && text === currentWord) {
      // Full word typed — hold, then start deleting.
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && text === '') {
      // Fully deleted — advance to the next word. Deferred into a
      // timeout (even a 0ms one) rather than called synchronously
      // here, so state updates always happen from a callback, not
      // directly in the effect body.
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      }, 0)
    } else {
      timeout = setTimeout(
        () => {
          setText((current) =>
            isDeleting
              ? currentWord.slice(0, current.length - 1)
              : currentWord.slice(0, current.length + 1)
          )
        },
        isDeleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}
