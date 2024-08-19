import { readFile } from 'fs/promises';
import RevealButton from './RevealButton.jsx';

export default async function Home() {
  const catFile = await readFile('./cats.txt','utf8');
  const catNames = catFile.split('\n');
  const index = Math.floor(Math.random()*catNames.length);
  const catName = catNames[index];
  // const json = { catName };
  return <RevealButton catName={catName}/>;
}
/**
 return (
    <main className="flex min-h-screen flex-col 
      items-center justify-between p-24">
      <b>Hello World</b>
    </main>
  );
 */