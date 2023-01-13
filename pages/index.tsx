import Layout from '@/components/Layout';
import styles from "@/styles/Home.module.css";
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <h1 className={styles['title-homepage']}>Welcome Novi Andriyani</h1>
      </Layout>
    </>
  )
}
