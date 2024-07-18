import "./tag.css"
const Tag = (props)=>{

    return <div className="tag">
          <h2>{props.title}</h2>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className="read">
            <p>Read More</p>
            <img src="/public/arrow.svg" alt="" />
          </div>
          
        </div>
}
export default Tag