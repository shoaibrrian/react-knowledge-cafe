import Bookmark from "../bookmark/Bookmark"

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-[rgba(17,17,17,0.05)] ml-6 p-7 rounded-lg">
            <h2 className="font-bold text-2xl text-center mb-4">Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;