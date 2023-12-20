import "./screen-egg.styles.scss";

export const ScreenEgg = ({ type, children }) => {
  return <div className={`screen-egg screen-egg--${type}`}>{children}</div>;
};
