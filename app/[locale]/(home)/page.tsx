import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: {
      absolute: t("title"),
    },
    description: t("description"),
  };
}

export default function HomePage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <div className="">
      {t("title")}
      <p className="text-5xl">
        {/* <Image priority /> */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
        turpis iaculis quam congue efficitur sed quis dolor. Suspendisse ac
        elementum neque. In et metus nec elit vulputate porta. Nunc hendrerit
        euismod nulla, sed luctus augue. Duis viverra, tortor a fermentum
        pellentesque, ante elit elementum velit, gravida fringilla mi est ac
        velit. Mauris porttitor metus vitae augue euismod vulputate. Sed et urna
        nec erat maximus vulputate. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Pellentesque eu urna in arcu iaculis tempor. Vestibulum
        sit amet erat sed velit dignissim varius. Donec eu pretium mi. Ut vitae
        aliquet nibh. Donec ut lacus velit. Phasellus luctus at ante et lacinia.
        Nullam a hendrerit purus, sit amet convallis libero. Donec in libero
        tempor nibh mattis hendrerit. Maecenas ligula metus, pellentesque vitae
        sem quis, tincidunt fermentum nulla. In in mattis purus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Suspendisse potenti. Nulla facilisi. Aenean eros libero,
        commodo et lacinia et, venenatis in turpis. Donec tempor quam ut
        elementum ullamcorper. Curabitur scelerisque felis sed lacus
        pellentesque dictum. Ut tortor dui, pretium ut odio consectetur,
        porttitor lacinia quam. Quisque imperdiet, lectus a faucibus molestie,
        velit eros dictum tellus, eu tincidunt ex sem sed ligula. In blandit vel
        magna eu dapibus. Maecenas eget libero purus. Phasellus sed nisl lectus.
        Proin viverra tempor elit, tincidunt imperdiet odio rutrum vel. Mauris
        ut nunc velit. Morbi sodales aliquam ante. Maecenas convallis
        consectetur est, et tincidunt odio. Quisque lacus dolor, convallis
        semper purus in, elementum eleifend sem. Mauris augue tortor, mattis et
        iaculis vel, commodo in tellus. Maecenas ac ex mauris. Mauris id eros
        eleifend, aliquam nulla quis, gravida leo. Aliquam erat volutpat.
        Phasellus condimentum est leo. Fusce ornare mollis est, ac molestie
        libero euismod ac. Suspendisse potenti. Quisque id convallis urna, in
        efficitur orci. Fusce id odio lorem. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Proin ac
        scelerisque tortor, at convallis massa. Nullam sed nisl quis arcu
        rhoncus porta vel quis ante. Pellentesque convallis sapien purus, non
        dignissim turpis sodales eu. Mauris vel metus sit amet lorem pretium
        aliquet. Aenean arcu ligula, placerat in dolor non, tempus tristique
        nisi. Vestibulum malesuada ligula vitae purus feugiat, vel faucibus
        risus egestas. Etiam rhoncus mauris eu tortor maximus, ac suscipit risus
        consectetur. Nulla neque lorem, ultrices non tortor ac, aliquam
        scelerisque ligula. Vivamus laoreet est tellus, et volutpat massa congue
        ac. Quisque vulputate euismod lacinia. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Pellentesque eget odio eu elit ullamcorper vestibulum. Morbi suscipit,
        tortor sed sodales pulvinar, ex sapien mollis lorem, vitae consectetur
        justo leo ac mauris. Duis fringilla turpis at sapien mollis, sed
        elementum sem congue. Aenean eleifend mi a ornare dignissim. Morbi
        feugiat consequat consequat. Morbi ultricies magna ante, eu accumsan
        risus ultrices non. Nam congue ultricies tellus non consequat. Aenean in
        justo sem. Duis tincidunt tortor auctor eros pulvinar, in facilisis orci
        tincidunt. Maecenas convallis vitae erat vitae vulputate. Sed at justo
        tincidunt, rhoncus sapien in, varius nibh. Nullam laoreet sapien a
        congue dictum. Maecenas vehicula placerat dui, pharetra vehicula velit
        malesuada in. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos.
      </p>
    </div>
  );
}
