import data from '../../../article.json'
import Article from '../Article'

const ArticleList = () => {
  return(
    <div className='mt-5 sm:mt-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 m-auto max-w-2xl
                    lg:max-w-[1000px]'
    >
      {
        data.map((item, index) => <Article key={index} {...item}/>)
      }
    </div>
  )
}

export default ArticleList
