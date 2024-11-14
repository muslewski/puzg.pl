"use client";

import FancyButton from "@/components/FancyButton";
import Input from "@/components/form/Input";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Contact() {
  const t = useTranslations("KontaktPage");

  const [formData, setFormData] = useState({
    message: "",
    title: "",
    name: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert(t("emailSent"));
        setFormData({ message: "", title: "", name: "", email: "" });
      } else {
        alert(t("emailError"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert(t("emailError"));
    } finally {
      setIsSubmitting(false); // Re-enable the button after the request completes
    }
  };

  return (
    <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row gap-12 h-fit w-full lg:items-end">
        <div className="lg:w-3/5">
          <Input
            textarea
            label={t("labelMessage")}
            id="message"
            border="bl"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="lg:w-2/5 flex gap-6 flex-col h-full">
          <Input
            label={t("labelTitle")}
            id="title"
            border="bl"
            value={formData.title}
            onChange={handleChange}
          />
          <Input
            label={t("labelName")}
            id="name"
            border="tr"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label={t("labelEmail")}
            id="email"
            border="tl"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <FancyButton
        text={t("send")}
        buttonType="submit"
        icon="/images/icons/Send.svg"
        iconAlt={t("sendIconAlt")}
        disabled={isSubmitting}
        style={{
          opacity: isSubmitting ? "0.8" : "1",
          transition: "opacity 0.3s ease",
        }}
      />
    </form>
  );
}
