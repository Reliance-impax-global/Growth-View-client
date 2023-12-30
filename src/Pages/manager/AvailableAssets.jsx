const AvailableAssets = () => {
  return (
    <div className="mt-[50px] px-[40px]">
      <h3 className="text-blue-800 text-[40px] font-semibold font-['Inter'] ">
        Available Assets
      </h3>
      <div className="w-[1782.01px] h-[0px] border border-blue-200 mx-auto my-12"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="border-none">
            <tr className="text-black text-[25px] font-medium font-['Inter']">
              <th>Country</th>
              <th>Place</th>
              <th>Asset Category </th>
              <th>Asset Name </th>
              <th>Asset Expense Amount </th>
            </tr>
          </thead>
          <tbody className="text-neutral-400 text-[25px]">
            {/* row 1 */}
            <tr>
              <td>India</td>
              <td>
                <ul className="space-y-4">
                  <li>Dhaka</li>
                  <li>Mumbai</li>
                  <li>Pune</li>
                </ul>
              </td>
              <td>Car</td>
              <td>
                <ul className="space-y-4">
                  <li>Range Rover</li>
                  <li>Wagon R</li>
                  <li>SUV</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table my-12">
          {/* head */}
          <thead className="border-none">
            <tr className="text-black text-[25px] font-medium font-['Inter']">
              <th>Country</th>
              <th>Place</th>
              <th>Asset Category </th>
              <th>Asset Name </th>
              <th>Asset Expense Amount </th>
            </tr>
          </thead>
          <tbody className="text-neutral-400 text-[25px]">
            {/* row 1 */}
            <tr>
              <td>India</td>
              <td>
                <ul className="space-y-4">
                  <li>Dhaka</li>
                  <li>Mumbai</li>
                  <li>Pune</li>
                </ul>
              </td>
              <td>Car</td>
              <td>
                <ul className="space-y-4">
                  <li>Range Rover</li>
                  <li>Wagon R</li>
                  <li>SUV</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table">
          {/* head */}
          <thead className="border-none">
            <tr className="text-black text-[25px] font-medium font-['Inter']">
              <th>Country</th>
              <th>Place</th>
              <th>Asset Category </th>
              <th>Asset Name </th>
              <th>Asset Expense Amount </th>
            </tr>
          </thead>
          <tbody className="text-neutral-400 text-[25px]">
            {/* row 1 */}
            <tr>
              <td>India</td>
              <td>
                <ul className="space-y-4">
                  <li>Dhaka</li>
                  <li>Mumbai</li>
                  <li>Pune</li>
                </ul>
              </td>
              <td>Car</td>
              <td>
                <ul className="space-y-4">
                  <li>Range Rover</li>
                  <li>Wagon R</li>
                  <li>SUV</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvailableAssets;
