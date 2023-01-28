import { useCallback, useEffect, useState } from "react";
import CountUp from "react-countup";

const DataPoint = (props: any) => {
  const { text, label, toggle } = props;
  const [active, setActive] = useState(false);

  const format = useCallback((value: number) => {
    return value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value.toString();
  }, []);

  const handleHover = () => {
    toggle(label);
    setActive(!active);
  };

  return (
    <div
      className={`transition font-mono text-9xl font-black hover:bg-[#B22222] rounded-lg px-5 text-center ${
        active && "bg-[#B22222]"
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <CountUp end={text} duration={1.75} formattingFn={format} />
      {active && <div className="text-xs">{label}</div>}
    </div>
  );
};

export default DataPoint;
