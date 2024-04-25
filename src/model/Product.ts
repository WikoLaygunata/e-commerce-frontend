import { CategoryModel } from "./Category";
import { UnitCategoryModel } from "./UnitCategory";

export interface ProductModel {
  id: number;
  name: string;
  qty: number;
  price: number;
  unit_id: number;
  slug: string;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string | null;
  unitcategory: UnitCategoryModel;
  categories: CategoryModel[];
}
