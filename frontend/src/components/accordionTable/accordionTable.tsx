import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./accordionTable.css?inline";

interface accordionTableProps {
  content?: Array<object>;
  selections?: Array<boolean>;
}

export default component$((props: accordionTableProps) => {
	useStylesScoped$(styles);

	return (
		<>
			<table className={`table`} cellSpacing="0">
			<thead>
				<tr>
				<th>Order ID</th>
				<th>Date</th>
				<th>Seller</th>
				<th>Sales Channel</th>
				<th>Source</th>
				<th>Items</th>
				<th>Status</th>
				<th></th>
				</tr>
			</thead>
			<tbody>
				{
				props.content &&
				props.content.map((item, i) => {
					return (
						<>
							<tr className={item.Selected && "selected"}>
								<td className="orderId">{item.OrderID}</td>
								<td>{item.Date}</td>
								<td>{item.Seller}</td>
								<td>{item.SalesChannel}</td>
								<td>{item.Source}</td>
								<td>{item.Items}</td>
								<td>
									<span className={`status ${item.Status}`}>
										<span className="dot">
											<i class="fa-solid fa-circle"></i>
										</span>
										<span>
											{item.Status.charAt(0).toUpperCase() +
												item.Status.slice(1)}
										</span>
									</span>
								</td>
								<td>
									<div className="circle">
										<i 
											class="fa-solid fa-chevron-down"
											onClick$={() => {
												props.selections[i] = !props.selections[i];
												console.log("Selections: ", props.selections);
											}}
										></i>
									</div>
								</td>
							</tr>
									{item.Dependent && item.Dependent.length > 0 ? (
										<>
											<tr className={`dependent ${!item.Selected && 'd-none'}`}>
												<td colSpan={8}>
													<table
														className="table secondary"
														cellSpacing="0"
													>
														<tbody>
															{item.Dependent.map(
																(dependentItem) => {
																	return (
																		<tr>
																			<td>
																				<img
																					className="thumbnail"
																					src={dependentItem.ThumbnailPath}
																					alt="Drone"
																				/>
																			</td>
																			<td>
																				<div className="item-header">
																					{dependentItem.ItemHeader}
																				</div>
																				<div>
																					{dependentItem.ItemCode}
																				</div>
																			</td>
																			<td>
																				<div>
																					Pick
																				</div>
																				<div>
																					{dependentItem.Pick}
																				</div>
																			</td>
																			<td>
																				<div>
																					Bin
																				</div>
																				<div>
																					{dependentItem.Bin}
																				</div>
																			</td>
																			<td>
																				<div>
																					Vendor
																				</div>
																				<div>
																					{dependentItem.Vendor}
																				</div>
																			</td>
																			<td>
																				<div>
																					On
																					Hand
																				</div>
																				<div>
																					{dependentItem.OnHand}
																				</div>
																			</td>
																		</tr>
																	);
																}
															)}
														</tbody>
													</table>
												</td>
											</tr>
										</>
									) : (
										<>
											<tr className={`dependent ${!item.Selected && 'd-none'}`}>
												<td colSpan={8}>
													No dependent items
												</td>
											</tr>
										</>
									)}
						</>
					);
				})
				}
			</tbody>
			</table>
		</>
  	);
});
