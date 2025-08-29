const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white mb-5 p-5 rounded-lg font-semibold">
            <h3>{title}</h3>
        </div>
    );
};

export default Bookmark;