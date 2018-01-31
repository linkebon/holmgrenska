import React from 'react';
import BoardInfo from "../contentcomponents/BoardInfo";
import CollapsableContentEntry from "./CollapsableContentEntry";

const Board = () => {
    return (
        <CollapsableContentEntry id="boardId" bgColorCssClass="bg-light" isRoundedTop={false} isRoundedBottom={false}
                                 textColorCssClass="text-dark"
                                 header="" secondHeader="Styrelsen"
                                 areaLabel="boardInfo" isInitiallyCollapsed={false} isCollapseDisabled={true}>
            <BoardInfo/>
        </CollapsableContentEntry>

    )
};
export default Board