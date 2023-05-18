import React from "react";
import { GithubStrokeIcon, ArrowNextIcon } from "@/assets/icons";
import ButtonLarge from "@/components/ButtonLarge";
import Link from "next/link";
import Image from "next/image";
interface CardServiceBuildProps {
  title: string;
  description: string;
  backer: string;
  avatar: string;
  username_github: string;
  action: string;
  github_url: string;
  action_url: string;
  subaction?: string;
  subaction_url?: string;
  className?: string;
}

interface serviceBuildData {
  serviceBuild: CardServiceBuildProps;
  className?: string;
}

const CardServiceBuild = ({ serviceBuild, className }: serviceBuildData) => {
  return (
    <div
      className={`col-span-12 lg:col-span-6 xl:col-span-4 false ${
        className ? className : ""
      }`}
    >
      <div className="dark:bg-scale-1200 border-scale-400 dark:border-scale-1250 flex h-40 flex-col justify-between rounded rounded-b-none border border-t border-r border-l bg-white p-5">
        <div className="mb-4">
          <h4 className="h6 dark:text-white">{serviceBuild.title}</h4>
          <p className="p text-xs dark:text-white">
            {serviceBuild.description}
          </p>
          <div>
            <Image
              src={serviceBuild.avatar}
              alt={serviceBuild.backer}
              className="border-scale-500 inline w-6 rounded-full"
              width={24}
              height={24}
            />
            <span className="text-scale-1200 ml-2 text-xs dark:text-white">
              {serviceBuild.backer}
            </span>
          </div>
        </div>
      </div>
      <div role="separator"></div>
      <div>
        <div className=" bg-scale-100 dark:bg-scale-1250 border-scale-400 dark:border-scale-1250 flex flex-col justify-between rounded rounded-t-none border border-b border-r border-l border-t-0 p-5">
          <Link
            className="text-scale-1100 hover:text-scale-1200 flex flex-row items-center text-xs"
            target="_blank"
            href={serviceBuild.github_url}
          >
            <span>{serviceBuild.username_github}</span>
            <span className="ml-1 inline-block">
              <GithubStrokeIcon />
            </span>
          </Link>
          <div className="mt-3 flex items-center gap-2">
            <Link target="_blank" href={serviceBuild.action_url}>
              <ButtonLarge
                type="button"
                title="Launch Demo"
                className="text-xs py-[4px] px-[10px] rounded-md border boder-scale-550"
              >
                <ArrowNextIcon transform="rotate(-45)" />
              </ButtonLarge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServiceBuild;
