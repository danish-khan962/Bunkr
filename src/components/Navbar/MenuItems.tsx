"use client";

interface MenuItemProps{
    onClick: () => void,
    MenuLabel: string,
}

const MenuItems: React.FC<MenuItemProps> = ({
    onClick, MenuLabel
}) => {
  return (
    <div
    className="text-sm transition cursor-pointer hover:bg-neutral-100 font-medium py-3 px-2 border-b border-gray-200 hover:rounded-lg"
    onClick={onClick}
    >
        {MenuLabel}
    </div>
  )
}

export default MenuItems