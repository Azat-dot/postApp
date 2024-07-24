import React from 'react';
import MyButton from '../components/UI/button/MyButton.jsx';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
  const navigate = useNavigate(); // аналог <Navigate/> не создает html-элемент; или <Link/> = <a/>
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {props.post.id}, {props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          {/* posts/849384893 */}
          <MyButton handler={() => navigate(`/posts/${props.post.id}`)}>Открыть</MyButton>
          {/* <button><Navigate element={}/></button> */}
          <MyButton handler={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;


