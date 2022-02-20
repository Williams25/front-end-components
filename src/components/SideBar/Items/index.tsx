import { List, Box, Typography, MenuItem } from "@material-ui/core";
import { Collapse } from "./Collapse";
import { useRouter } from "next/router";

type ItemsProps = {
  data: {
    title: string;
    type: "button" | "collapse";
    data: [
      {
        href: string;
        text: string;
        paths: [{ path: string; type: "dynamic" | "static" }];
      }
    ];
  }[];
};

export const Items = ({ data }: ItemsProps) => {
  const router = useRouter();
  const { pathname } = useRouter();

  return (
    <List style={{ width: 240 }}>
      {data.map((sidebarItem, index) => {
        return (
          <div key={index}>
            {sidebarItem.type === "button" ? (
              <>
                <Box mt={2} ml={2} mb={1}>
                  <Typography
                    style={{
                      fontSize: "0.75rem",
                      lineHeight: "2.5",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    {/* {sidebarItem.icon && <>{sidebarItem.icon}</>} */}
                    <span
                    // style={{ marginLeft: sidebarItem.icon && "0.5rem" }}
                    >
                      {sidebarItem.title}
                    </span>
                  </Typography>
                </Box>

                {sidebarItem.data.map((item, index) => {
                  const pathActive = item.paths.filter(
                    (path) => path.path === pathname
                  ).length;
                  return (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        router.push(item.href);
                      }}
                      style={{
                        color:
                          pathActive === 1
                            ? "rgb(86, 100, 210)"
                            : "rgb(107, 119, 140)",
                        fontWeight: pathname === item.href ? 700 : 500,
                        fontSize: "0.875rem",
                        textTransform: "none",
                        lineHeight: "1.75",
                        width: "100%",
                        margin: 0
                      }}
                    >
                      {item.text}
                    </MenuItem>
                  );
                })}
              </>
            ) : (
              <Collapse
                isLocal={pathname}
                sideBar={sidebarItem.data}
                title={sidebarItem.title}
                // icon={sidebarItem.icon}
              >
                {sidebarItem.data.map((item, index) => {
                  const pathActive = item.paths.filter((path) => {
                    if (path.type === "dynamic") {
                      const newPath = pathname.split("/");
                      return (
                        path.path ===
                        pathname.replace(newPath[newPath.length - 1], "")
                      );
                    }
                    return path.path === pathname;
                  }).length;
                  return (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        router.push(item.href);
                      }}
                      style={{
                        color:
                          pathActive > 0
                            ? "rgb(86, 100, 210)"
                            : "rgb(107, 119, 140)",
                        fontWeight: pathActive > 0 ? 700 : 500,
                        fontSize: "0.875rem",
                        textTransform: "none",
                        lineHeight: "1.75",
                        width: "100%",
                        margin: 0
                      }}
                    >
                      {item.text}
                    </MenuItem>
                  );
                })}
              </Collapse>
            )}
          </div>
        );
      })}
    </List>
  );
};
