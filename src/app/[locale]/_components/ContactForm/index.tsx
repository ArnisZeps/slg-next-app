// components/ContactForm.tsx
"use client";

import BaseButton from "@/components/BaseButton";
import { useTranslations } from "next-intl";
import { useState, FormEvent, ChangeEvent } from "react";

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const t = useTranslations("HomePage");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full max-w-sm md:max-w-4xl px-4 dark:bg-slate-800 dark:text-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center dark:text-white">{t("ContactUsTitle")}</h2>
      {submitted && <p className="text-green-600 text-center mb-4">Thank you! We’ll get back to you soon.</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium ">
            {t("ContactUsName")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 border border-gray-200  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium ">
            {t("ContactUsEmail")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium ">
            {t("ContactUsMessage")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={t("ContactUsHowCanWeHelpYou")}
          />
        </div>
        <div className="flex justify-center">
          <BaseButton type="submit" text={t("ContactUsSendMessage")} dark={true} />
        </div>
      </form>
    </div>
  );
}
