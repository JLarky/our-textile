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
          +79101999159 Светлана (
          <a href="https://wa.me/79101999159">WhatsApp</a>/
          <a href="tg://resolve?domain=lapinasm">Telegram</a>)
        </p>

        <div className="flex justify-between pt-6 px-2">
          <div>ИП Лапина С.М.</div>
          <div>с. Борок</div>
        </div>
      </section>
      <section className="p-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://photos.app.goo.gl/RVErAzbzbtZYiPKb9"
          className="block rounded overflow-hidden shadow-lg bg-white cursor-pointer"
        >
          <img className="w-full" src="./images/example3.jpg" alt="комплекты" />
          <div className="px-6 py-4 text-left">
            <div className="font-bold text-xl">Посмотреть фотографии</div>
          </div>
        </a>
      </section>
    </Layout>
  )
}

export default Home
