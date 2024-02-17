import { React, useState } from "react";

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div className="question">
      <div className="point" onClick={toggleSection}>
        <h2>{section.quest}</h2>
      </div>
      <div className={`answer ${isActiveSection ? "open" : ""}`}>
        <p className="dev-section-description1">{section.ans}</p>
      </div>
    </div>
  );
};

const Accordions = ({ quest }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
      {quest.map((que, index) => (
        <AccordionSection
          section={que}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordions;
