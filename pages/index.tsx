import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-center">
        <p className="p-2">
          С нашим постельным бельём
          <br />
          <span className="italic">вам всегда будут сниться красивые сны!</span>
        </p>
        <p className="p-2">
          В продаже постельное белье и одежда
          <br />
          (халаты, мужские рубашки)
          <br />
          Возможна доставка
        </p>
        <p className="p-2">
          По всем интересующим вопросам
          <br />
          +79101999159 Светлана (WhatsApp/Telegram)
        </p>

        <div className="flex justify-between pt-6 px-2">
          <div>ИП Лапина С.М.</div>
          <div>с. Борок</div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
