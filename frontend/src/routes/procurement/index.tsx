import {
    component$,
    useStylesScoped$,
    useClientEffect$,
	useContext,
	useStore,
	useWatch$
} from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { procurementContext } from "~/root";
import styles from "./procurement.css?inline";
import AccordionTable from "../../components/accordionTable/accordionTable";

export default component$(() => {
    useStylesScoped$(styles);

    const procurementContextState = useContext(procurementContext);

    useClientEffect$(() => {
        if (localStorage.getItem("procurements")) {
            procurementContextState.items = [
                ...JSON.parse(localStorage.getItem("procurements")).items,
            ];
        } else {
			procurementContextState.items = [
				{
					"OrderID": "#2323",
					"Selected": true,
					"Date": "23/10/2022",
					"Seller": "Julia Roberts",
					"SalesChannel": "Amazon",
					"Source": "International",
					"Items": 5,
					"Status": "fulfilled",
					"Dependent": [
						{
							"ThumbnailPath": "/Drone.jpg",
							"ItemHeader": "DJI Mini 3 Pro",
							"ItemCode": "DJI RC",
							"Pick": 1,
							"Bin": "C011-034",
							"Vendor": "DJI",
							"OnHand": 23
						},
						{
							"ThumbnailPath": "/Gaming Chair.webp",
							"ItemHeader": "GTRACING Gaming Chair with Footrest",
							"ItemCode": "WMT-GT802A-WHITE",
							"Pick": 3,
							"Bin": "C023-6121",
							"Vendor": "GTRACING",
							"OnHand": 13
						},
						{
							"ThumbnailPath": "/Laptop Cooler.jpg",
							"ItemHeader": "Laptop Cooling Pad, Laptop Cooler with 6 Quiet Led Fans for 15.6-17 Inch Laptop Cooling Fan Stand",
							"ItemCode": "19019154",
							"Pick": 2,
							"Bin": "LC71-023",
							"Vendor": "LIANGSTAR",
							"OnHand": 18
						}
					]
				},
				{
					"OrderID": "#2324",
					"Selected": false,
					"Date": "31/10/2022",
					"Seller": "Roberto Gonzales",
					"SalesChannel": "Alibaba",
					"Source": "Domestic",
					"Items": 2,
					"Status": "pending",
					"Dependent": []
				},
				{
					"OrderID": "#2325",
					"Selected": false,
					"Date": "17/12/2022",
					"Seller": "Margaret Thatcher",
					"SalesChannel": "Ebay",
					"Source": "International",
					"Items": 2,
					"Status": "unfulfilled",
					"Dependent": [
						{
							"ThumbnailPath": "/Gaming Chair.webp",
							"ItemHeader": "GTRACING Gaming Chair with Footrest",
							"ItemCode": "WMT-GT802A-WHITE",
							"Pick": 3,
							"Bin": "C023-6121",
							"Vendor": "GTRACING",
							"OnHand": 31
						},
						{
							"ThumbnailPath": "/Laptop Cooler.jpg",
							"ItemHeader": "Laptop Cooling Pad, Laptop Cooler with 6 Quiet Led Fans for 15.6-17 Inch Laptop Cooling Fan Stand",
							"ItemCode": "19019154",
							"Pick": 2,
							"Bin": "LC71-023",
							"Vendor": "LIANGSTAR",
							"OnHand": 81
						}
					]
				}
			];
		}
    });

	const store = useStore({
		contentData: [],
		selections: []
	});

	useWatch$(({ track }) => {
		const contentData = track(() => procurementContextState.items);
		store.contentData = contentData;
		store.selections = contentData && contentData.length > 0 ?
			contentData.map((item) => item.Selected) :
			[];
	});

    return (
        <div class="w-100 h-100">
            <div className="distinct row">
                <div className="title-block">
                    <p>Hey Fuad!</p>
                    <h1>Procurement</h1>
                </div>

                <div className="right-block row">
                    <button className="btn md secondary">
                        Export to Excel
                    </button>
                    <button className="btn md secondary">Import Orders</button>
                    <button className="btn md primary">New Order</button>
                </div>
            </div>
            <div className="distinct row p-10">
                <div className="input withIcon d-flex align-items-center px-10">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search" />
                </div>

                <div className="gap">
                    <select class="standard-select">
                        <option>Date</option>
                        <option>Latest</option>
                        <option>Oldest</option>
                    </select>

                    <select class="standard-select">
                        <option>Sales Channel</option>
                        <option>122 A</option>
                        <option>123 B</option>
                        <option>124 C</option>
                    </select>

                    <select class="standard-select">
                        <option>Status</option>
                        <option>Pending</option>
                        <option>Closed</option>
                    </select>

                    <select class="standard-select">
                        <option>More Filters</option>
                        <option>International</option>
                        <option>Domestic</option>
                    </select>
                </div>
            </div>

            <div className="row p-10">
                <AccordionTable content={store.contentData} selections={store.selections} />
            </div>
        </div>
    );
});

export const head: DocumentHead = {
    title: "Procurement",
};
