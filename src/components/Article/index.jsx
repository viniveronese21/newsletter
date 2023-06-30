/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const Article = ({title, text, tags, image, alt}) => {
   return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col
                    items-center gap-2 sm:hover:shadow-gray-500 sm:shadow:shadow-lg
                    sm:hover:dark:shadow-black
                    "
    >
      <h3 className="text-lg underline text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h3>

      <div className="w-full sm:flex justify-end gap-2 pr-5 hidden">
        {
          tags.map(tag =>
            <span
              key={tag}
              className="bg-alura-100 dark:bg-dark-100 text-gray-200 px-4
                          py-1 rounded-full text-xs uppercase font-bold
                          hover:bg-gradient-to-r hover:from-alura-200
                          hover:scale-110 transition-all
                          "
              >
                {tag}
            </span>
          )
        }
      </div>

      <div className="grid gap-3">
        {
          text.map((content, index) =>
            <p key={index} className="text-alura-200 text-base dark:text-gray-400
                          line-clamp-6 sm:line-clamp-none"
            >
              {content}
            </p>)
        }
      </div>
      {image && <img className="sm:p-4" src={image} />}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
   )
}

export default Article
