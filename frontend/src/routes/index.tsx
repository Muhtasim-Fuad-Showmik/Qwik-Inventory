import { component$, useRef } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Card from "../components/card/card";
import ContentCard from "../components/contentCard/contentCard";
import ChartJSGraph from "../components/chartJSGraph/chartJSGraph";

export default component$(() => {
  const leftChartContainer = useRef();
  const rightChartContainer = useRef();

  return (
    <div class="w-100 h-100">
      <div className="p-10">
        <div className="title-block">
          <p class="greeting">Hey Fuad!</p>
          <h1>Overview</h1>
        </div>
      </div>

      <div className="row">
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

      <div className="row">
        <select class="standard-select">
          <option>Last 7 days</option>
          <option>Last month</option>
          <option>Last 6 months</option>
          <option>Last year</option>
        </select>
        
      </div>

      <div className="row">
        <ContentCard
          style="w-47"
          title="Inventory Value per Outlet"
        >
          <div className="highlighted-change-container mt-10">
            <span className="highlighted-change">100%</span>
          </div>

          <div className="graph-container">
            <ChartJSGraph
              data={[
                { year: 2010, count: 10 },
                { year: 2011, count: 20 },
                { year: 2012, count: 15 },
                { year: 2013, count: 25 },
                { year: 2014, count: 22 },
                { year: 2015, count: 30 },
                { year: 2016, count: 28 },
              ]}
              reference={leftChartContainer}
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
              data={[
                  { year: 2010, count: 10 },
                  { year: 2011, count: 20 },
                  { year: 2012, count: 15 },
                  { year: 2013, count: 25 },
                  { year: 2014, count: 22 },
                  { year: 2015, count: 30 },
                  { year: 2016, count: 28 },
                ]}
              reference={rightChartContainer}
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
