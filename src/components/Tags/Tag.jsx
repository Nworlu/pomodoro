import useApContext from "../../useApp";

const Tag = ({ children, onClick, index }) => {
  const { activeTag } = useApContext();

  return (
    <button
      onClick={onClick}
      className={`${
        activeTag === index ? "bg-[#b85600]" : ""
      } flex-1 text-white rounded-[5rem] h-[4rem] text-[2rem]`}
    >
      {children}
    </button>
  );
};

export default Tag;
