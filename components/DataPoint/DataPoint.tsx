import CountUp from "react-countup";

const DataPoint = (props: any) => {
  const { active, handleClick, handleHover, text } = props;

  const format = (value: number) => {
    return value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value.toString();
  };

  return (
    <div
      className={`transition font-mono text-9xl font-black hover:bg-[#B22222] rounded-lg px-5 ${
        active && "bg-[#B22222]"
      }`}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <CountUp end={text} duration={1.75} formattingFn={format} />
    </div>
  );
};

export default DataPoint;
