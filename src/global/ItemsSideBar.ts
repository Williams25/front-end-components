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
            type: "static",
          },
        ],
      },
    ],
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
            type: "static",
          },
        ],
      },
    ],
  },
];
