import React from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

interface Props {
  page: string;
  children: string;
};

export default function MainButton(props: Props) {
  const [status, setStatus] = React.useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      href={props.page}
      className={`button-lol ${status}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props.children}
    </a>
  );
}
