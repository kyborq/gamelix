import { curveNatural, line, scaleLinear } from "d3";
import { useEffect, useRef, useState } from "react";

type Props = {
  data: { x: number; y: number }[];
};

export const Chart = ({ data }: Props) => {
  const chartRef = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (chartRef.current) {
      setWidth(chartRef.current.clientWidth);
      setHeight(chartRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        setWidth(chartRef.current.clientWidth);
        setHeight(chartRef.current.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const xScale = scaleLinear()
    .domain([0, Math.max(...data.map((d) => d.x))])
    .range([0, width]);

  const yScale = scaleLinear()
    .domain([0, Math.max(...data.map((d) => d.y))])
    .range([height, 0]);

  const lineBuilder = line<{ x: number; y: number }>()
    .curve(curveNatural)
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

  const linePath = lineBuilder(data);

  return (
    <svg width="100%" height="100%" ref={chartRef} overflow="visible">
      <path d={linePath!} stroke="#16DB65" fill="none" strokeWidth={2} />
    </svg>
  );
};
