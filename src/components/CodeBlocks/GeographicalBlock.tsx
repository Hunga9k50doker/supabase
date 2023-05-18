"use client";

import React from "react";
import CodeBlockCommon from "./CodeBlockCommon";

const GeographicalBlock = () => {
  return (
    <CodeBlockCommon className="lang-sql">
      <span className="text-secondary mr-2">SELECT</span>
      <span> superhero.name</span>
      <br />
      <span className="text-secondary mr-2">FROM</span>
      <span> city, superhero</span>
      <br />
      <span className="text-secondary mr-2">WHERE</span>
      <span> ST_Contains(city.geom, superhero.geom)</span>
      <br />
      <span className="text-secondary mr-2">AND</span>
      <span> city.name </span>
      <span className="hljs-operator">=</span>
      <span className="text-primary">&apos;Gotham&apos;</span>
      <span>;</span>
    </CodeBlockCommon>
  );
};

export default GeographicalBlock;
