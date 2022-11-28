import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Card from "../components/card/card";

export default component$(() => {
  return (
    <div class="w-100">
      <div className="p-10">
		<p class="greeting">Hey Fuad!</p>
		<h1>Overview</h1>
	  </div>

      <div className="d-flex justify-content-space-between mb-20 w-100 p-10">
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
