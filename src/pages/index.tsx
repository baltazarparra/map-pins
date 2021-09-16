import Head from 'next/head'

type Props = {
  title: string
}

const bla = 'var2'

export default function Home({ title = 'Map Pins' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{title}</h1>
    </div>
  )
}
