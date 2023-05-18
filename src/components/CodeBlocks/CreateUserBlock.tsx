"use client";

import React from "react";
import CodeBlockCommon from "./CodeBlockCommon";

const CreateUserBlock = () => {
  return (
    <CodeBlockCommon className="lang-js">
      <span className="text-[#569cd6] span">import</span>
      <span className="span"> {"{ createClient }"} </span>
      <span className="text-[#569cd6] span">from</span>
      <span> </span>
      <span className="text-primary span">
        &apos;@supabase/supabase-js&apos;
      </span>
      <br />
      <span className="text-[#75715e] span">{"// Initialize"}</span>
      <br />
      <br />
      <span className="text-[#569cd6] span">const</span>
      <span className="span"> supabaseUrl = </span>
      <span className="text-primary span">
        &apos;https://chat-room.supabase.co&apos;
      </span>
      <br />
      <br />
      <span className="ctext-[#569cd6] span">const</span>
      <span className="span"> supabaseKey = </span>
      <span className="text-primary span">&apos;public-anon-key&apos;</span>
      <br />
      <span className="ctext-[#569cd6] span">const</span>
      <span className="span">
        {" "}
        supabase = createClient(supabaseUrl, supabaseKey)
      </span>
      <br />
      <br />
      <span className="text-[#75715e] span">{"// Create a new user"}</span>
      <br />
      <span className="text-[#569cd6] span">const</span>
      <span className="span"> {"{ user, error }"} = </span>
      <span className="text-[#569cd6] span">await</span>
      <span className="span"> {"supabase.auth.signUpWithPassword({"}</span>
      <br />
      <span> </span>
      <span className="hljs-attr span">email</span>
      <span>: </span>
      <span className="text-primary span">&apos;example@email.com&apos;</span>
      <span>,</span>
      <span> </span>
      <span className="hljs-attr span">password</span>
      <span>: </span>
      <span className="text-primary span">&apos;example-password&apos;</span>
      <span>,</span>
      {"})"}
    </CodeBlockCommon>
  );
};

export default CreateUserBlock;
