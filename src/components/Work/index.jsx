import React from "react";
import { Heading } from "../Heading";
import styles from "./Work.module.scss";
import Image from "next/image";

export const Work = () => {
  return (
    <div>
      <Heading label="Work" />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {PORTFOLIO.map((item, index) => (
            <div key={index} className={styles.portfolio}>
              <Image
                src={item.src}
                objectFit="cover"
                layout="fill"
                priority={true}
                className={styles.portfolioImg}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PORTFOLIO = [
  {
    title: "TERUPRO",
    description:
      "こちらは私が運営しているブログです。日々の学びをアウトプットしています。",
    src: "/images/terupro_1.png",
  },
  {
    title: "Poimemo",
    description:
      "こちらはシンプルなメモアプリです。日頃のちょっとしたメモに最適です。",
    src: "/images/poimemo_1.png",
  },
  {
    title: "Posts",
    description:
      "こちらは自分用写真投稿アプリです。気軽に写真を投稿できるのが魅力です。",
    src: "/images/posts_1.png",
  },
  {
    title: "TERUBLOG",
    description: "こちらはmicroCMSで開設したプライベートブログ(仮)です。",
    src: "/images/terublog_1.png",
  },
  {
    title: "RealSNS",
    description: "こちらはMERNスタックで開発した本格的なSNSアプリです。",
    src: "/images/realsns_1.png",
  },
  {
    title: "Pacific",
    description: "こちらはインターンシップの課題で作成した模写サイトです。",
    src: "/images/pacific_1.png",
  },
  {
    title: "Twitter Clone",
    description: "こちらは本物を参考に開発したTwitterアプリのクローンです。",
    src: "/images/twitterclone_1.png",
  },
  {
    title: "RealTimeChat",
    description: "こちらはSocket.ioで開発したリアルタイムチャットアプリです。",
    src: "/images/realtimechat_1.png",
  },
  {
    title: "CalenderApp",
    description:
      "こちらはインターンシップの課題で開発したカレンダーアプリです。",
    src: "/images/calender_1.png",
  },
  {
    title: "Other",
    description: "その他にWebライティングの仕事もしています。",
    src: "/images/writing_1.png",
  },
];
