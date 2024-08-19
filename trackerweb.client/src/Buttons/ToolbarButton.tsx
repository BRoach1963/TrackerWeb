import React from 'react';
import './ToolbarButton.css';  

interface ToolbarButtonProps {
    onClick: () => void;       
    tooltip: string;            
    iconPath: string;           
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ onClick, tooltip, iconPath }) => {
    return (
        <button className="toolbar-button" onClick={onClick} title={tooltip}>
            <svg className="toolbar-icon" viewBox="0 0 24 24">
                <path d={iconPath} />
            </svg>
        </button>
    );
};

export default ToolbarButton;
