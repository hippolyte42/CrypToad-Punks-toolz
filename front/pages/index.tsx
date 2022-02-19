import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Cryptoad Punks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <img className="w-1/4" src="./toad-punks.png"/>
        
        <div className='items-start w-1/4 text-left'>
          <br/><br/>
          <h1 className="text-3xl font-bold text-larva-pink">
            CrypToad Punks
          </h1>
          <br/>
          <div className="mt-6 flex max-w-4xl flex-wrap justify-around sm:w-full mb-6 text-base">
            <div className='items-start mb-12 w-full'>
              <a
                href="https://opensea.io/collection/cryptoadpunks"
                className="underline mb-6 text-base"
                target={"_blank"}
              >OpenSea</a>{' '}∙{' '}
              <a
                href="https://looksrare.org/collections/0x4f9835DBB442b263BBd20FF2731162101d9C3A89"
                className="underline mb-6 text-base"
                target={"_blank"}
              >LooksRare</a>{' '}∙{' '}
              <a
                href="https://etherscan.io/address/0x4f9835DBB442b263BBd20FF2731162101d9C3A89"
                className="underline mb-6 text-base"
                target={"_blank"}
              >Etherscan</a>{' '}∙{' '}
              <a
                href="https://twitter.com/cryptoadpunks"
                className="underline mb-6 text-base"
                target={"_blank"}
              >Twitter</a>{' '}∙{' '}
              <a
                href="https://discord.gg/cryptoadpunks"
                className="underline text-base"
                target={"_blank"}
              >Discord</a>
            </div>
            {/* OpenSea ∙ LooksRare ∙ Etherscan ∙ Twitter ∙ Discord */}
            <p className="mb-1 text-base">
            6969 Toad Punks on the Ethereum blockchain. No roadmap. Just !vibes. CC0 project.
            </p>
            <br/>
            <p className="mb-6 text-base">80% of mint proceeds (total of 69eth) was donated to the CrypToadz treasury.</p>

          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
