"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import Alert from "../common/alert";
import { toast } from "sonner";
import { deleteBlog } from "@/actions/blog-actions";
interface DeleteBlogButtonProps {
  blogId: number;
}

export default function DeleteBlogButton({ blogId }: DeleteBlogButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await deleteBlog(blogId);
      if (res.success) {
        toast(res.message);
        router.push("/");
        router.refresh();
      } else {
        toast(res.message);
      }
    } catch (e) {
      console.error(e);
      toast("Failed to delete blog");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Alert
      title="Delete Blog?"
      description="This action cannot be undone. Are you sure you want to permanently delete this blog?"
      onConfirm={handleDelete}
      trigger={
        <Button
					className="cursor-pointer"
          disabled={isDeleting}
          variant="destructive"
          size="sm"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          {isDeleting ? "Deleting" : "Delete"}
        </Button>
      }
    />
  );
}

