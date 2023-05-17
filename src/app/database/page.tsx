import React from "react";
import WrapHeader from "@/components/pages/DatabasePage/WrapHeader";
import WrapCombine from "@/components/pages/DatabasePage/WrapCombine";
import WrapTitle from "@/components/WrapTitle";
import WrapEdit from "@/components/pages/DatabasePage/WrapEdit";
import WrapWriteAPI from "@/components/pages/DatabasePage/WrapWriteAPI";
import WrapLibraries from "@/components/pages/DatabasePage/WrapLibraries";
import WrapExtendDatabase from "@/components/pages/DatabasePage/WrapExtendDatabase";
const Database = () => {
  return (
    <main>
      <WrapHeader />
      <WrapCombine />
      <WrapTitle
        title="Easy to use dashboard"
        description="The simplicity of a Table Editor, or the power of a SQL editor. Your choice."
        className_title="pt-[96px] mt-0 text-center fs-24"
        className_description="text-center pb-4 fs-16"
      />
      <WrapEdit />
      <WrapWriteAPI />
      <WrapLibraries />
      <WrapExtendDatabase />
    </main>
  );
};

export default Database;
