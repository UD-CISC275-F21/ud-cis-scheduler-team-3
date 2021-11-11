import React, { useCallback } from "react";
import "../../css/Tabs.css";


type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
  selectedTab: number
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index, selectedTab }) => {

    const onClick = useCallback(() => {
        setSelectedTab(index);
    }, [setSelectedTab, index]);

    return (
        <div className = "TabsCSS">
            <li className={`li ${selectedTab === index ? "active" : ""}`}>
                <button onClick={onClick}>{title}</button>
            </li>
        </div>
    );
};
export default TabTitle;

