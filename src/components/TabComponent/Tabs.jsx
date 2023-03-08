import {useState, useEffect} from 'react';
import Conversion from '../AllTabs/Conversion';
import Rates from '../AllTabs/Rates';


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
      };
  return (
    <div className="Tabs">
    <ul className="nav">
      <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Conversions</li>
      <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Rates</li>
    </ul>
      <div className="outlet">
      {activeTab === "tab1" ? <Conversion /> : <Rates />}
       {/* <Conversion/> */}
       {/* <Rates/> */}
      </div>
    </div>
  );
};
export default Tabs;