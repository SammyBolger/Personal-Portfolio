import { useState, useEffect, useRef } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 44,
  deletingSpeed = 40,
  pauseTime = 2200,
  betweenTime = 300
) {
  const [text, setText] = useState("");
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    if (words.length === 0) return;

    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentWord = words[wordIndex.current];

      if (!isDeleting.current) {
        charIndex.current++;
        setText(currentWord.slice(0, charIndex.current));

        if (charIndex.current >= currentWord.length) {
          isDeleting.current = true;
          timeout = setTimeout(tick, pauseTime);
          return;
        }
        timeout = setTimeout(tick, typingSpeed);
      } else {
        charIndex.current--;
        setText(currentWord.slice(0, charIndex.current));

        if (charIndex.current <= 0) {
          isDeleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
          timeout = setTimeout(tick, betweenTime);
          return;
        }
        timeout = setTimeout(tick, deletingSpeed);
      }
    };

    tick();
    return () => clearTimeout(timeout);
  }, [words, typingSpeed, deletingSpeed, pauseTime, betweenTime]);

  return text;
}
