type ItemsMenu = {
  title: string;
  type: "button" | "collapse";
  data: {
    href: string;
    text: string;
  }[];
};

export const items: ItemsMenu[] = [
  {
    title: "Buttons",
    type: "collapse",
    data: [
      {
        href: "/Buttons",
        text: "Button"
      }
    ]
  },
  {
    title: "Cards",
    type: "collapse",
    data: [
      {
        href: "/Cards",
        text: "Card"
      }
    ]
  },
  {
    title: "Typography",
    type: "collapse",
    data: [
      {
        href: "/Typography",
        text: "Text animate"
      }
    ]
  },
  {
    title: "Inputs",
    type: "collapse",
    data: [
      {
        href: "/Inputs",
        text: "InputField"
      }
    ]
  }
];
