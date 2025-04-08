import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useFormContext } from "react-hook-form";

export default function ImageSection() {
  const { control, watch } = useFormContext();
  const existingImageUrl   = watch("imageUrl");
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Images</h2>
        <FormDescription>
          add an image that will be displayed on your restaurant listing in the
          search result. adding a n image will overwrite existing one
        </FormDescription>

        <div className="flex flex-col gap-8 md:w-[50%]">
          {existingImageUrl && (
            <AspectRatio ratio={16/9} >
              <img src={existingImageUrl} className="rounded-md object-cover h-full w-full" />
            </AspectRatio>
          )
            }
          <FormField
            control={control}
            name="imageFile"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    className="bg-white"
                    onChange={(e) =>
                      field.onChange(e.target.files ? e.target.files[0] : null)
                    }
                  />
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          ></FormField>
        </div>
      </div>
    </div>
  );
}
