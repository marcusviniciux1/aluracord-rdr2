import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import { useState } from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";
import Title from "../layout/Title";

/* function HomePage() {
  return (
    <div>
      <GlobalStyle />
      <Title tag="h2">Boas vindas de volta!</Title>
      <h2>Discord - Alura Matrix</h2>
    </div>
  );
}

export default HomePage;
 */

export default function PaginaInicial() {
  // const username = "marcusviniciux1";
  const [username, setUsername] = useState("marcusviniciux1");
  const roteamento = useRouter();

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
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (e) {
              e.preventDefault();
              window.location.href = "/chat";
              roteamento.push("/chat");
            }}
            z
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            {/* <input
              type="text"
              value={username}
              onChange={function (e) {
                const valor = e.target.value;
                setUsername(valor);
              }}
            ></input> */}
            <TextField
              value={username}
              onChange={function (e) {
                const valor = e.target.value;
                setUsername(valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary["050"],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary["050"],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary["200"],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "25px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`${
                username.length <= 2
                  ? "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/a8/a881079e7abf4c621e86e21116f8c0dd3ee40619_full.jpg"
                  : `https://github.com/${username}.png`
              }`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
