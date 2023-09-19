import React from 'react';
import './Bookmark.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Bookmark = (props) => {

    const {img, title, name,author,time} = props.bookmark;
    const {handleWathTime} = props;
    const {setBookmarkItem, bookMarkItem}= props;

    const handleBookmark = () => {
        const bookMarkItemTwo = bookMarkItem.find(bM => props.bookmark.id === bM.id)
        if(bookMarkItemTwo){
            toast.error("alredy bookmark")
        }else{
            setBookmarkItem([...bookMarkItem, props.bookmark])
        }
    }

    return (
        <div>
             <ToastContainer />

            <div className=' main_container'>
                <div className='side_one'>
                    <img className='main_img w-100' src={img} alt="" />
                    <div className='top_container'>
                        <div className='autohor_area'>
                            <div className='author_img'>
                                <img src={author} alt="author" />
                            </div>
                            <div className='author_name'>
                                <p className='name'> {name} </p>
                                <p className='date_area'>Mar 14(4 Days ago)</p>
                            </div>
                        </div>
                        <div>
                            <small>{time} <span> min</span></small>
                            <i className='ms-4' onClick={() => handleBookmark ()}> <FontAwesomeIcon   icon={faBookBookmark} /></i>
                        </div>
                    </div>
                    <div className='bottom_container'>
                        <h3 className='title'>{title}</h3>
                    </div>
                    <div className='d-flex'>
                        <p className='beginners'>#beginners</p>
                        <p className='programming'>#programming</p>
                    </div>
                    <div >
                        <p className='make_read border-bottom' onClick={()=> handleWathTime(time)}>Mark as read</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookmark;