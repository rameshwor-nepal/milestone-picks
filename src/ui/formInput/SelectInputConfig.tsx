import { StylesConfig } from "react-select";

export const SelectStyles: StylesConfig = {
    input: (base) => ({
        ...base,
        fontFamily: "inherit",
        fontSize: "0.875rem", // text-sm
        color: "#4D4E5D",
    }),
    placeholder: (base) => ({
        ...base,
        fontFamily: "inherit",
        fontSize: "0.875rem",
        color: "#757474",
    }),
    control: (base, state) => ({
        ...base,
        backgroundColor: state.isFocused
            ? "#fff"
            : state.isDisabled
                ? "#F5F4F7"
                : "#fafafa",
        borderRadius: "0.25rem", // rounded
        borderColor: state.isFocused ? "#757474" : "#d0d0d0",
        borderWidth: "1px",
        boxShadow: "none",
        fontSize: "0.875rem",
        fontWeight: "400",
        transition: "all 0.2s ease",
        "&:hover": {
            borderColor: state.isFocused ? "#757474" : "#d0d0d0",
        },
    }),
    option: (base, { isSelected }) => ({
        ...base,
        padding: "0.75rem",
        fontSize: "0.875rem",
        backgroundColor: isSelected ? "#e0e6fe" : "#fff",
        color: "#4D4E5D",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#122E99",
            color: "#fff",
        },
    }),
    menu: (base) => ({
        ...base,
        marginTop: "0.25rem",
        borderRadius: "0.25rem",
        border: "none",
    }),
    menuList: (base) => ({
        ...base,
        padding: 0,
        backgroundColor: "#fff",
        borderRadius: "0.25rem",
    }),
    menuPortal: (base) => ({
        ...base,
        zIndex: 25,
    }),
    container: (base) => ({
        ...base,
        width: "100%",
        minWidth: "15rem",
        display: "block",
    }),
    valueContainer: (base) => ({
        ...base,
        "&:hover": {
            cursor: "text",
        },
    }),
    noOptionsMessage: (base) => ({
        ...base,
        fontSize: "0.875rem",
        color: "#4D4E5D",
    }),
    indicatorSeparator: (base) => ({
        ...base,
        display: "none",
    }),
    clearIndicator: (base) => ({
        ...base,
        padding: "0.25rem",
    }),
    dropdownIndicator: (base) => ({
        ...base,
        padding: "0.25rem",
    }),
};
