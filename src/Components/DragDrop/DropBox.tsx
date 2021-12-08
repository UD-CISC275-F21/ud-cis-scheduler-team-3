import React, { FC, useState, useCallback } from "react";
import Card from "./DragCard";
import update from "immutability-helper";
//import { Semester } from "../../Interfaces/Semester";

const style = {
    width: 400,
};

export interface Item {
  id: number
  text: string
}

export interface ContainerSemester {
  cards: Item[]
}


export const DropBox: FC = () => {
    {
        const [cards, setCards] = useState([
            {
                id: 1,
                text: "cisc108",
            },
            {
                id: 2,
                text: "cisc320",
            },
            {
                id: 3,
                text: "cisc275",
            },
      
        ]);

        const moveCard = useCallback(
            (dragIndex: number, hoverIndex: number) => {
                const dragCard = cards[dragIndex];
                setCards(
                    update(cards, {
                        $splice: [
                            [dragIndex, 1],
                            [hoverIndex, 0, dragCard],
                        ],
                    }),
                );
            },
            [cards],
        );

        const renderCard = (card: { id: number; text: string }, index: number) => {
            return (
                <Card
                    key={card.id}
                    index={index}
                    id={card.id}
                    text={card.text}
                    moveCard={moveCard}
                />
            );
        };

        return (
            <>
                <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
            </>
        );
    }
};

export default DropBox;