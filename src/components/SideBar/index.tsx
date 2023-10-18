import { ReactNode } from "react";
import { Container } from "./styles";
import { Items } from "./Items";

type SideBarProps = {
  children: ReactNode;
  data: {
    title: string;
    type: "button" | "collapse";
    data: {
      href: string;
      text: string;
    }[];
  }[];
};

export const SideBar = ({ children, data }: SideBarProps) => {
  return (
    <Container>
      <header>
        <h1>Front-end components</h1>
      </header>

      <main>
        <div />
        <aside>
          <Items data={data} />
        </aside>
        <section id="content-section">{children}</section>
      </main>
    </Container>
  );
};
