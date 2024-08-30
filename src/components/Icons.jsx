export const Star = ({ filled }) => {
  return (
    <svg
      height="30.5px"
      width="30.3px"
      fill={filled ? "gold" : "aquamarine"}
      viewBox="0 0 25 25"
    >
      <polygon points="9.9, 1.1, 8, 7.4, 1.6, 7.4, 7.1, 11.1, 5.2, 17.3, 9.9, 13.7, 14.6, 17.3, 12.7, 11.1, 18.2, 7.4, 11.8, 7.4 " />
    </svg>
  );
};
