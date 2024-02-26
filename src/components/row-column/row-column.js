import React from "react";

const RowColumn = ({leftCol, rightCol}) => {
    return (
        <section className="section">
            <div className="section__in">
                <div className="grid">
                    <div className="grid_item">
                        {leftCol}
                    </div>
                    <div className="grid_item">
                        {rightCol}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RowColumn;
