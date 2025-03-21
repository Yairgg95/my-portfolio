import { XCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import clsx from "clsx";

export default function CustomToast({ type, message }) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 p-4 rounded-lg shadow-md",
        "dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-900"
      )}
    >
      {type === "success" ? (
        <CheckCircle className="text-green-500" />
      ) : (
        <XCircle className="text-red-500" />
      )}
      <span>{message}</span>
    </div>
  );
}


export function showToast(type, message) {
  toast.custom(() => <CustomToast type={type} message={message} />);
}