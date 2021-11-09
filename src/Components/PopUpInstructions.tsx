import React, { useCallback } from "react";

type Props = {
    handleClose: () => void;
    content: string ;
}

const PopUp: React.FC<Props> = ({handleClose, content}) => {

    const onClick = useCallback(()=>{
        handleClose();
    },
    [handleClose, content]);

    return (
        <div>
            <span className = "popup"> {onClick}{handleClose}
            [x]
            </span>
            {content}
        </div>
    );
};

export default PopUp;
    