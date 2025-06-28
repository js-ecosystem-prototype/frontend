import CornerRadiusButton from "@/components/common/theme/CornerRadiusButton";
import { CornerRadiusSlider } from "@/components/common/theme/CornerRadiusSlider";
import { ThemeConbobox } from "@/components/common/theme/ThemeCombobox";
import { Button } from "@/components/ui/button";
import { CORNER_RADIUS_DATA, CornerRadiusData } from "@/types/ui";
import { ShieldUser } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex gap-4 p-24 m-4 border rounded-lg shadow-md">
        <Button variant={"outline"} className="font-bold">
          <ShieldUser />
          <a href="/admin">Admin</a>
        </Button>
      </div>
    </>
  );
}
