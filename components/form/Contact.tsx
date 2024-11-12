"use client";

import Card from "@/components/card/Card";
import FancyButton from "@/components/FancyButton";
import Input from "@/components/form/Input";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface ContactProps {
  locale: string;
}

export default function Contact({ locale }: ContactProps) {
  const t = useTranslations("KontaktPage");

  const [formData, setFormData] = useState({
    message: "",
    title: "",
    name: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    }
  };

  return (
    <Card customWrapperWidth="w-full">
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
          iconAlt="a"
        />
      </form>
    </Card>
  );
}
