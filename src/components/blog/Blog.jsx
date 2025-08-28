import { IoBookmarkOutline } from "react-icons/io5";
import Bookmarks from "../bookmarks/Bookmarks";


const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover_pic, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="mb-20">
            <img className="w-full mb-8" src={cover_pic} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <img className="w-16" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p className="text-[rgba(17,17,17,0.6)]">{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="text-lg mx-2 text-[rgba(17,17,17,0.6)]">{reading_time} mins read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className="text-2xl cursor-pointer text-[rgba(17,17,17,0.6)]"
                    ><IoBookmarkOutline />
                    </button>


                </div>
            </div>
            <h2 className="text-4xl font-bold my-4">{title}</h2>
            <p className="text-[rgba(17,17,17,0.6)] text-xl">
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">{hash}</a> </span>)
                }
            </p>
        </div>
    );
};

export default Blog;