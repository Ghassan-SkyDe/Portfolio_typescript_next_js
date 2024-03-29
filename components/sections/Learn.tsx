"use client";
import { useIsInView } from "@/hooks/useIsInVeiw";
import { FC, useRef } from "react";
import { motion } from "framer-motion";
import LearnList from "../learnList/LearnList";
import {
  DeepenListData,
  ExploreListData,
  MasterListData,
} from "@/constants/learnItems";
import { immediate_Fade_In_View_Animation_Props } from "@/constants/animationProps";

const Learn: FC = () => {
  const learnRef = useRef<HTMLElement>(null);
  // checks and actives navItems depend on related sections
  useIsInView({ navName: "Learn", ref: learnRef });
  return (
    <motion.section
      data-testid="learn-section"
      ref={learnRef}
      {...immediate_Fade_In_View_Animation_Props}
      id="learn"
      className="section snap-start snap-always relative"
    >
      <span className="section__title">Learn</span>
      <div className="flex w-full items-center flex-col lg:flex-row px-2 md:justify-center my-auto tall:flex-col">
        <div className="learn__intro lg:w-2/3">
          <motion.h2
            {...immediate_Fade_In_View_Animation_Props}
            className="apply__title font-bold mx-auto lg:mx-0 mb-8 md:mb-0 pt-8 md:pt-10 text-2xl md:text-3xl xl:text-4xl text-center sm:w-2/3 lg:text-start lg:w-2/3 tall:text-center tall:mx-auto"
          >
            <span>A Journey of</span>{" "}
            <span className="lg:block">Continuous Learning</span>
          </motion.h2>
          <p
            data-testid="learn-description"
            className="apply__body hidden sm:block w-2/3 lg:w-4/5 text-center lg:text-start  mx-auto lg:mx-0 lg:block pb-8 md:pb-10 pt-4 tall:text-center tall:mx-auto"
          >
            Parallel to my commitment to long-term learning is my innate ability
            to absorb new information rapidly. I possess a natural curiosity and
            an eagerness to explore the ever-expanding world of web development.
            This combination of traits empowers me to grasp complex concepts
            quickly, enabling me to stay abreast of the latest trends and
            advancements in the field, As a result i want to :
          </p>
        </div>
        <div data-testid="learnLists-con" className="lg:pt-8">
          <LearnList title="Explore" learnListItems={ExploreListData} />
          <LearnList title="Deepen" learnListItems={DeepenListData} />
          <LearnList title="Master" learnListItems={MasterListData} />
        </div>
      </div>
    </motion.section>
  );
};

export default Learn;
