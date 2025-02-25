
import { UsernameGenerator } from "@/components/UsernameGenerator";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Username Generator
        </h1>
        <p className="text-lg text-gray-600">
          Create unique, memorable usernames for your online presence
        </p>
      </motion.div>

      <UsernameGenerator />
    </div>
  );
};

export default Index;
