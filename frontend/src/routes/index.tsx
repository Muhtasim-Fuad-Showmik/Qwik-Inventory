import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Card from "../components/card/card";
import ContentCard from "../components/contentCard/contentCard";
import ChartJSGraph from "../components/chartJSGraph/chartJSGraph";

export default component$(() => {
  const chartData1 = useSignal({
    "labels": [
      { id: 1, year: 2010, count: 10 },
      { id: 2, year: 2011, count: 20 },
      { id: 3, year: 2012, count: 15 },
      { id: 4, year: 2013, count: 25 },
      { id: 5, year: 2014, count: 22 },
      { id: 6, year: 2015, count: 30 }
  ].map((data) => data.year),
  "datasets": [
    {
      "label": "Orders",
      "data": [
        { id: 1, year: 2010, count: 10 },
        { id: 2, year: 2011, count: 20 },
        { id: 3, year: 2012, count: 15 },
        { id: 4, year: 2013, count: 25 },
        { id: 5, year: 2014, count: 22 },
        { id: 6, year: 2015, count: 30 }
    ].map((data) => data.count),
    "backgroundColor": [
      "rgba(75,192,192,1)",
      "#ecf0f1",
      "#50AF95",
      "#f3ba2f",
      "#2a71d0",
      "#2f7fd0",
    ],
    "borderColor": "black",
    "borderWidth": 2
    }
  ]
  });

  const chartData2 = useSignal({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 14, 15, 16, 18, 23, 24],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [12, 14, 15, 16, 18, 23, 24],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ]
  });

  return (
    <div class="w-100 h-100">
      <div className="p-10 distinct row">
        <div className="title-block">
          <p class="greeting">Hey Fuad!</p>
          <h1>Overview</h1>
        </div>
      </div>

      <div className="row p-10">
        <Card
          style="w-30"
          title="Order Insights"
          icon="fa-solid fa-clipboard-list"
          bg="lemon-chiffon"
          value={62900}
          valuePrefix="$"
          increased={true}
          increasedByPercentage={20}
          secondaryTitle="Last Month's Order Value"
          secondaryValue={89333}
          secondaryValuePrefix="$"
          tertiaryTitle="Outstanding"
          tertiaryValue={672000}
          tertiaryValuePrefix="$"
        />

        <Card
          style="w-30"
          title="Inventory Insights"
          icon="fa-solid fa-dollar-sign"
          bg="winter-wizard"
          value={182900000}
          valuePrefix="$"
          valueHeader="Total Stock Value"
        />

        <Card
          style="w-30"
          title="CoGS Insights"
          icon="fa-solid fa-database"
          bg="magic-mint"
          value={63400}
          valuePrefix="$"
          increased={false}
          increasedByPercentage={10}
          secondaryTitle="Cost of Goods Sold %"
          secondaryValue={89}
          secondaryValueSuffix=" %"
          tertiaryTitle="Turn Over"
          tertiaryValue={675000}
          tertiaryValuePrefix="$"
        />
      </div>

      <div className="p-10">
        <h1>Report</h1>
      </div>

      <div className="row p-10">
        <select class="standard-select">
          <option>Last 7 days</option>
          <option>Last month</option>
          <option>Last 6 months</option>
          <option>Last year</option>
        </select>

      </div>

      <div className="row p-10">
        <ContentCard
          style="w-47"
          title="Inventory Value per Outlet"
        >
          <div className="highlighted-change-container mt-10">
            <span className="highlighted-change">100%</span>
          </div>

          <div className="graph-container">
            <ChartJSGraph
              chartData={chartData1.value}
            />
          </div>
        </ContentCard>

        <ContentCard
          style="w-47"
          title="Monthly Value per Outlet"
        >
          <div className="highlighted-change-container mt-10">
            <span className="highlighted-change">100%</span>
          </div>

          <div className="graph-container">
            <ChartJSGraph
              chartData={chartData2.value}
            />
          </div>
        </ContentCard>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Inventory Management",
  meta: [
    {
      name: "InventoryManagement",
      content:
        "An application for managing the inventory of a clothing business",
    },
  ],
};
