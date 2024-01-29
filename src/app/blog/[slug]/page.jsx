import styles from './singlePost.module.css';
import Image from 'next/image';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/19181679/pexels-photo-19181679/free-photo-of-eiffel-tower-in-paris.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/19181679/pexels-photo-19181679/free-photo-of-eiffel-tower-in-paris.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum dicta eius! Quia quam autem, itaque veritatis aliquam illum nobis officiis distinctio ipsam fuga blanditiis quasi dolorem, voluptas voluptatibus dignissimos?.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;