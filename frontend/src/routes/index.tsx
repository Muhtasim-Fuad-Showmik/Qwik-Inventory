import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Card from "../components/card/card";
import ContentCard from "../components/contentCard/contentCard";

export default component$(() => {
  return (
    <div class="w-100">
      <div className="p-10">
        <p class="greeting">Hey Fuad!</p>
        <h1>Overview</h1>
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
            Graph Placeholder
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
            Graph Placeholder
          </div>
        </ContentCard>
      </div>

      <Link class="btn standard" href="/flower">
        Sample Button
      </Link>
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
