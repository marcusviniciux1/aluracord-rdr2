import appConfig from "../../config.json";

function Title(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          font-size: 24px;
          font-weight: 600;
          color: ${appConfig.theme.colors.neutrals["100"]};
        }
      `}</style>
    </>
  );
}

export default Title;
