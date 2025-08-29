import Bookmark from "../bookmark/Bookmark"

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-[rgba(17,17,17,0.05)] ml-6 p-7 rounded-lg">
            <div>
                <h3 className="text-2xl font-bold mb-5 bg-[rgba(96,71,236,0.1)] p-5 border-2 border-[rgba(96,71,236,1)] rounded-lg text-[rgba(96,71,236,1)]">
                    Spent Reading Time: {readingTime}
                </h3>
            </div>
            <h2 className="font-bold text-2xl text-center mb-4">Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map((bookmark, index) =><Bookmark key={`${bookmark.id}-${index}`}  bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;