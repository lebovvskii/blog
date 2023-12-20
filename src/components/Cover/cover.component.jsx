import "./cover.styles.scss";

export const Cover = ({ title }) => {
  const [name, surname] = title.split(" ");
  return (
    <div className="cover">
      <h1 className="title">
        {name}
        <br />
        {surname}
      </h1>
    </div>
  );
};
