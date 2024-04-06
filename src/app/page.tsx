import {Home as HomeIcon , Search ,BookMarked , ChevronLeft , ChevronRight , Play} from 'lucide-react'
export default function Home() {
  return (
   <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6 ">
        <nav className='space-y-5'>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-100'>
          <HomeIcon></HomeIcon>
          Home
        </a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-100'>
        <Search></Search>
        Search
        </a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-100'>
          <BookMarked></BookMarked>
          Library
        </a>
        </nav>
        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3 '>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Tudo Junto e Misturado </a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Corações Partidos e Outros Problemas </a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Liga o som que é sexta-feira </a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Faxina Nostalgia </a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Do Tempo do Tamagoshi </a>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className='flex items-center gap-3'>
          <button className='rounded-full bg-black/40 p-1'>
            <ChevronLeft></ChevronLeft>
          </button>
          <button className='rounded-full bg-black/40 p-1'>
          <ChevronRight></ChevronRight>
          </button>
        </div>
        <h1 className=' font-semibold text-3xl mt-8 ml-4 '>Good Afternon</h1>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          <a href='#' className='bg-white/10 group rounded-lg flex  items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <img src="/DL-sidoka.jpg" width={104} height={104} alt="capa de album" />
            <strong>doka language</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
              <Play/>
            </button>
            </a>
          <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <img src="/C-orochi.jpg" width={104} height={104} alt="capa de album" />
            <strong>Celebridade</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
              <Play/>
            </button>
            </a>
          <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <img src="/mt-MATUE.jpeg" width={104} height={104} alt="capa de album" />
            <strong>Máquina do tempo</strong>
             <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
              <Play />
            </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <img src="/PP-mckevin.jpg" width={104} height={104} alt="capa de album" />
            <strong>Passado e Presente</strong>
             <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
              <Play />
            </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <img src="/SN-taylorswift.jpg" width={104} height={104} alt="capa de album" />
            <strong>Speak Now</strong>
             <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
              <Play />
            </button>
            </a>
          <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <img src="/FB-tylerthecreator.jpg" width={104} height={104} alt="capa de album" />
            <strong>Flower Boy</strong>
             <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible'>
              <Play />
            </button>
            </a>
        
        </div>
      </main>
      
    </div>
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
      footer
    </footer>
   </div>
  );
}
