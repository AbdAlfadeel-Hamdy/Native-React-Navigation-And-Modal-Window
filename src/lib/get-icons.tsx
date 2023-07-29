import { GoArrowDown, GoArrowUp } from "react-icons/go";

const getIcons = (
  label: string,
  sortBy: string | null,
  sortOrder: string | null
) => {
  if (!sortOrder || sortBy !== label)
    return (
      <div>
        <GoArrowUp size={12} />
        <GoArrowDown size={12} />
      </div>
    );
  if (sortOrder === "asc")
    return (
      <div>
        <GoArrowUp size={12} />
      </div>
    );
  return (
    <div>
      <GoArrowDown size={12} />
    </div>
  );
};

export default getIcons;
