import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";

import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";


export default function Menusection() {
  const {control} = useFormContext();
  const {fields , append , remove} = useFieldArray({control , name : "menuItems" ,});  
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">Menu</h2>
      <FormDescription>create your menu and give each iteam a price</FormDescription>
      <div>
        <FormField control={control} name="menuItems" render={({field})=>(
          <FormItem className="flex flex-col gap-2">
            {fields.map((_ , index)=>(
              <MenuItemInput index={index}  removeMenuItem={remove} />
            ))}
          </FormItem>

        )}>

        </FormField>
      </div>
      <Button type="button" onClick={() => append({ name: "", price: "" })}>Add menu items</Button>
      
    </div>
  )
}
