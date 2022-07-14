import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post() {
    return(<>
      <Header/>
      <img className={styles.banner} src="/Banner.png" alt="Banner" />
      <main className={styles.content}>
        <div>
          <h1 className={styles.title}>Criando um app CRA do zero</h1>
          <div className={styles.detailsConteiner}>
                <time className={styles.date}> <FiCalendar /> 15 mar 2021</time>
                <span className={styles.author}> <FiUser size={16}/> Joseph Oliveira</span>
                <time className={styles.date}><FiClock/> 4 min  </time>
          </div>
          <div className={styles.contentConteiner}>
              <h2>Lorem ipsum dolor sit</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore animi commodi incidunt mollitia ea ab, ratione in reprehenderit qui?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta repudiandae porro maxime, esse eius aliquid placeat ratione. Enim inventore repellat ducimus ipsa. Mollitia itaque minima similique recusandae repudiandae, eius, incidunt, architecto ab exercitationem pariatur molestiae dolorum necessitatibus numquam consectetur obcaecati neque? Deserunt voluptatum sit laudantium, reiciendis fugiat alias quibusdam enim?</p>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero praesentium saepe dolorum eveniet dolor deserunt et expedita asperiores sapiente molestias at, officia pariatur, cumque incidunt porro qui. Et, molestiae labore fugiat hic officia voluptas architecto non ut quibusdam, culpa aperiam dolores sint vel. Possimus officiis placeat ipsa. Hic cupiditate at nemo ex laborum quibusdam necessitatibus qui autem illum eaque ad animi illo consequatur inventore magni incidunt minus, accusantium rem doloribus quaerat doloremque nulla! Quidem sunt nulla quibusdam exercitationem. Ad, asperiores velit? Nulla quis qui enim, molestias quae, maxime corrupti dolorem repellat perferendis esse adipisci facere ducimus dolor quo consectetur recusandae?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nemo earum incidunt, enim laborum qui nobis velit ea odio quis repudiandae fuga temporibus dolorem consectetur quas, et, eligendi nihil perferendis id? Aut quibusdam iste accusantium fuga voluptatum distinctio ipsam ea nobis molestias fugit voluptas optio hic eum sint perspiciatis perferendis minima, laboriosam, sit iusto veritatis. Fugit, facilis tenetur consequatur dolores quis blanditiis dicta sit vitae deleniti aspernatur? Nesciunt ratione ducimus, nemo veniam amet voluptates in quidem possimus totam sapiente ex illo eum dolore cupiditate iste rerum maiores animi aliquam vel blanditiis corrupti soluta incidunt quas. Corrupti, porro quidem. Laboriosam alias modi minima quos eaque mollitia ipsam odio fugiat commodi explicabo. Ullam consectetur optio, consequatur laudantium tenetur commodi velit cumque deserunt, fuga dolores doloremque saepe sunt doloribus eum nesciunt sequi? Numquam quod, temporibus repellendus debitis tempore saepe blanditiis deleniti alias consequatur eaque eos nam suscipit ad accusantium esse hic minus delectus.</p>
          </div>
        </div>

      </main>
    </>
    )
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient({});
//   const posts = await prismic.getByType(TODO);

//   // TODO
// };

// export const getStaticProps = async ({params }) => {
//   const prismic = getPrismicClient({});
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
