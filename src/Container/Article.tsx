import { clock } from "../assets";
import { articles } from "../constants";

const highlightArticle = articles.slice(0, 4);

export default function Article() {
  return (
    <section
      className="px-10 xl:px-28 mt-28 min-h-[20vh] pb-10 relative flex justify-center items-center flex-col gap-3
"
    >
      <span className="w-10 h-[2px] bg-secondary"></span>
      <h6 className="text-secondary">
        See tips and trick from our partnership
      </h6>
      <h2 className="text-blue-950 font-semibold text-4xl text-center w-full xl:w-1/3">
        Find out more about selling and buying homes
      </h2>
      <button className="text-white mt-6 text-[10px] xl:text-base items-center  mr-1 px-4 py-2 xl:px-5 xl:py-3 rounded-3xl bg-primary font-semibold flex justify-center gap-2">
        More Article
      </button>
      <div
        className="pt-8 w-full flex flex-col xl:grid grid-flow-col grid-rows-4
        grid-cols-2 gap-7"
      >
        {highlightArticle.map((item, index) => {
          return <ArticleCard key={index} {...item} index={index} />;
        })}
      </div>
    </section>
  );
}

interface ArticleCardProps {
  id: string;
  index: number;
  image: any;
  title: string;
  content: string;
  created: string;
  user: {
    name: string;
    image: any;
  };
}

const ArticleCard = (props: ArticleCardProps) => {
  if (props.index === highlightArticle.length - 1) {
    return (
      <div className="row-span-3 flex flex-col gap-6">
        <img src={props.image} alt="article" className="rounded-2xl" />
        <span className="flex gap-3 items-center text-gray-500">
          {" "}
          <img
            src={props.user.image}
            alt="person"
            className="w-8 h-8 object-contain"
          />{" "}
          {props.user.name}
        </span>
        <h2 className="text-blue-950 font-medium text-2xl w-[90%]">
          {" "}
          {props.title}
        </h2>
        <p className="text-gray-500">{props.content}</p>
        <div className="flex gap-4 text-gray-500">
          <img src={clock} alt="" /> {props.created}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col sm:flex-row gap-10 items-center">
      <img
        src={props.image}
        alt="arcticle"
        className="w-full h-full sm:w-[12.5rem] sm:h-[9rem] object-cover rounded-2xl"
      />
      <div className="flex flex-col gap-5">
        <span className="flex gap-3 items-center text-gray-500">
          {" "}
          <img
            src={props.user.image}
            alt="person"
            className="w-8 h-8 object-contain"
          />{" "}
          {props.user.name}
        </span>
        <h2 className="text-blue-950 text-lg font-medium w-[90%]">
          {props.title}
        </h2>
        <div className="flex gap-4 text-gray-500">
          <img src={clock} alt="" /> {props.created}
        </div>
      </div>
    </div>
  );
};
