import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";


export default function LoadingButton() {
  return (
    <Button>
      <Loader2 className="mr-2 w-4 animate-spin" />
      Loading
    </Button>
  )
}
