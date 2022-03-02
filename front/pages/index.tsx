import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>CrypToad Punks</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property='twitter:card' content='summary_large_image'/>
        <meta property="twitter:title" content="CrypToad Punks" />
        <meta property='twitter:description' content='6969 CrypToad Punks on the Ethereum blockchain. No roadmap. Just !vibes. CC0 public domain project.'/>
        <meta property="twitter:image" content="https://i.imgur.com/y3VvS8q.jpeg" />
        <meta property="twitter:image:alt" content="6969 CrypToad Punks on the Ethereum blockchain. No roadmap. Just !vibes. CC0 public domain project." />
        <meta property='twitter:site' content='@cryptoadpunks'/>
        <meta property='twitter:site:id' content='1491380727006433282'/>
        <meta property='twitter:creator' content='@buyhighHippo'/>
        <meta property='twitter:creator:id' content='1431037191279493123'/>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-20 mt-10 mb-24">

        <img className="w-1/2 min-w-[325px] mb-14 md:mb-20" src="./toad-punks.png"/>

        <div className='items-start w-1/2 min-w-[325px] text-left mb-20'>
          <h1 className="text-4xl md:text-6xl font-bold text-larva-pink mb-14 md:mb-20">
            CrypToad Punks
          </h1>
          
          <div className="mt-6 flex max-w-4xl flex-wrap sm:w-full text-lg">
            <div className='items-start mb-12 w-full'>

              <a
                href="https://opensea.io/collection/cryptoadpunks"
                className="underline mb-6"
                target={"_blank"}
              >OpenSea</a>{' '}∙{' '}
              <a
                href="https://looksrare.org/collections/0x4f9835DBB442b263BBd20FF2731162101d9C3A89"
                className="underline mb-6"
                target={"_blank"}
              >LooksRare</a>{' '}∙{' '}
              <a
                href="https://etherscan.io/address/0x4f9835DBB442b263BBd20FF2731162101d9C3A89"
                className="underline mb-6"
                target={"_blank"}
              >Etherscan</a>{' '}∙{' '}
              <a
                href="https://twitter.com/cryptoadpunks"
                className="underline mb-6"
                target={"_blank"}
              >Twitter</a>{' '}∙{' '}
              <a
                href="https://discord.gg/cryptoadpunks"
                className="underline"
                target={"_blank"}
              >Discord</a>{' '}∙{' '}
              <a
                href="https://github.com/buyhighHippo/CrypToad-Punks-toolz"
                className="underline"
                target={"_blank"}
              >GitHub</a>
            </div>
            
            <p className="mb-6">
              6969 CrypToad Punks on the Ethereum blockchain. No roadmap. Just !vibes. CC0 public domain project.
            </p>
            
            <p className="">80% of mint proceeds (total of 69eth) was donated to the <a
                href="https://www.cryptoadz.io/"
                className="underline mb-6"
                target={"_blank"}
              >CrypToadz</a> treasury.</p>
          </div>
        </div>


        <h1 className="text-xl md:text-3xl font-bold text-larva-pink mb-14 md:mb-20">
            {"Tools & Analytics"}
        </h1>   
        <div className="grid lg:grid-cols-3 lg:w-3/4 place-items-center">
            <div className="max-w-xs mx-6 mb-2 rounded-lg">
                <a href="https://dune.xyz/rantum/NFT-Collection-Dashboard?contract_address=x4f9835dbb442b263bbd20ff2731162101d9c3a89" target={"_blank"}>
                  <img className="object-cover h-48 w-96 rounded-lg"
                      src="/duneDashboard.png"
                      alt="" />
                  <div className="py-2">
                      <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">dune.xyz</h4>
                  </div>
                </a>
            </div>
            <div className="max-w-xs mx-4 mb-2 rounded-lg">
              <a href="https://raritysniper.com/cryptoad-punks" target={"_blank"}><img className="object-cover h-48 w-96 rounded-lg"
                    src="/raritySniper.png"
                    alt="" />
                <div className="py-2">  
                  <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">raritysniper.com</h4>
                </div>
              </a>
            </div>
            <div className="max-w-xs mx-4 mb-2 rounded-lg">
              <a href="https://compass.art/collections/0x4f9835dbb442b263bbd20ff2731162101d9c3a89" target={"_blank"}>
                <img className="object-cover h-48 w-96 rounded-lg"
                    src="/compass_art.png"
                    alt="" />
                <div className="py-2">
                  <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">compass.art</h4>
                </div>
              </a>
            </div>
            {/* <div className="max-w-xs mx-4 mb-2 rounded-lg">
                <img className="object-cover h-48 w-96"
                    src="/raritySniper.png"
                    alt="" />
                <div className="px-6 py-4">
                  <a href="https://raritysniper.com/cryptoad-punks" target={"_blank"}>
                    <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">raritysniper.com</h4>
                  </a>
                </div>
            </div> */}
        </div>
      </main>
    </div>
  )
}

export default Home
