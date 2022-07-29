type ItemsMenu = {
  title: string;
  type: "button" | "collapse";
  data: [
    {
      href: string;
      text: string;
      paths: [{ path: string; type: "dynamic" | "static" }];
    }
  ];
};

export const items: ItemsMenu[] = [
  {
    title: "Buttons",
    type: "collapse",
    data: [
      {
        href: "/Buttons",
        text: "Button",
        paths: [
          {
            path: "/Buttons",
            type: "static"
          }
        ]
      }
    ]
  },
  {
    title: "Cards",
    type: "collapse",
    data: [
      {
        href: "/Cards",
        text: "Card",
        paths: [
          {
            path: "/Cards",
            type: "static"
          }
        ]
      }
    ]
  },
  {
    title: "Typography",
    type: "collapse",
    data: [
      {
        href: "/Typography",
        text: "Text animate",
        paths: [
          {
            path: "/Typography",
            type: "static"
          }
        ]
      }
    ]
  },
  {
    title: "Inputs",
    type: "collapse",
    data: [
      {
        href: "/Inputs",
        text: "InputField",
        paths: [
          {
            path: "/Input",
            type: "static"
          }
        ]
      }
    ]
  }
];
