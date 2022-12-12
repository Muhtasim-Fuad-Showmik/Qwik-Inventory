import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./accordionTable.css?inline";

interface accordionTableProps {
  content: object;
}

export default component$((props: accordionTableProps) => {
  useStylesScoped$(styles);

  return (
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
        <tr className="selected">
          <td className="orderId">#2323</td>
          <td>23/10/2022</td>
          <td>Julia Roberts</td>
          <td>Amazon</td>
          <td>International</td>
          <td>5</td>
          <td>
            <span className={`status ${'fulfilled'}`}>
              <span className="dot">
                <i class="fa-solid fa-circle"></i>
              </span>
              <span>Fulfilled</span>
            </span>
          </td>
          <td>
            <div className="circle">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </td>
        </tr>
        <tr className="dependent">
          <td colSpan={8}>
            <table className="table secondary" cellSpacing="0">
              <tbody>
                <tr>
                  <td>
                    <img className="thumbnail" src="/Drone.jpg" alt="Drone" />
                  </td>
                  <td>
                    <div className="item-header">DJI Mini 3 Pro</div>
                    <div>DJI RC</div>
                  </td>
                  <td>
                    <div>Pick</div>
                    <div>1</div>
                  </td>
                  <td>
                    <div>Bin</div>
                    <div>C011-034</div>
                  </td>
                  <td>
                    <div>Vendor</div>
                    <div>DJI</div>
                  </td>
                  <td>
                    <div>On Hand</div>
                    <div>23</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img className="thumbnail" src="/Gaming Chair.webp" alt="Gaming Chair" />
                  </td>
                  <td>
                    <div className="item-header">GTRACING Gaming Chair with Footrest</div>
                    <div>WMT-GT802A-WHITE</div>
                  </td>
                  <td>
                    <div>Pick</div>
                    <div>3</div>
                  </td>
                  <td>
                    <div>Bin</div>
                    <div>C023-6121</div>
                  </td>
                  <td>
                    <div>Vendor</div>
                    <div>GTRACING</div>
                  </td>
                  <td>
                    <div>On Hand</div>
                    <div>13</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img className="thumbnail" src="/Laptop Cooler.jpg" alt="drone" />
                  </td>
                  <td>
                    <div className="item-header">Laptop Cooling Pad, Laptop Cooler with 6 Quiet Led Fans for 15.6-17 Inch Laptop Cooling Fan Stand</div>
                    <div>19019154</div>
                  </td>
                  <td>
                    <div>Pick</div>
                    <div>2</div>
                  </td>
                  <td>
                    <div>Bin</div>
                    <div>LC71-023</div>
                  </td>
                  <td>
                    <div>Vendor</div>
                    <div>LIANGSTAR</div>
                  </td>
                  <td>
                    <div>On Hand</div>
                    <div>18</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td className="orderId">#2324</td>
          <td>31/10/2022</td>
          <td>Roberto Gonzales</td>
          <td>Alibaba</td>
          <td>Domestic</td>
          <td>2</td>
          <td>
            <span className={`status ${'pending'}`}>
              <span className="dot">
                <i class="fa-solid fa-circle"></i>
              </span>
              <span>Pending</span>
            </span>
          </td>
          <td>
            <div className="circle">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td className="orderId">#2325</td>
          <td>17/12/2022</td>
          <td>Margaret Thatcher</td>
          <td>Ebay</td>
          <td>International</td>
          <td>2</td>
          <td>
            <span className={`status ${'unfulfilled'}`}>
              <span className="dot">
                <i class="fa-solid fa-circle"></i>
              </span>
              <span>Unfulfilled</span>
            </span>
          </td>
          <td>
            <div className="circle">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
});
