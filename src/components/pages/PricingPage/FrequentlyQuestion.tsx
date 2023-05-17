/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Collapse from "@/components/Collapse";
import { frequentlyQuestions } from "@/constants/FrequentlyQuestions";
const FrequentlyQuestion = () => {
  return (
    <div className="border-t dark:border-scale-1250">
      <div className="mx-auto max-w-5xl gap-y-10 gap-x-10 lg:grid-cols-2">
        <div className="sm:py-18 mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
          <h2 className="text-2xl text-center">Frequently asked questions</h2>
          <div className="my-16">
            <div className=" flex flex-col space-y-3  text-scale-900 dark:text-white">
              {frequentlyQuestions.map((frequentlyQuestion, index) => (
                <Collapse
                  title={frequentlyQuestion.title}
                  description={frequentlyQuestion.description}
                  key={index}
                />
              ))}
            </div>
          </div>
          <p className="text-center text-scale-1100">
            Can't find the answer to your question, you can{" "}
            <a
              target="_blank"
              href="https://app.supabase.com/support/new"
              className="transition text-primary hover:text-primary"
            >
              open a support ticket
            </a>
            &nbsp; and our team of experts will be able to help.
          </p>
          <p className="text-center text-scale-1100">
            For enterprise enquries,
            <a
              target="_blank"
              href="https://app.supabase.com/support/new"
              className="transition text-primary hover:text-primary"
            >
              &nbsp; you can contact the team here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
