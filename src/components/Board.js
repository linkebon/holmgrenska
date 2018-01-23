import React from 'react';
import BoardInfo from "./BoardInfo";
import CollapsableContentEntry from "./CollapsableContentEntry";

const Board = () => {
    return (
        <CollapsableContentEntry id="boardId" bgColorCssClass="bg-light" isRoundedTop={false} isRoundedBottom={false}
                                 textColorCssClass="text-dark"
                                 header="" secondHeader="Styrelsen"
                                 areaLabel="boardInfo" isInitiallyCollapsed={true}>
            <BoardInfo/>
        </CollapsableContentEntry>

    )
};
export default Board