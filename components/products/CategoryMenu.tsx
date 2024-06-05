import React from "react";
import { Button } from "@/components/ui/button";
// CategoryMenu component
const CategoryMenu = ({ categories, activeCategory, onClick }: any) => {
  return (
    <div className="flex justify-start space-x-4">
      {categories.map((category: any) => (
        <Button
          key={category}
          variant="outline"
          className={activeCategory === category ? "bg-gray-300" : ""}
          onClick={() => onClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
export default CategoryMenu;
