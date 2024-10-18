import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import template from "@/utils/template";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export interface Template {
  name: string;
  slug: string;
  icon: string;
  desc: string;
  category: string;
  aiPrompt: string;
  form: Form[];
}

export interface Form {
  label: string;
  field: string;
  name: string;
  required: boolean;
}

export default function Page({ params }: { params: { slug: string } }) {
  const t = template.find((item) => item.slug === params.slug) as Template;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
      <div className="col-span-1 bg-slate-100 dark:bg-slate-900 rounded-md border p-5">
        <div className="flex flex-col gap-3"> 
          'image, name, desc' 
          {/* Centralized Input field for blog title */}
          <div className="mt-4 flex flex-col items-center">
            <label className="font-bold pb-2 text-center">Enter your blog title</label>
            <Input name="blogTitle" className="text-center" required />
          </div>
        </div>
      </div> 

      {/* Make sure no unwanted form fields are rendered */}
      <form className="mt-6 col-span-2">
        {t.form
          .filter((item) => item.name === "blogTitle") // Render only the "blogTitle" input field
          .map((item) => (
            <div className="my-2 flex flex-col gap-2 mb-7" key={item.name}>
              <label className="font-bold pb-5">{item.label}</label>

              {item.field === "input" ? (
                <Input name={item.name} required={item.required} />
              ) : (
                <Textarea name={item.name} required={item.required} />
              )}
            </div>
          ))}
      </form>
    </div>
  );
}
