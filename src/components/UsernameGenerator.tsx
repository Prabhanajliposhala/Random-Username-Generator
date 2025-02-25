
import { useState } from "react";
import { motion } from "framer-motion";
import { generateUsername } from "@/utils/usernameGenerator";
import { GeneratedUsername } from "./GeneratedUsername";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const UsernameGenerator = () => {
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);
  const [usernames, setUsernames] = useState<string[]>([]);

  const handleGenerate = () => {
    const newUsername = generateUsername(includeNumbers, includeSpecial);
    setUsernames(prev => [newUsername, ...prev.slice(0, 4)]);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="numbers" className="text-sm font-medium">
            Include Numbers
          </Label>
          <Switch
            id="numbers"
            checked={includeNumbers}
            onCheckedChange={setIncludeNumbers}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="special" className="text-sm font-medium">
            Include Special Characters
          </Label>
          <Switch
            id="special"
            checked={includeSpecial}
            onCheckedChange={setIncludeSpecial}
          />
        </div>
      </div>

      <Button
        onClick={handleGenerate}
        className="w-full py-6 text-lg font-medium bg-black hover:bg-gray-800 text-white transition-colors duration-300"
      >
        Generate Username
      </Button>

      <div className="space-y-4">
        {usernames.map((username, index) => (
          <GeneratedUsername key={`${username}-${index}`} username={username} />
        ))}
      </div>
    </div>
  );
};
