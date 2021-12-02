import React, { useCallback } from "react";
import "../../css/PopUp.css";


type Props = {
    handleClose: () => void;
    content: string ;
}

const PopUp: React.FC<Props> = ({handleClose, content}) => {

    const onClick = useCallback(()=>{
        handleClose();
    },
    [handleClose]);

    return (
        <div className = "PopUpBox">
            <div className = "box">
                <span className = "close" onClick={onClick}>
                 x
                </span>
                {content}
            </div>
        </div>
    );
};

export default PopUp;
    

