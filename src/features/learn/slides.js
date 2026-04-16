import phase1 from "./phases/phase1";
import phase2 from "./phases/phase2";
import phase3 from "./phases/phase3";
import phase4 from "./phases/phase4";
import phase5 from "./phases/phase5";
import phase6 from "./phases/phase6";

/* 🔁 Convert phase → slide format (VERY IMPORTANT) */
function convertPhaseToSlide(phase) {
  const content = [];

  phase.sections.forEach((sec) => {
    // heading
    content.push({
      type: "heading",
      value: sec.heading,
    });

    // main content
    content.push({
      type: "text",
      value: sec.content,
    });

    // example → highlight box
    if (sec.example) {
      content.push({
        type: "highlight",
        value: "Example: " + sec.example,
      });
    }
  });

  return {
    title: phase.title,
    content,
  };
}

/* 🔥 FINAL DATA */
const slidesData = {
  devops: [
    convertPhaseToSlide(phase1),
    convertPhaseToSlide(phase2),
    convertPhaseToSlide(phase3),
    convertPhaseToSlide(phase4),
    convertPhaseToSlide(phase5),
    convertPhaseToSlide(phase6),
  ],
};

export default slidesData;