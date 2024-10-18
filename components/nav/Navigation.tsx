import LocaleSwitcher from "@/components/nav/LocaleSwitcher";
import NavigationLink from "@/components/nav/NavigationLink";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div className="bg-green-600">
      <nav>
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/o-nas">{t("about")}</NavigationLink>
        </div>
        <LocaleSwitcher />
        {/* Simplify it to just two options next to each other */}
      </nav>
    </div>
  );
}
