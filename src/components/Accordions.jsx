// import { React, useState } from "react";

// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
// } from "@mui/material";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// // import { useState } from "react";
// export const Accordions = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div>
//       <Accordion
//         expanded={expanded === "panel1"}
//         onChange={(_event, isExpanded) =>
//           setExpanded(isExpanded ? "panel1" : false)
//         }
//       >
//         <AccordionSummary
//           id="panel1-header"
//           aria-controls="panel1-content"
//           expandIcon={<ExpandMoreIcon />}
//         >
//           <Typography>What is DEDPOOL?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             You can swap for DEDPOOL tokens using ETH, BNB, or USDT. Ensure you
//             have sufficient amounts of these tokens in your wallet to proceed.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel2"}
//         onChange={(_event, isExpanded) =>
//           setExpanded(isExpanded ? "panel2" : false)
//         }
//       >
//         <AccordionSummary
//           id="panel2-header"
//           aria-controls="panel2-content"
//           expandIcon={<ExpandMoreIcon />}
//         >
//           <Typography>Why Launch on Ethereum?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             You can swap for DEDPOOL tokens using ETH, BNB, or USDT. Ensure you
//             have sufficient amounts of these tokens in your wallet to proceed.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel3"}
//         onChange={(_event, isExpanded) =>
//           setExpanded(isExpanded ? "panel3" : false)
//         }
//       >
//         <AccordionSummary
//           id="panel3-header"
//           aria-controls="panel3-content"
//           expandIcon={<ExpandMoreIcon />}
//         >
//           <Typography>What is the token utility of DEDPOOL?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             You can swap for DEDPOOL tokens using ETH, BNB, or USDT. Ensure you
//             have sufficient amounts of these tokens in your wallet to proceed.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel4"}
//         onChange={(_event, isExpanded) =>
//           setExpanded(isExpanded ? "panel4" : false)
//         }
//       >
//         <AccordionSummary
//           id="panel4-header"
//           aria-controls="panel4-content"
//           expandIcon={<ExpandMoreIcon />}
//         >
//           <Typography>When DEDPOOL will launch?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             You can swap for DEDPOOL tokens using ETH, BNB, or USDT. Ensure you
//             have sufficient amounts of these tokens in your wallet to proceed.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// };

// export default Accordions;

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
    <div className="question" onClick={toggleSection}>
      <div className="point">
        <h2>{section.quest}</h2>
      </div>
      {isActiveSection && (
        <div className="anwser">
          <p className="dev-section-description1">{section.ans}</p>
        </div>
      )}
    </div>
  );
};

const Accordions = ({ quest }) => {
  const [activeIndex, setActiveIndex] = useState(0);
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
