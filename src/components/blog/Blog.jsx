const Blog = ({blog}) => {
    const {title, cover_pic, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover_pic} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-16" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">{hash}</a> </span>)
                }
            </p>
        </div>
    );
};

export default Blog;