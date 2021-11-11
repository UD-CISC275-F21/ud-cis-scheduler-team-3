import React, {ReactElement, useState} from "react";
import TabTitle from "./TabTitle";
import "../../css/Tabs.css";


type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
    const [selectedTab, setSelectedTab ] = useState(0);

    return (
        <div className="TabsCSS">
            <ul className="ul">
                {children.map((item, index) => 
                    <TabTitle
                        key={index}
                        title={item.props.title}
                        index={index}
                        setSelectedTab={setSelectedTab}
                        selectedTab={selectedTab}
                    />
                )}
            </ul>
            {children[selectedTab]}
        </div>
    );
};

export default Tabs;