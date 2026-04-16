import { useEffect, useState } from "react";
import { getProgress, setProgress } from "../../core/storage";

const useSlide = (topic, slides) => {
  const [index, setIndex] = useState(0);

  // 🔥 Load saved progress
  useEffect(() => {
    if (!topic) return;
    const saved = getProgress(topic);
    if (saved !== null && saved < slides.length) {
      setIndex(saved);
    }
  }, [topic, slides.length]);

  // 🔥 Save progress
  useEffect(() => {
    if (topic) {
      setProgress(topic, index);
    }
  }, [index, topic]);

  // 👉 Controls
  const next = () => {
    setIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goTo = (i) => {
    if (i >= 0 && i < slides.length) setIndex(i);
  };

  return {
    index,
    slide: slides[index],
    total: slides.length,
    next,
    prev,
    goTo,
  };
};

export default useSlide;