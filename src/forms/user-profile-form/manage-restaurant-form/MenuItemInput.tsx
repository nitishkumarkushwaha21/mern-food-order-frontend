import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = { index: number; removeMenuItem: () => void };
export default function MenuItemInput({ index, removeMenuItem }: Props) {
  const { control } = useFormContext();
  return (
    <div className="flex flex-row items-end gap-2">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Name
              <FormMessage />
            </FormLabel>

            <FormControl>
              <Input
                {...field}
                placeholder="chesse pizza"
                className="bg-white"
              />
            </FormControl>
          </FormItem>
        )}
      ></FormField>

      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              price(₹)
              <FormMessage />
            </FormLabel>

            <FormControl>
              <Input {...field} placeholder="8-63464" className="bg-white" />
            </FormControl>
          </FormItem>
        )}
      ></FormField>

      <Button
        type="button"
        onClick={removeMenuItem}
        className="bg-red-500 max-h-fit"
      >
        remove
      </Button>
    </div>
  );
}
