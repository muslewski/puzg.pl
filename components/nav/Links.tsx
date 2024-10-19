import NavigationLink from "@/components/nav/NavigationLink";
import { useTranslations } from "next-intl";

export default function Links() {
  const t = useTranslations("Navigation");

  return (
    <div className="flex bg-neutral-600">
      <NavigationLink href="/">{t("home")}</NavigationLink>
      <NavigationLink href="/">{t("home")}</NavigationLink>
      <NavigationLink href="/">{t("home")}</NavigationLink>
      <NavigationLink href="/">{t("home")}</NavigationLink>
      <NavigationLink href="/">{t("home")}</NavigationLink>
      <NavigationLink href="/">{t("home")}</NavigationLink>
      <NavigationLink href="/">{t("home")}</NavigationLink>
      <NavigationLink href="/o-nas">{t("about")}</NavigationLink>
    </div>
  );
}
