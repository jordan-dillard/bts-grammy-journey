import logo from './logo.svg';
import './App.css';
import BTSImageInteractive from './components/BTSImageInteractive';
import Image from 'react-bootstrap/Image';
import "@fontsource/dm-sans";
import tweet1 from './images/tweet1.png';
import tweet2 from './images/tweet2.png';
import tweet3 from './images/tweet3.png';
import tweet4 from './images/tweet4.png';
import tweet5 from './images/tweet5.png';
import tweet6 from './images/tweet6.png';

function App() {

  return (
    <div className="Interactive">
      <div className="Header">
        <div className="Headline-Sticky-Container">
          <div className="Headline">
            <span>BIGGER THAN THE GRAMMYS</span>
          </div>
        </div>
        <div className="Subhead">
          <span>Some non-English-singing artists and their fans are fed up with The Grammys.
            They ask: What is the point of winning a Grammy if they’ve already made it big everywhere else? </span>
        </div>
        <div className="Byline">
          <span><strong>STORY BY</strong> JOSH CHEN, KIMBERLY CRUZ {'\u0026'} JORDAN DILLARD<br></br>March 2022</span>
        </div>
      </div>

      <div className="Part-One">
        <p>In 2021, Colombian singer and rapper J Balvin sparked some controversy with a single tweet. </p>
        <p>“The Grammys don’t value us, but they need us,” Balvin tweeted. “We give them ratings, but they don’t give us respect.” </p>
        <p>J Balvin was speaking about the Latin Grammys here, but his disdain touches a sentiment many hold towards The Recording Academy and Grammys in general. After several years of fierce criticism of the awards being too male and too white, this sentiment has only grown stronger among non-English-singing artists and their fans. To them, it is more apparent than ever that The Grammys continues to undervalue their work, despite significant commercial and artistic contributions to the music industry. </p>
        <p>After the 2018 show, when the Internet called out the show with the hashtag #GrammysSoMale, the awards increased its gender representation. The next year, Billie Eilish sweeped all the major categories. When it comes to how the institution recognizes and “honors” — whom it deems “worthy” of its awards — non-English-singing artists, however, it still falls extremely short. </p>
        <p>Despite the Grammys branding themselves as a global organization, the [UNFINISHED]</p>
        <p>With having the work released officially in the U.S as the only major criterion of eligibility for non-american artists, there seems to be a disconnect in how represented these artists are. </p>
        <p>Perhaps the most prominent example in this moment is the biggest boy group in the world right now, BTS. </p>

      </div>

      <div className="Sub-Header">
        <h2>Who is BTS?</h2>
      </div>

      <BTSImageInteractive></BTSImageInteractive>

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
          For ARMY, that night was a culmination of issues that have built  [UNFINISHED]
        </p>
        <p>
          Since 2017, K-pop boy group BTS has exploded in the West, smashing records and taking the Internet by storm, propelled by the unprecedented online organizing power of ARMY.
        </p>
        <p>
          The group has sold out London’s Wimbledon Stadium twice and broken 18 Guinness World records. They’re the first group since the Beatles to have three Billboard No. 1 albums in one year and the first group in history to debut multiple songs at No. 1 on the Billboard Hot 100 chart. They spent 210 consecutive weeks at No. 1 on Billboard’s Social 50 chart, and they are regularly booked on primetime talk shows.
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
        <p>
          “It's not a moment, but people are still considering it as a moment. They're not acknowledging the impact and the fact that maybe it's here to stay,” Herman said.
        </p>
        <p>
          Despite shattering notions of how a foreign group could perform commercially in the West, winning a Grammy remains one of the most notable achievements that BTS has not yet reached. BTS themselves have expressed, on multiple occasions, their personal desire to win a Grammy, and their label, HYBE (formerly known as Big Hit Entertainment) has demonstrated a push, at least, to win one.
        </p>
        <p>
          Since 2020, most of their music, at least the work being marketed in America, has been entirely in English. It is a major shift from the rest of their discography, which spans nine years and was mostly in Korean.
        </p>
        <p>
          Take a look at the lyrics of ‘Run,’ the lead single from their 2015 EP ‘The Most Beautiful Moment in Life, Pt. 2’ and the lyrics of ‘Butter,’ the 2021 single nominated for the Best Pop Duo/Group Performance Grammy this year.
        </p>
        <p>
          Their major single releases in the last two years, Dynamite and Butter, have been entirely in English. These singles are also the ones HYBE has pushed for Grammy consideration (and have both been nominated for a Grammy).
        </p>
      </div>

      {/* TIMELINE OF INSTANCES BTS HAS SAID THEY WANT TO WIN A GRAMMY

      INTERACTIVE WITH ENGLISH SONGS

      INTERACTIVE WITH COLLABS */}

      <div className="Part-Three">
        <p>
          {/*Question what the consequence of winning would be to
          them, amidst all their already very significant and
          groundbreaking achievements*/}
        </p>
        <p>
          “I think [BTS winning] would [change things], and it wouldn't because the Grammys are not in a place of cultural dominance anymore. On the other hand, the Grammys are still an important signifier of, kind of like, ‘you've made it.’ So I think it will basically change a lot of things for BTS, but anybody who's sitting and waiting for BTS to get a Grammy as if that's the ultimate ‘you've made it’-signifier is so off-base and so wrong,” Herman said.
        </p>
        <p>
          {/*input from fan*/}
        </p>
        <p>
          BTS isn’t the only international artist seeking to collaborate with popular western artists.
        </p>
        <p>
          Puerto Rican singer Luis Fonsi has also found much success and has broadened his audience with collaborations. Most well known is ‘Despacito,’ which was remixed by Justin Bieber months after its release.
        </p>
      </div>

      <div className="Sub-Header">
        <h2>Who is Luis Fonsi?</h2>
      </div>
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
          “The interesting thing about Despacito is that it’s really just a Spanish song,” Fonsi explained in an interview for E!News. “I’ve been releasing music for over 20 years now. I just got lucky I was able to cross over without forcing it.”
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
      <div className="Sub-Header">
        <h2>Ratings, Streams and Respect</h2>
      </div>
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
        <p>
        However, because multiple artists have spoken up on this issue in nominated categories, the Recording Academy has broadened this term . In 2021, the Recording Academy added “Best Progressive R{'\u0026'}B” and  “Best Melodic Rap Performance”. 
        </p>
      </div>
      <div classname = "Sub-Header">
        <h2>Broader Context</h2>
      </div>
      <div className = "Part-Six">
      </div>


      {/* <div className="K-Pop">

              <div className="BTS-Title">
                <p>BTS</p>
              </div>

              <div className="Lyric-Comparison">
                  <div className="Analysis">
                    Some Analysis
                  </div>
                  <div className="Lyrics">
                    'Cause I, I, I'm in the stars tonight <br></br>
                    So watch me bring the fire and set the night alight (Hey) <br></br>
                    Shinin' through the city with a little funk and soul <br></br>
                    So I'ma light it up like dynamite, woah-oh-oh <br></br>
                  </div>
                  <div className="Lyrics">
                    불타오르네 <br></br>
                    (Ayy, ayy-oh, ayy-oh) <br></br>
                    싹 다 불태워라 Bow-wow-wow <br></br>
                    (Ayy, ayy-oh, ayy-oh) <br></br>
                    싹 다 불태워라 Bow-wow-wow <br></br>
                  </div>
                  <div className="Analysis">
                    Some Analysis
                  </div>


              </div>


        </div> */}

      <div className="Latin-Pop">

      </div>

    </div>
  );
}

export default App;
