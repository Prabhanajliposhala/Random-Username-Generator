
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

interface GeneratedUsernameProps {
  username: string;
}

export const GeneratedUsername = ({ username }: GeneratedUsernameProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(username);
      setCopied(true);
      toast.success("Username copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy username");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 flex items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <span className="text-lg font-medium text-gray-700">{username}</span>
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        aria-label="Copy username"
      >
        {copied ? (
          <Check className="w-5 h-5 text-green-500" />
        ) : (
          <Copy className="w-5 h-5 text-gray-500" />
        )}
      </button>
    </motion.div>
  );
};
