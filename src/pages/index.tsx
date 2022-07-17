import { GetStaticProps } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import { FiUser } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';
// import { createClient } from '../services/prismicio'

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({postsPagination}:HomeProps) {

  const formattedPost = postsPagination.results.map(post => {
    return {
      ...post,
      first_publication_date: format(
        new Date(post.first_publication_date),
        'dd MMM yyyy',
        {
          locale: ptBR,
        }
      )
    }
  })
  const [posts, setPosts] = useState<Post[]>(formattedPost) // usando a formatação como estado inicial dos posts

  // carregar mais páginas
  const [nextPage, setNextPage] = useState(postsPagination.next_page);
  const [currentPage, setCurrentPage] = useState(1);

  async function handleNextPage(): Promise<void> {
    if(currentPage !== 1 && nextPage === null) {
      return;
    }

    const postResults = await fetch(`${nextPage}`).then(response =>
      response.json()
    );

    setNextPage(postResults.next_page);
    setCurrentPage(postResults.page);

    const newPosts = postResults.results.map(post => {
      return {
        uid: post.uid,
        first_publication_date:format(
          new Date(post.first_publication_date),
          'dd MMM yyyy',
          {
            locale: ptBR,
          }
        ),
        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: post.data.author
        }
      }
    })

    setPosts([...posts, ...newPosts]);
  }

  return(
  <>
    <div className={styles.header}>
      <Header/>
    </div>
    <main className={styles.content}>
      {/* <div className={styles.Post}>
        {posts.map(post => (
          <Link href="" key={post.uid}>
            <a>
              <strong className={styles.title}>{post.data.title}</strong>
              <p className={styles.description}>{post.data.subtitle}</p>
              <div className={styles.box}>
                <time className={styles.date}> <FiCalendar /> {post.first_publication_date}</time>
                <span className={styles.author}> <FiUser size={16}/> {post.data.author}</span>
              </div>
            </a>
          </Link>
        ))}
          
      </div> */}

      <div className={styles.Post}>
          <Link href="">
            <a>
              <strong className={styles.title}>Criando um app CRA do zero</strong>
              <p className={styles.description}>Tudo sobre como criar a sua primeira aplicação utilizando Create React App</p>
              <div className={styles.box}>
                <time className={styles.date}> <FiCalendar /> 15 mar 2021</time>
                <span className={styles.author}> <FiUser size={16}/> Joseph Oliveira</span>
              </div>
            </a>
          </Link>
      </div>

      <div className={styles.Post}>
          <Link href="">
            <a>
              <strong className={styles.title}>Como utilizar Hooks</strong>
              <p className={styles.description}>Pensando em scincronização em vez de ciclos de vida</p>
              <div className={styles.box}>
                <time className={styles.date}> <FiCalendar /> 15 mar 2021</time>
                <span className={styles.author}> <FiUser size={16}/> Joseph Oliveira</span>
              </div>
            </a>
          </Link>
      </div>

      <div className={styles.Post}>
          <Link href="">
            <a>
              <strong className={styles.title}>Criando um app CRA do zero</strong>
              <p className={styles.description}>Tudo sobre como criar a sua primeira aplicação utilizando Create React App</p>
              <div className={styles.box}>
                <time className={styles.date}> <FiCalendar /> 15 mar 2021</time>
                <span className={styles.author}> <FiUser size={16}/> Joseph Oliveira</span>
              </div>
            </a>
          </Link>
      </div>

      <div className={styles.Post}>
          <Link href="">
            <a>
              <strong className={styles.title}>Como utilizar Hooks</strong>
              <p className={styles.description}>Pensando em scincronização em vez de ciclos de vida</p>
              <div className={styles.box}>
                <time className={styles.date}> <FiCalendar /> 15 mar 2021</time>
                <span className={styles.author}> <FiUser size={16}/> Joseph Oliveira</span>
              </div>
            </a>
          </Link>
      </div>
      <button className={styles.button}>Carregar mais posts</button>
    </main>
  </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});

  const postsResponse = await prismic.getByType('post', { pageSize: 5 });

  const posts = postsResponse.results.map(post => {

    return {
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author
      }
    }
    
  })
  
  const postsPagination = {
    next_page: postsResponse.next_page,
    results: posts,
  }
  
  console.log(postsPagination)

  return {
    props: {
      postsPagination
    }
  }
};
