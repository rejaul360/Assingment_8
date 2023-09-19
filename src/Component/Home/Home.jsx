import React, { useEffect, useState } from 'react';
import './Home.css'
import Bookmark from '../BookMark/Bookmark';

const Home = ({handleWathTime,setBookmarkItem,bookMarkItem}) => {

    const [bookmarks, setBookmark] = useState([])

    useEffect(()=>{
        fetch("product.json")
        .then(res => res.json())
        .then(data => setBookmark(data))
    }, [bookmarks])

    return (
        <div>
           {
            bookmarks.map(bookmark => <Bookmark 
                bookMarkItem = {bookMarkItem}
                setBookmarkItem = {setBookmarkItem}
            key = {bookmark.id}
            bookmark = {bookmark}
            handleWathTime = {handleWathTime}
            ></Bookmark>)
           }
        </div>
    );
};

export default Home;