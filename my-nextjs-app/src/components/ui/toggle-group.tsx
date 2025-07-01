import React from "react";

interface ToggleGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export function ToggleGroup({
  value,
  onValueChange,
  children,
  className,
}: ToggleGroupProps) {
  return (
    <div className={`flex space-x-2 ${className || ''}`}>
      {React.Children.map(children, (child) => {
        
        return child;
      })}
    </div>
  );
}

interface ToggleGroupItemProps {
  value: string;
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export function ToggleGroupItem({
  value,
  selected,
  onClick,
  children,
  className,
}: ToggleGroupItemProps) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${selected ? "bg-blue-500 text-white" : "bg-gray-300 dark:bg-gray-700"} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
