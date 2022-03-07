import logo from './logo.svg';
import './App.css';
import BTSImageInteractive from './components/BTSImageInteractive';
import Image from 'react-bootstrap/Image';
import "@fontsource/dm-sans";
import banner from './images/banner.png';
import tweet1 from './images/tweet1.png';
import tweet2 from './images/tweet2.png';
import tweet3 from './images/tweet3.png';
import tweet4 from './images/tweet4.png';
import tweet5 from './images/tweet5.png';
import tweet6 from './images/tweet6.png';
import btsBanner from './images/bts-banner.png';
import fonsiBanner from './images/fonsi-banner.png';
import ratingsBanner from './images/ratings-banner.png';
import broaderContextBanner from './images/broader-context-banner.png';

function App() {

  return (
    <div className="Interactive">
      <div className="Header">
        <Image id='banner' src={banner} alt='' />
        <div className="Headline-Sticky-Container">
          <div className="Headline">
            <span>BIGGER THAN THE GRAMMYS</span>
          </div>
        </div>
        <div className="Subhead">
          <span>Some non-English-singing artists and their fans are fed up with
            The Grammys.
            They ask: What is the point of winning a Grammy if they’ve already
            made it big everywhere else? </span>
        </div>
        <div className="Byline">
          <span><strong>STORY BY</strong> JOSH CHEN, KIMBERLY CRUZ {'\u0026'}
            JORDAN DILLARD<br></br>March 2022</span>
        </div>
      </div>

      <div className="Part-One">
        <p>In 2021, Colombian singer and rapper J Balvin sparked some
          controversy with a single tweet. </p>
        <p>“The Grammys don’t value us, but they need us,” Balvin tweeted. “We
          give them ratings, but they don’t give us respect.” </p>
        <p>J Balvin was speaking about the Latin Grammys here, but his disdain
          touches a sentiment many hold towards The Recording Academy and
          Grammys in general. After several years of fierce criticism of the
          awards being too male and too white, this sentiment has only grown
          stronger among non-English-singing artists and their fans. To them,
          it is more apparent than ever that The Grammys continues to undervalue
          their work, despite significant commercial and artistic contributions
          to the music industry. </p>
        <p>After the 2018 show, when the Internet called out the show with the
          <a href="https://time.com/5122993/grammys-so-male-reactions/">hashtag
          </a> #GrammysSoMale, the awards increased its gender representation.
          The next year, Billie Eilish sweeped all the major categories. When it
          comes to how the institution recognizes and “honors” — whom it deems
          “worthy” of its awards — non-English-singing artists, however, it
          still falls extremely short. </p>
        <p>The only major criterion for eligibility for non-American artists is that their work was officially released in the U.S. However, there seems to continue to be a disconnect between how these artists are represented despite the Grammys branding themselves as a global organization.
        </p>
        <p>Perhaps the most prominent example in this moment is the biggest boy group in the world right now, BTS. </p>
      </div>

      <Image id='bts-banner' src={btsBanner} alt='' />

      <div className="Part-Two">
        <div className="Paragraph-Sticky-Container">

          <div className="Tweets-Paragraph">
            <p>
              When BTS lost in the Pop Performance by Duo/Group category in the 2021 Grammys, ARMY Twitter — ARMY is the name of BTS’ fandom — erupted in fury. They had the hashtag #scammys trending that night, slamming the Recording Academy for only nominating the group to attract viewers, not to actually recognize them for their music.
            </p>
          </div>
          <div className="Tweet-Sticky-Container-One">
            <div className="Tweet-One">
              <Image id='TweetOne' src={tweet1} alt='' />
            </div>
            <div className="Tweet-Sticky-Container-Two">
              <div className="Tweet-Two">
                <Image id='TweetTwo' src={tweet2} alt='' />
              </div>
              <div className="Tweet-Sticky-Container-Three">
                <div className="Tweet-Three">
                  <Image id='TweetThree' src={tweet3} alt='' />
                </div>
                <div className="Tweet-Sticky-Container-Four">
                  <div className="Tweet-Four">
                    <Image id='TweetFour' src={tweet4} alt='' />
                  </div>
                  <div className="Tweet-Sticky-Container-Five">
                    <div className="Tweet-Five">
                      <Image id='TweetFive' src={tweet5} alt='' />
                    </div>
                    <div className="Tweet-Sticky-Container-Six">
                      <div className="Tweet-Six">
                        <Image id='TweetSix' src={tweet6} alt='' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          For ARMY, that night was a culmination of issues that have built up.
        </p>
        <p>
          Since 2017, K-pop boy group BTS has exploded in the West, smashing records and taking the Internet by storm, propelled by the unprecedented online organizing power of ARMY.
        </p>
        <p>
          The group has sold out London’s Wimbledon Stadium twice and broken 18 Guinness World records. They’re the first group since the Beatles to have three Billboard No. 1 albums in one year and the first group in history to debut multiple songs at No. 1 on the Billboard Hot 100 <a href="https://www.forbes.com/sites/hughmcintyre/2020/12/02/bts-is-the-first-group-in-history-to-debut-more-than-one-song-at-no-1/?sh=71de12d45e29">chart</a>. They spent 210 consecutive weeks at No. 1 on Billboard’s Social 50 <a href="https://www.billboard.com/charts/social-50/">chart</a>, and they are regularly booked on primetime talk shows.
        </p>
        <p>
          Even academics have noted the cultural significance of the global rise of BTS. Ju Oak Kim, an Assistant Professor in Communication at Texas A&M University, sees BTS’ rise in global popularity as a “counter-hegemonic popular cultural formation,” something that challenges the status quo of Western music institutions.
        </p>
        <p>
          “The counter-hegemonic popular cultural formation that brings peripheral/non-western actors together and encourages them to identify their differences from their core/western counterparts is the ‘very same culture’ that produces hierarchies and exploitation within the periphery,” Kim said.
        </p>
        <p>
          Freelance K-pop reporter Tamar Herman, who has covered BTS for five years, describes the attitude that she’s observed from American media towards K-pop’s global rise in popularity.
        </p>
        <div className="Pullout-Quote">
          <p>
            “It's not a moment, but people are still considering it as a moment. They're not acknowledging the impact and the fact that maybe it's here to stay,” <br></br>Herman said.
          </p>
        </div>
        <p>
          Despite shattering notions of how a foreign group could perform commercially in the West, winning a Grammy remains one of the most notable achievements that BTS has not yet reached. BTS themselves have expressed, on multiple occasions, their personal desire to win a Grammy, and their label, HYBE (formerly known as Big Hit Entertainment) has demonstrated a push, at least, to win one.
        </p>
        <p>
          Since 2020, most of their music, at least the work being marketed in America, has been entirely in English. It is a major shift from the rest of their discography, which spans nine years and was mostly in Korean.
        </p>
        <p>
          Take a look at the lyrics of ‘Run,’ the lead single from their 2015 EP ‘The Most Beautiful Moment in Life, Pt. 2’ and the lyrics of ‘Butter,’ the 2021 single nominated for the Best Pop Duo/Group Performance Grammy this year.
        </p>

        <div className="Lyric-Comparison">
          <div className="Analysis">
            <span>
              Though BTS' songs, especially their title tracks, have usually included English words, the majority of their songs before 2020 were primarily in Korean. In this album concept, the group explores themes of beauty and adolescence. In the credits for Run, RM, Suga, V, Jungkook and Jin are credited with songwriting. Notably, BTS members have helped write their songs over their career, something not seen in many K-pop groups.
            </span>
          </div>
          <div className="Lyrics">
            <strong>Run lyrics: </strong><br></br>
            추억들이 마른 꽃잎처럼 <br></br>
            산산이 부서져가 <br></br>
            내 손 끝에서 내 발 밑에서 <br></br>
            달려가는 네 등 뒤로 <br></br>
            마치 나비를 쫓듯 꿈 속을 헤매듯 <br></br>
            너의 흔적을 따라가 <br></br>
            길을 알려줘 날 좀 멈춰줘 <br></br>
            날 숨쉬게 해줘 <br></br>

            다시 run, run, run 난 멈출 수가 없어 <br></br>
            또 run, run, run 난 어쩔 수가 없어 <br></br>
            어차피 이것밖에 난 못해 <br></br>
            너를 사랑하는 것 밖엔 못해 <br></br>

            [Chorus] <br></br>
            I run, run, run <br></br>
            I can’t stop <br></br>
            Run, run, run again <br></br>
            I can’t help it <br></br>
            This is all I can do anyway <br></br>
            All I know is how to love you <br></br>

          </div>
          <div className="Empty-Div"></div>
          <div className="Lyrics">
            <strong>Butter lyrics: </strong><br></br>
            [Chorus] <br></br>
            Smooth like (butter), cool shade (stunner) <br></br>
            And you know we don't stop <br></br>
            Hot like (summer), ain't no (bummer) <br></br>
            You'll be like, "Oh my God" <br></br>
            We gon' make you rock, and you say (yeah) <br></br>
            We gon' make you bounce, and you say (yeah) <br></br>
            Hotter? Sweeter! Cooler? Butter! <br></br>
          </div>
          <div className="Analysis">
            The Billboard No. 1 single is entirely in English. RM is the only member credited in the songwriting credits; the other writers are lyricists with previous experience writing charting songs and American music higher-ups. (For example, Ron Perry, the CEO and chairman of Columbia Records, is credited.)
          </div>
        </div>

        <p>
          Their major single releases in the last two years, Dynamite and Butter, have been entirely in English. These singles are also the ones HYBE has pushed for Grammy consideration (and have both been nominated for a Grammy).
        </p>
      </div>

      <div className="Part-Three">
        <p>
          “I think [BTS winning] would [change things], and it wouldn't because the Grammys are not in a place of cultural dominance anymore. On the other hand, the Grammys are still an important signifier of, kind of like, ‘you've made it.’ So I think it will basically change a lot of things for BTS, but anybody who's sitting and waiting for BTS to get a Grammy as if that's the ultimate ‘you've made it’-signifier is so off-base and so wrong,” Herman said.
        </p>
        <div className="Pullout-Quote">
          <p>
            So I think it will basically change a lot of things for BTS, but anybody who's sitting and waiting for BTS to get a Grammy as if that's the ultimate ‘you've made it’-signifier is so off-base and so wrong,” <br></br>Herman said.
          </p>
        </div>
        <p>
          Assistant Professor Kim Ju Oak sees the significance in documententing history and even urges people to critically observe the Grammys and how they treat and accept new music sensations.
        </p>
        <p>
          “We witness and remember fads, but most of them are temporary and are gone soon. Hence, it is salient to document them in an official way,” explains Kim. “In doing so, we can repeatedly discuss the implication of the currents and they will eventually be a part of music history.”
        </p>
        <p>
          To Kim, and many others, getting recognized by one of the most prestigious music ceremonies can ensure that BTS’ legacy is remembered and documented.
        </p>
        <p>
          Another important thing to note when analyzing their change of lyrics from Korean to English is the amount of collaborations with popular western artists.
        </p>
        <p>
          Meg the Stallion. Steve Aoki. Coldplay. Niki Minaj. They are all artists BTS has collaborated with and has found much success with western audiences.
        </p>
        <p>
          BTS isn’t the only international artist seeking to collaborate with popular western artists.
        </p>
        <p>
          Puerto Rican singer Luis Fonsi has also found much success and has broadened his audience with collaborations. Most well known is ‘Despacito,’ which was remixed by Justin Bieber months after its release.
        </p>
      </div>

      <Image id='fonsi-banner' src={fonsiBanner} alt='' />

      <div className="Part-Four">
        <p>
          Although Luis Fonsi is most well-known for his 2017 hit song “Despacito” featuring Daddy Yankee, Fonsi is not new to the music industry.
        </p>
        <p>
          After dropping out of Florida State University to pursue a music career, Fonsi was quickly offered a recording contract by Universal Music. Soon after, Fonsi recorded his debut album Comenzare, which was met with much commercial success.
        </p>
        <p>
          Peaking at number 11 on Billboard’s Top Latin Albums, Fonsi continued to release new albums and was able to collaborate with many successful artists like Rauw Alejandro and Daddy Yankee. He became well-known in many Latin households across the world. But Fonsi did not expect the success that came in January 2017, when he released “Despacito.”
        </p>
        <p>
          Although the song did well for the first couple of months, what really propelled it to the charts was the remix featuring Justin Beiber that was released three months later.
        </p>
        <p>
          “The interesting thing about Despacito is that it’s really just a Spanish song,” Fonsi explained in an interview for <a href="https://www.youtube.com/watch?v=IGrjEm5diEk&feature=youtu.be&ab_channel=E%21News">E!News</a>. “I’ve been releasing music for over 20 years now. I just got lucky I was able to cross over without forcing it.”
        </p>
        <p>
          Fonsi further explains how much Justin Biebers’ remix had an impact on expanding his audience in the U.S.
        </p>
        <p>
          “It just blew up,” Fonsi said in the interview. “It blew up in places where my music hadn’t been played before.”
        </p>
        <p>
          As more and more people heard the song in local shops, grocery stores and radio stations, it became a summer classic. It was a success not only for Fonsi, but also Beiber.
        </p>
        <p>
          The Bieber remix ended up reaching No 1 on the US Billboard Hot 100, becoming Beiber’s fifth number one on the chart, and both Fonsi and Yankee’s first.
        </p>
        <p>
          At the 51st Grammy Awards, Fonsi earned his first Grammy nomination, for Best Latin Pop Album. He didn’t win, but he reached a much broader audience and became the first Latin single to hit one billion streams on Spotify
        </p>
        <p>
          Many fans were confused about why Fonsi didn’t win the award.
        </p>
        <p>
          “I know the Grammys have their own criteria for judging and choosing a winner, but I just don’t understand how ‘Despacito’ could have lost,” explained Ashley Ayala, a long-time fan who had been keeping up with Fonsi’s nomination. “The fact that the song broke a lot of records was cool but the song was so much more than that. It really brought people together.”
        </p>
        <p>
          Many other fans were dissatisfied with the outcome of the award show that night. To them, it seemed as though the song was only nominated to drive off controversy, and more so seen as a way to increase their viewership and seemed to ignore Fonsi’s impact.
        </p>
        <p>
          Fonsi’s fans aren’t the only people who held this sentiment towards the Grammys.
        </p>
        <p>
          Recently, Colombian artist J Balvin has also spoken his thoughts about the Recording Academy and how they continue to undervalue non-english speaking artists.
        </p>
      </div>

      <Image id='ratings-banner' src={ratingsBanner} alt='' />

      <div className="Part-Five">
        <p>
          After being nominated for a Latin Grammy in 2020, J Balvin turned to twitter to share his thoughts on how the Latin Grammys treat reggaeton artists.
        </p>
        <p>
          “Despite being nominated, I don’t agree with the way [Latin Grammys] treated the genre and a lot of my colleagues,” he explained.
        </p>
        <p>
          After tweeting this out, Balvin followed up with a proposition and call to action for other artists to boycott the Latin Grammys. At the time, Balvin was met with support from other artist such as Daddy Yankee, Karol G, and Maluma. To these artists, and to many fans, the continuous presence of reggaeton in the music charts and its contributions to the music industry was not valued nor represented at the Latin Grammys.
        </p>
        <p>
          Created in 1989, the Latin Grammys were created in hopes to give recognition to artists from predominantly-spanish/portuguese speaking countries. Although this opened a lot of doors for spanish-speaking artists, there continues to be controversy surrounding the lack of categories open for nomination.
        </p>
        <p>
          Balvin was not the only artist that spoke out on the lack of nominated categories that reggaetton artists fall under. When Bad Bunny won Best Urban Album at the 2019 Latin Grammys he called out the recording academy's failure to recognize the impact of reggaeton music.
        </p>
        <p>
          “To the members of the Academy, with all due respect,” he said. “Reggaeton is a part of Latin culture and is representing Latinos on a global level, the same as many other genres of music.”
        </p>
        <p>
          Because “reggaeton” falls in the category of “Musica Urbana”, there has been a lot of controversy regarding whether the term “Urbana”, which is a direct translation of “Urban”, is an umbrella term that encompasses too many genres.
        </p>
        <p>
          Currently, the term encompasses different byproducts of hip-pop, including rap en Espanol, reggaeton, trap and dembow. However, because of all these genres falling under one umbrella term, there is still a constant lack of representation, specifically for Black Latinx artists who are subsequently marginalized.
        </p>
        <p>
          This controversy over the term “Urbana” or “Urban” isn't the only time this has occurred.
        </p>
        <p>
          After taking home the Grammy Award for Best Rap Album in 2020, Tyler the Creator commented on the Grammy’s history of awarding Black artists awards in “urban” categories.
        </p>
        <p>
          “I don’t like that ‘urban’ word – it’s just a politically correct way to say the N-word to me,” he explained.
        </p>
        <div className="Pullout-Quote">
          <p>
            “I don’t like that ‘urban’ word – it’s just a politically correct way to say the N-word to me,” he explained.
          </p>
        </div>
        <p>
          However, because multiple artists have spoken up on this issue in nominated categories, the Recording Academy has broadened this term . In 2021, the Recording Academy added “Best Progressive R{'\u0026'}B” and  “Best Melodic Rap Performance”.
        </p>
      </div>

      <Image id='broader-context-banner' src={broaderContextBanner} alt='' />

      <div className="Part-Six">
        <p>
          The issue of nominating artists and their work in “urban” categories and not in the general categories is something Black artists have been raising for decades.
        </p>
        <p>
          Snoop Dogg has received 17 nominations but never won a Grammy. Beyoncé has never won Album of the Year. Rihanna, Kendrick Lamar, Drake, and Frank Ocean have never won Grammys in the general categories, outside of the R&B and rap categories.
        </p>
        <p>
          Several artists have spoken up, tired of being snubbed by the Recording Academy. Think of Frank Ocean’s viral 2017 Tumblr <a href="https://frankocean.tumblr.com/post/157125310721/ok-ken-and-david-as-much-as-i-hate-to-make-you">post</a>. Nicki <a href="https://twitter.com/NICKIMINAJ/status/1331315767967551488?s=20&t=j6ZXYHl_j_SLrTIfptiztg">Minaj</a>. The <a href="https://twitter.com/nytimes/status/1370101119628668928?s=20&t=VR1B0sUC7h6GjQ4lzBi5Aw">Weeknd</a>.
        </p>
        <p>
          Recently, the Recording Academy announced that the 74th Annual Grammy Awards will be produced with an ‘inclusion rider’, which is a new addition to the criteria that ensures equality and inclusion at every level of production.
        </p>
        <p>
          However, there is still so much more to be done.
        </p>
        <p>
          This is an issue of marginalization that exists beyond artists who sing and perform in non-English languages. Year after year, the Grammys receive scorn, especially on the internet, for snubbing artists that fall outside of their status quo and being out of touch with what actually resonates with the general public and in culture.
        </p>
        <p>
          J Balvin lays it out plainly:
        </p>
        <p>
          “Remember one very important thing: Their platform was not the one that created this movement.”
        </p>
        <div className="Pullout-Quote">
          <p>
            “Remember one very important thing: Their platform was not the one that created this movement.”
          </p>
        </div>
        <p>
          He reminds us that these artists are what gave the Grammys power and a following in the first place. Balvin pushes many artists and fans to think what significance the Grammys bring. Do they really need this institution to know they’ve already made it big?
        </p>
      </div>

      <div className="K-Pop">

        <div className="BTS-Title">
          <p>BTS</p>
        </div>



      </div>

      <div className="Latin-Pop">

      </div>

    </div>
  );
}

export default App;
