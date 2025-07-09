import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Button variant={"link"}>
        <a href="/admin">Admin</a>
      </Button>
      <Button variant={"link"}>
        <a href="/theme-testing">Theme Testing</a>
      </Button>
    </div>
  );
}
