import React, { ButtonHTMLAttributes, ReactNode, MouseEvent } from "react";
import { Icon } from "react-icons-kit";
import { ic_delete } from "react-icons-kit/md/ic_delete";
import { ic_edit } from "react-icons-kit/md/ic_edit";
import { ic_remove_red_eye } from "react-icons-kit/md/ic_remove_red_eye";

interface ActionButtonProps {
    children?: ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> & any = ({ children }: { children: any }) => {
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
    icon: any;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    color: string;
    tooltip: string;
    disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, color, tooltip, disabled }) => {
    return (
        <li className="relative group">
            <button
                onClick={onClick}
                className={`p-2 rounded-md transition-all ${disabled ? "opacity-30 cursor-not-allowed" : "hover:brightness-90"}`}
                style={{ backgroundColor: color }}
                disabled={disabled}
            >
                <Icon icon={icon} size={18} className="text-white" />
            </button>
            {!disabled && <Tooltip text={tooltip} />}
        </li>
    );
};

ActionButton.DeleteIcon = ({ onClick }: { onClick: (e: MouseEvent<HTMLButtonElement>) => void }) => (
    <IconButton onClick={onClick} color="#EA5455" icon={ic_delete} tooltip="Delete Record" />
);

ActionButton.EditIcon = ({ onClick, ...props }: { onClick: (e: MouseEvent<HTMLButtonElement>) => void } & ButtonHTMLAttributes<HTMLButtonElement>) => (
    <IconButton onClick={onClick} color="#28C76F" icon={ic_edit} tooltip="Edit Record" {...props} />
);

ActionButton.ViewIcon = ({ onClick }: { onClick: () => void }) => (
    <IconButton onClick={() => onClick()} color="#637381" icon={ic_remove_red_eye} tooltip="View Record" />
);

export default ActionButton;
