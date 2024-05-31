"use client";
import ServiceCard from "@/components/ui/ServiceCard";
import services from "../utils/data/services.json";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const images = ["/1.jpg", "/2.jpg", "/3.jpg"];
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section className="w-full">
        <ImagesSlider className="h-lvh" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Lakshay Movies Studio
            </motion.p>
            <motion.p className="bg-clip-text text-transparent font-bold bg-gradient-to-b from-neutral-50 to-neutral-400 text-xl text-center w-[50rem]">
              Turning your special day into timeless memories. Experience the
              perfect blend of creativity and professionalism with us.
            </motion.p>
          </motion.div>
        </ImagesSlider>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className="my-20 w-11/12 flex flex-col items-center gap-6"
      >
        <h1 className="font-bold text-xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 from-slate-400 to-slate-800">
          SERVICES
        </h1>
        <p className="text-xl">
          We take care of all your film and still production related needs.
        </p>
        <div className="flex flex-wrap justify-center gap-6 relative">
          <div className="w-2/4 h-96 rounded-3xl overflow-hidden shadow-xl relative">
            <Image
              src="/a.jpg"
              alt="a"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all"
            />
            <p className="z-50 absolute bottom-10 left-10 font-bold text-xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Weeding Shoots
            </p>
          </div>
          <div className="w-1/3 h-96 rounded-3xl overflow-hidden relative">
            <Image
              src="/2.jpg"
              alt="b"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all"
            />
            <p className="z-50 absolute bottom-10 left-10 font-bold text-xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Preweeding Shoots
            </p>
          </div>
          <div className="w-1/3 h-96 rounded-3xl overflow-hidden shadow-xl relative">
            <Image
              src="/3.jpg"
              alt="c"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all"
            />
            <p className="z-50 absolute bottom-10 left-10 font-bold text-xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Cinametic Shoots
            </p>
          </div>
          <div className="w-2/4 h-96 rounded-3xl overflow-hidden drop-shadow-xl relative">
            <Image
              src="/c.jpg"
              alt="d"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all"
            />
            <p className="z-50 absolute bottom-10 left-10 font-bold text-xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Cinametic Shoots
            </p>
          </div>
        <div className="absolute size-96 top-60 bg-slate-700 blur-[200px] rounded-full -z-10" />
        </div>
        <div className="mt-20 grid grid-cols-4 gap-5">
          {services.map((item) => {
            return <ServiceCard key={item.id} data={item} />;
          })}
        </div>
      </motion.section>
      <section className="flex flex-col items-center justify-center text-center w-3/4 gap-4">
        <h1 className="font-bold text-xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 from-slate-400 to-slate-800 py-4">
          Why Choose Us?
        </h1>
        <p className="w-11/12">
          At Lakshay Movies Studio, we are committed to turning your cinematic
          dreams into reality. With over 25 years of experience, our
          state-of-the-art facilities, combined with a team of seasoned
          professionals, ensure that every project we undertake is crafted with
          precision and creativity. We pride ourselves on delivering
          high-quality productions, tailored to meet your unique vision, whether
          it&apos;s for film, television, or digital media. Our passion for
          storytelling, coupled with cutting-edge technology and a collaborative
          approach, makes us the ideal partner for your next project. Choose
          Lakshay Movies Studio for an unparalleled production experience that
          brings your stories to life with excellence and innovation.
        </p>
        <p className="font-bold">
          Join us on this exhilarating expedition of creativity and excellence.
          Contact Us now and watch your visions come to life!
        </p>
        <Button className="rounded-none">Contact Us</Button>
      </section>
    </main>
  );
}
