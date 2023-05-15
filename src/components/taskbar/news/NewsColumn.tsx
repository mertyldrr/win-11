export type Article = {
  article: {
    source: {
      id: string | null;
      name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt?: string;
    content: string | null;
  };

  index: number;
};

export const NewsColumn = ({ article, index }: Article) => {
  const backgroundImageClass = `bg-${article.urlToImage}`;
  const randHue = Math.floor(Math.random() * 360);
  const inlineStyles = {
    backgroundImage: `linear-gradient(transparent 33%, hsl(${randHue}, 36%, 84%) 75%)`,
  };
  return (
    <div key={index}>
      <div
        className={`flex flex-col relative ${backgroundImageClass} rounded-xl`}
      >
        <div className="flex flex-col ">
          <a href={article.url}>
            <img className="rounded-xl" src={article.urlToImage} alt="" />
            <div
              style={inlineStyles}
              className={`p-3 absolute bottom-0 rounded-xl h-full w-full flex flex-col justify-end`}
            >
              <p className="text-sm">{article.source.name}</p>
              <p className="font-bold text-base line-clamp-2">
                {article.content}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
