'use client';

export default function RevealButton ({ catName }) {
    function onClick() {
        console.log("generatorjs;onClick()");
        // document.body.innerText= catName;
        document.body.innerText=catName;
      }
    return(
        <main className="flex min-h-screen flex-col 
      items-center justify-between p-24">
       <button 
         className="bg-blue-500 hover:bg-blue-700 text-white 
           font-bold py-2 px-4 border border-blue-700 rounded"
         onClick={onClick} >
            Reveal
        </button>
    </main>
       
    );
}