import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import style from "./style.scss";

export interface GVTabProps {
  label: React.ReactNode;
  value: string;
  count?: number;
  selected?: boolean;
  className?: string;
  countClassName?: string;
  onChange?: (e: React.SyntheticEvent<EventTarget>, value: string) => void;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const GVTab: React.SFC<GVTabProps> = ({
  label,
  value,
  count,
  selected,
  className,
  countClassName,
  onChange,
  onClick
}) => {
  const handleChange = (e: React.SyntheticEvent<EventTarget>) => {
    if (onChange) {
      onChange(e, value);
    }
    if (onClick) {
      onClick(e);
    }
  };

  const renderCount = () => {
    if (count === undefined) return null;
    return (
      <span className={classnames(countClassName, style.gvTabCount)}>
        {count}
      </span>
    );
  };

  return (
    <div
      className={classnames(className || style.gvTab, {
        [style.gvTabActive]: selected
      })}
      onClick={handleChange}
    >
      {label}
      {renderCount()}
    </div>
  );
};

GVTab.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  className: PropTypes.string,
  countClassName: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

export default GVTab;
