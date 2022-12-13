import { component$, useMount$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./chartJSGraph.css?inline";
import { ChartJS, ChartJSBarChart } from '~/integrations/react/mui';

interface GraphProps {
  chartData: object;
}

export default component$((props: GraphProps) => {
  useStylesScoped$(styles);

  useMount$(() => {
  });

  return (
    <>
      {/* <ChartJSBarChart
        datasetIdKey='id'
        data={props.chartData}
        options={
          responsive: true,
          plugins: {
            legend: {
              position: 'top' as const,
            },
            title: {
              display: true,
              text: 'Chart.js Bar Chart',
            },
          }
        }
      /> */}
    </>
  );
});
