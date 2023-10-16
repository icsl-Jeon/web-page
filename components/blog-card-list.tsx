import { ReactElement } from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';
import { format } from 'date-fns';
import {Heading} from '@/components/heading'

export type Meta = {
  title: string;
  tags: string | string[];
  date: string;
  authors: string | string[];
  updateDate?: string;
  description: string;
  image: string;
  thumbnail?: string;
  canonical?: string;
};

export type MetaWithLink = Omit<Meta, 'tags' | 'authors'> & {
  tags: string[];
  authors: string[];
  link: string;
};


export const BlogCardList = ({
  articles,
  className,
}: {
  articles: MetaWithLink[];
  className?: string;
}): ReactElement => {
  return (
    <div className={clsx('my-12 flex flex-wrap justify-center gap-x-7 gap-y-10', className)}>
      {articles.map(article => (
        <NextLink
          key={article.link}
          href={article.link}
          className="
          flex
          w-[278px]
          cursor-pointer
          flex-col
          overflow-hidden
          rounded-[20px]
          border
          border-solid
          bg-white
          transition-colors
          hover:border-[#7F818C]
          hover:!no-underline
          dark:border-transparent
          dark:bg-[#101218]
          hover:dark:border-[#7F818C]"
        >
          <img
            src={article.thumbnail ?? article.image}
            alt="Article logo"
            className="drag-none h-[164px] w-full object-cover"
          />
          <div className="flex grow flex-col p-5">
          <Heading size="md" className="line-clamp-3 [hyphens:auto]">
              {article.title}
            </Heading>
            <p>
                {article.description}
              </p>
            <div className="mt-auto text-xs mt-3">
              <span className="text-gray-400 dark:text-gray-300">
                <span className="select-none"> • </span>
                {format(new Date(article.date), 'LLL do y')}
              </span>
            </div>
          </div>
        </NextLink>
      ))}
    </div>
  );
};
