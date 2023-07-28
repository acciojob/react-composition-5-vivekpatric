import React,{useState} from "react";

const Tabs = ({tab}) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleClick = (index) => {
        setActiveTab(index);
    }
    return(
        <>
            <ul>
                {
                    tab.map((item, index) => (
                        <li key={index} onClick={() => handleClick(index)}>{item.title}</li>
                    ))
                }
            </ul>

            <div>{tab[activeTab] && <p>{tab[activeTab].content}</p>}</div>
        </>
    )
}


export default Tabs;