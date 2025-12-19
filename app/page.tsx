
'use client';

import { time } from 'console';
import React, { useEffect, useState } from 'react';
import MyAppBar from './appbar';

import './app.css'

interface FeedItem {
  title: string;
  link: string;
  published: string;
  summary: string;
}
export async function refresh() {
  if(typeof window !== 'undefined'){
    window.location.reload();
    
  }
}
setInterval(refresh, 300000);




export default function FeedList() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const now = new Date();
  let min: string = "";
  let second: string = "";
  let hour: number = now.getHours() % 12;
  if(hour == 0){
    hour = 12;
  }

  if (now.getSeconds() / 10 < 1) {
    second = `0${now.getSeconds()}`;
  }

  else {
    second = `${now.getSeconds()}`;
  }

  if (now.getMinutes() / 10 < 1) {
    min = `0${now.getMinutes()}`
  }
  else {
    min = `${now.getMinutes()}`;
  }

  useEffect(() => {
    fetch('/feed')
      .then(res => res.json())
      .then(setItems)
      .catch(console.error);
  }, []);
 
  return (
   
    <div>
      <MyAppBar />
      <div className="p-4">
        <h1 className="header">News Feed</h1>
        <p className="text-center">Last Refreshed: {now.getMonth()}/{now.getDate() + 1}/{now.getFullYear()} {hour}:{min}:{second}</p>
        <div className="grid">
          {items.map((item, i) => (
            <div key={i} className=" border-b padd">
              <div className="test">
                <a
                  href={item.link}
                  className="card preset-filled-surface-100-900 border border-surface-200-800 card-hover divide-surface-200-800 block divide-y overflow-hidden"
                >
                  <article className="space-y-4 p-4">
                    <div>
                      <h2 className="h6">{item.published.substring(0, 25)}</h2>
                      <h3 className="h3">{item.title}</h3>
                    </div>
                    <p className="opacity-60">
                      {item.summary}
                    </p>
                  </article>
                  {/* Footer */}
                  <footer className="flex items-center justify-between gap-4 p-4">
                    <small className="opacity-60">White House</small>
                  </footer>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

