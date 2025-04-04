"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const avatars = [
    {
      id: 1,
      src: "/avatars/avatar1.png",
      alt: "Student Avatar 1",
    },
    {
      id: 2,
      src: "/avatars/avatar2.png",
      alt: "Student Avatar 2",
    },
    {
      id: 3,
      src: "/avatars/avatar3.png",
      alt: "Student Avatar 3",
    },
    {
      id: 4,
      src: "/avatars/avatar4.png",
      alt: "Student Avatar 4",
    },
    {
      id: 5,
      src: "/avatars/avatar5.png",
      alt: "Student Avatar 5",
    },
    {
      id: 6,
      src: "/avatars/avatar6.png",
      alt: "Student Avatar 6",
    },
  ];
  return (
    <div className="relative bg-[#111213] backdrop-blur-sm py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid mt-12 md:mt-4 items-center gap-12 md:grid-cols-2">
          <motion.div
            className="relative rounded-xl bg-black/50 p-10 shadow-inner shadow-[#F0C38E] backdrop-blur-sm text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Master the Art of{" "}
              <div className="z-20 text-[#F0C38E]">
                <span>Tailoring</span>
              </div>
            </motion.h1>
            <motion.p
              className="mt-4 mx-auto max-w-xl text-gray-400 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Learn professional tailoring skills from industry experts.
              Transform your passion into a successful career with our
              comprehensive courses.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link href="#courses">
                <Button
                  variant={"outline"}
                  className="text-md font-semibold w-full bg-[#F0C38E]/10 text-white border-[#F0C38E] hover:text-[#F0C38E] shadow-lg shadow-[#F0C38E]/30 transition-all duration-300"
                >
                  Start Learning
                </Button>
              </Link>
              <Link href="#career">
                <Button
                  variant="outline"
                  className="text-md font-semibold w-full bg-[#9370DB]/10 text-white border-[#9370DB] hover:text-[#9370DB] shadow-lg shadow-[#9370DB]/30 transition-all duration-300"
                >
                  Explore Careers
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="mt-8 flex flex-col items-center gap-2 sm:flex-row justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex -space-x-2">
                {avatars.map((avatar) => (
                  <div
                    key={avatar.id}
                    className="h-8 w-8 rounded-full border-2 border-white overflow-hidden shadow-md flex items-center justify-center"
                  >
                    <Image
                      src={avatar.src || "/placeholder.svg"}
                      alt={avatar.alt}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                      quality={80}
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Join 500+ students already learning
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 rounded-full bg-[#F0C38E]/20 blur-3xl" />
            <Image
              src="/hero.png"
              alt="Tailoring Institute Illustration"
              width={600}
              height={600}
              priority
              className="relative z-50 drop-shadow-2xl"
              quality={90}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
