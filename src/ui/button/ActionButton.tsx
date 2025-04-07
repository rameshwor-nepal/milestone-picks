import React, { ButtonHTMLAttributes, ReactNode, MouseEvent } from "react";
import { IconType } from "react-icons";
import { IoMdAdd } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";

interface ActionButtonProps {
    children?: ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> & {
    DeleteIcon: React.FC<{ onClick?: (e: MouseEvent<HTMLButtonElement>) => void }>;
    AddIcon: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & { onClick?: (e: MouseEvent<HTMLButtonElement>) => void }>;
    EditIcon: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & { onClick?: (e: MouseEvent<HTMLButtonElement>) => void }>;
} = ({ children }) => {
    return <ul className="flex items-center justify-center gap-2 list-none">{children}</ul>;
};

interface TooltipProps {
    text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => (
    <span className="absolute top-[-40px] left-1/2 -translate-x-1/2 opacity-0 transition-opacity bg-gray-800 text-white text-sm font-normal p-2 rounded-md whitespace-nowrap group-hover:opacity-100">
        {text}
        <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 border-transparent border-t-gray-800 border-t-8 border-x-8"></span>
    </span>
);

interface IconButtonProps {
    icon: IconType;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    color: string;
    tooltip: string;
    disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, onClick, color, tooltip, disabled }) => (
    <li className="relative group">
        <button
            onClick={onClick}
            className={`p-1 rounded-md transition-all ${disabled ? "opacity-30 cursor-not-allowed" : "hover:brightness-90"}`}
            style={{ backgroundColor: color }}
            disabled={disabled}
        >
            <Icon size={22} className="text-white" />
        </button>
        {!disabled && <Tooltip text={tooltip} />}
    </li>
);

ActionButton.DeleteIcon = ({ onClick }) => (
    <IconButton onClick={onClick && onClick} color="#EA5455" icon={MdDelete} tooltip="Delete Record" />
);

ActionButton.AddIcon = ({ onClick, ...props }) => (
    <IconButton onClick={onClick} color="#28C76F" icon={IoMdAdd} tooltip="Add Record" {...props} />
);

ActionButton.EditIcon = ({ onClick, ...props }) => (
    <IconButton onClick={onClick} color="#28C76F" icon={MdEdit} tooltip="Edit Record" {...props} />
);

// Add display names for all components
ActionButton.displayName = "ActionButton";
ActionButton.DeleteIcon.displayName = "ActionButton.DeleteIcon";
ActionButton.AddIcon.displayName = "ActionButton.AddIcon";
ActionButton.EditIcon.displayName = "ActionButton.EditIcon";
Tooltip.displayName = "Tooltip";
IconButton.displayName = "IconButton";

export default ActionButton;
