import { Box } from "@skynexui/components";
import appConfig from "../config.json";
import Title from "../layout/Title";

export default function PaginaDoChat() {
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary["000"],
          backgroundImage:
            "url(https://initiate.alphacoders.com/images/977/cropped-1920-1080-977202.jpg?4395)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "35px",
            padding: "32px",
            margin: "16px",
            boxShadow: "10px 20px 3px 0 rgb(0 0 0 / 35%)",
            backgroundColor: appConfig.theme.colors.neutrals["700"],
          }}
        >
          <div>
            <Title>Página do chat</Title>
          </div>
        </Box>
      </Box>
    </>
  );
}
