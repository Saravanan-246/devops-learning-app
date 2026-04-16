import phase1 from "./phases/phase1";
import phase2 from "./phases/phase2";
import phase3 from "./phases/phase3";
import phase4 from "./phases/phase4";
import phase5 from "./phases/phase5";
import phase6 from "./phases/phase6";
import phase7 from "./phases/phase7";
import phase8 from "./phases/phase8";
import phase9 from "./phases/phase9";
import phase10 from "./phases/phase10";
import phase11 from "./phases/phase11";
import phase12 from "./phases/phase12";
import phase13 from "./phases/phase13";
import phase14 from "./phases/phase14";
import phase15 from "./phases/phase15";
import phase16 from "./phases/phase16";
import phase17 from "./phases/phase17";
import phase18 from "./phases/phase18";

/* 🔁 Convert phase → slide format */
function convertPhaseToSlide(phase) {
  const content = [];

  phase.sections.forEach((sec) => {
    content.push({
      type: "heading",
      value: sec.heading,
    });

    content.push({
      type: "text",
      value: sec.content,
    });

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
    convertPhaseToSlide(phase7),
    convertPhaseToSlide(phase8),
    convertPhaseToSlide(phase9),
    convertPhaseToSlide(phase10),
    convertPhaseToSlide(phase11),
    convertPhaseToSlide(phase12),
    convertPhaseToSlide(phase13),
    convertPhaseToSlide(phase14),
    convertPhaseToSlide(phase15),
    convertPhaseToSlide(phase16),
    convertPhaseToSlide(phase17),
    convertPhaseToSlide(phase18),
  ],
};

export default slidesData;