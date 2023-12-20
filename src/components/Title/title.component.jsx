import "./title.styles.scss";
export const Title = ({ type = "medium", children }) => {
  return <h2 className={`post-title post-title--${type}`}>{children}</h2>;
};
