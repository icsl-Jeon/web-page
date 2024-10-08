import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import type { FC } from "react";
import dayjs from "dayjs";
import Image from "next/image";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);

export interface Props {}
interface State {}

const Frontmatter: React.FC<Props> = () => {
  const { frontMatter } = useConfig();
  const { locale } = useRouter();

  return (
    <div className="text-center">
      <div className="my-4 text-sm text-neutral-400 dark:text-neutral-500">
        {dayjs(frontMatter.date).format("LL")}
      </div>
      <Image
        src={frontMatter.thumbnail}
        width={700}
        height={700}
        alt={frontMatter.description}
        className="rounded-xl mx-auto"
      />
    </div>
  );
};

export default Frontmatter;
