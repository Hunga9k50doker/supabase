"use client";

/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import CodeBlockCommon from "./CodeBlockCommon";

const CreateRecord = () => {
  return (
    <CodeBlockCommon className="lang-js">
      <span className="text-scale-650">// Create a record</span>
      <br></br>
      <br></br>
      <span className="text-scale-650">
        // Insert new record into a table called `rooms`
      </span>
      <br></br>
      <span className="text-secondary">const</span>
      <span> {"{ data, error }"} = </span>
      <span className="text-secondary">await</span>
      <span> supabase</span>
      <br />
      <span> .from(</span>
      <span className="text-secondary">&apos;rooms&apos;</span>
      <span>
        ) <br />
      </span>{" "}
      {".insert({ "} <br />
      &nbep;<span className="hljs-attr">name</span>
      <span>: </span>
      <span className="text-secondary">&apos;Supabase Fan Club&apos;</span>
      <span>,</span>
      <br />
      <span className="hljs-attr">public</span>
      <span>: </span>
      <span className="text-secondary">true</span>
      <br /> {"})"}
    </CodeBlockCommon>
  );
};

export default CreateRecord;
