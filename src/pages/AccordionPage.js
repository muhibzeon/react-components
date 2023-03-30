//Accordion page, Parent element of Accordion Component

import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Can I use React on a project?",
      content: "You can use React on any Project you want",
    },
    {
      id: 2,
      label: "Can I use JavaScript on a project?",
      content: "You can use JavaScript on any Project you want",
    },
    {
      id: 3,
      label: "Can I use CSS on a project?",
      content: "You can use CSS on any Project you want",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
