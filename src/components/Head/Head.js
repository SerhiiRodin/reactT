import PropTypes from "prop-types";

export const Head = ({ clas, id, children, data }) => {
  console.log(children);
  return (
    <>
      {children}
      <p id={id} className={clas}>
        I am head
      </p>
    </>
  );
};

Head.propTypes = {
  clas: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.array,
  data: PropTypes.arrayOf(PropTypes.string),
};
