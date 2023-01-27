const DataPoint = (props: any) => {
  const { active, handleClick, handleHover, text } = props;

  return (
    <div
      className={`transition font-mono text-9xl font-black hover:bg-[#B22222] rounded-lg px-5 ${
        active && "bg-[#B22222]"
      }`}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {text}
    </div>
  );
};

export default DataPoint;
