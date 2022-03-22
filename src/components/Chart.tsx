import { theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import type ApexTypes from "react-apexcharts/types/react-apexcharts";
const ApexChar = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexTypes["props"] = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-01-01T00:00:00.000Z",
      "2021-01-02T00:00:00.000Z",
      "2021-01-03T00:00:00.000Z",
      "2021-01-04T00:00:00.000Z",
      "2021-01-05T00:00:00.000Z",
      "2021-01-06T00:00:00.000Z",
      "2021-01-07T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

interface Props {
  series: ApexTypes["props"]["series"];
}

function Chart({ series }: Props) {
  return (
    <ApexChar options={options} series={series} type="area" height={160} />
  );
}

export { Chart };
export type { Props as ChartProps };
