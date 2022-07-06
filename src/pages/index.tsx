import { GetStaticProps } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import { FiUser } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

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

export default function Home() {
  return(
  <>
    <Header/>
    <main className={styles.content}>
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

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
