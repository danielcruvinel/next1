import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
          <title>Home | BuscaTurbo.com.br</title>
      </Head>
      <main>
        <section>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the poublication <br />
            <span> for $9.90</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="" />
      </main>
    </>
  )
}
