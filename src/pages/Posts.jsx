import React, { useState, useEffect, useRef } from 'react';
import PostList from '../components/PostList.jsx';
import PostForm from '../components/PostForm.jsx';

import '../styles/App.css';
import PostFilter from '../components/PostFilter.jsx';
import MyModal from '../components/UI/MyModal/MyModal.jsx';
import MyButton from '../components/UI/button/MyButton.jsx';
import { usePosts } from '../hooks/usePosts.js';
import PostService from '../components/API/PostServise.js';
import Loader from '../Loader/Loader.jsx';
import { useFetching } from '../hooks/useFetching.js';
import { getPageCount, getPagesArray } from '../utils/pages.js';
import Pagination from '../components/UI/pagination/Pagination.jsx';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef()
  const observer = useRef()
  console.log(lastElement);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data] );
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    if(isPostsLoading) return;
    if(observer.current) observer.current.disconnect();
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting && page < totalPages){
      console.log(page);
      setPage(page + 1)
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current)

  }, [isPostsLoading] )

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const creatModal = () => {
    setModal(true);
  };

  const changePage = (page) => {
    setPage(page);
  };

  const styleButton = { marginTop: 30 };

  return (
    <div classname="App">
      <button onClick={fetchPosts}> Get Posts</button>
      <MyButton handler={creatModal} style={styleButton}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов 1"
        />
      <div ref={lastElement} style={{height: 20, background: "red"}}/>

      {isPostsLoading &&
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          {' '}
          <Loader />{' '}
        </div>
       }
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
}

export default Posts;
