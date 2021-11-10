import React from "react";

export function Checkbox(): JSX.Element {
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    const [checkedThree, setCheckedThree] = React.useState(false);
    const [checkedFour, setCheckedFour] = React.useState(false);
    const [checkedFive, setCheckedFive] = React.useState(false);
    const [checkedSix, setCheckedSix] = React.useState(false);
    const [checkedSeven, setCheckedSeven] = React.useState(false);
    const [checkedEight, setCheckedEight] = React.useState(false);

    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    };
    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
    };
    const handleChangeThree = () => {
        setCheckedThree(!checkedThree);
    };
    const handleChangeFour = () => {
        setCheckedFour(!checkedFour);
    };
    const handleChangeFive = () => {
        setCheckedFive(!checkedFive);
    };
    const handleChangeSix = () => {
        setCheckedSix(!checkedSix);
    };
    const handleChangeSeven = () => {
        setCheckedSeven(!checkedSeven);
    };
    const handleChangeEight = () => {
        setCheckedEight(!checkedEight);
    };

    return (
        <div>
            <TypeCheckBox label="F (Winter)" value={checkedOne} onChange={handleChangeOne} />
            <TypeCheckBox label="F (Summer)" value={checkedTwo} onChange={handleChangeTwo} />
            <TypeCheckBox label="Sp (Winter)" value={checkedThree} onChange={handleChangeThree} />
            <TypeCheckBox label="Sp (Summer)" value={checkedFour} onChange={handleChangeFour} />
            <TypeCheckBox label="J (Winter)" value={checkedFive} onChange={handleChangeFive} />
            <TypeCheckBox label="J (Summer)" value={checkedSix} onChange={handleChangeSix} />
            <TypeCheckBox label="Se (Winter)" value={checkedSeven} onChange={handleChangeSeven} />
            <TypeCheckBox label="Se (Summer)" value={checkedEight} onChange={handleChangeEight} />
        </div>
    );
}

/** 
   * Setter: (b:boolean) => void
   * Getter: () => boolean
   * () => void is equal to VoidFunction */

export function TypeCheckBox({ label, value, onChange }: {label: string, value: boolean, onChange: VoidFunction}): JSX.Element {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
}



 