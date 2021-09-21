import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end jabascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS library amon engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

// const options = [
//   {
//     label: "The color Red",
//     value: "red",
//   },
//   {
//     label: "The color Green",
//     value: "green",
//   },
//   {
//     label: "A shade of blue",
//     value: "blue",
//   },
// ];

// const [selected, setSelected] = useState(options[0]);

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />
    // return (
    //   <Dropdown
    //     label="Select a Color"
    //     selected={selected}
    //     onSelectedChange={setSelected}
    //     options={options}
    //   />
    // );
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export default () => {
  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};

//Dropdown elements

// const options = [
//   {
//     label: "The color Red",
//     value: "red",
//   },
//   {
//     label: "The color Green",
//     value: "green",
//   },
//   {
//     label: "A shade of blue",
//     value: "blue",
//   },
// ];

// export default () => {
//   const [selected, setSelected] = useState(options[0]);
//   const [showDropdown, setShowDropdown] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShowDropdown(!showDropdown)}>
//         Toggle Dropdown
//       </button>
//       {showDropdown ? (
//         <Dropdown
//           label="Select a Color"
//           selected={selected}
//           onSelectedChange={setSelected}
//           options={options}
//         />
//       ) : null}
//     </div>
//   );
// };
