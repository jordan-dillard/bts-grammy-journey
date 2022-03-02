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

      <div className="PartOne">
        <p>In 2018, Colombian singer and rapper J Balvin sparked some
          controversy with one single tweet. </p>
        <p>“The Grammys don’t value us, but they need us,” Balvin
          tweeted. “We give them ratings, but they don’t give us respect.” </p>
        <p> Three years later — after fierce criticism of the awards
          being too male, too white and historically exclusionary —
          this sentiment has only grown stronger among non-English
          -singing artists and their fans. To them, it is more
          apparent than ever that The Grammys continues to undervalue
          their work, despite significant commercial and artistic
          contributions to the music industry.
        </p>
        <p>
          After the 2018 show, when the Internet called out the show
          with the hashtag #GrammysSoMale, the awards showed some
          intention to improve its representation, such as Billie
          Eilish’s sweep of the 2019 major categories. When it comes to
          how the institution recognizes and “honors” — whom it deems
          “worthy” of its awards — non-English-singing artists,
          however, it still falls extremely short.
        </p>
        <p>
          Perhaps the most prominent example in this moment is the
          biggest boy group in the world right now, BTS.
        </p>
      </div>

      <div className="Sub-Header">
        <h2>Who is BTS?</h2>
      </div>

      <BTSImageInteractive></BTSImageInteractive>

      <div className="PartTwo">
        <div className="Paragraph-Sticky-Container">

          <div className="Tweets-Paragraph">
            <p>
              When BTS lost in the Pop Performance by Duo/Group category in the
              2021 Grammys, ARMY Twitter erupted in fury. They had the hashtag
              #scammys trending that night, slamming the Recording Academy for
              only nominating the group to attract viewers, not to actually
              recognize them for their music.
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
          Since 2017, K-pop boy group BTS has exploded in the West,
          smashing records (and not only for a Korean act) and taking the
          Internet by storm, propelled by the unprecedented online
          organizing power of their fans, called ARMY.
        </p>
        <p>
          They have sold out London’s famous Wimbledon Stadium twice,
          broken 18 World Guinness records, become the first group since
          the Beatles to have three Billboard No. 1 albums in one year,
          become the first group in history to debut multiple songs at
          No. 1 on the Billboard Hot 100 chart and spent 210 consecutive
          weeks at #1 on Billboard’s Social 50 chart. They are
          regularly booked on primetime nighttime talk shows and
          heavily featured at any awards shows they perform in.
        </p>
        <p>
          “The counter-hegemonic popular cultural formation that brings
          peripheral/non-western actors together and encourages them to
          identify their differences from their core/western
          counterparts is the ‘very same culture’ that produces
          hierarchies and exploitation within the periphery,” Kim said.
        </p>
        <p>
          Freelance K-pop reporter Tamar Herman, who has covered BTS for
          over five years, describes the attitude she’s observed from
          American media towards K-pop’s global rise in popularity.
        </p>
        <p>
          “It's not a moment, but people are still considering it as a
          moment. They're not acknowledging the impact and the fact that
          maybe it's here to stay,” Herman said.
        </p>
        <p>
          Despite shattering the notions of how a foreign group can
          perform commercially in the West, winning a Grammy remains one
          of the most notable achievements left for BTS to yet reach. BTS
          themselves have expressed, on multiple occasions, their
          personal desire to win a Grammy, and their label, HYBE
          (formerly known as Big Hit Entertainment) demonstrates a push
          at least to win one.
        </p>
      </div>

      {/* TIMELINE OF INSTANCES BTS HAS SAID THEY WANT TO WIN A GRAMMY

      INTERACTIVE WITH ENGLISH SONGS

      INTERACTIVE WITH COLLABS */}

      <div className="PartThree">
        <p>
          ***Question what the consequence of winning would be to
          them, amidst all their already very significant and
          groundbreaking achievements***
        </p>
        <p>
          “I think [BTS winning] would [change things], and it wouldn't
          because the Grammys are not in a place of cultural dominance
          anymore. On the other hand, the Grammys are still an
          important signifier of, kind of like, ‘you've made it.’ So I
          think it will basically change a lot of things for BTS, but
          anybody who's like sitting and waiting for BTS to get a
          Grammy as if that's the ultimate ‘you've made it’-signifier
          is so off base and so wrong,” Herman said.
        </p>
        <p>
          ***input from fan***
        </p>
        <p>
          BTS isn’t the only international artist seeking to
          collaborate with popular western artists.
        </p>
        <p>
          Puerto Rican singer Luis Fonsi has also found much success
          and has broadened his audience with collaborations. Most well
          known is ‘Despacito’, which months after release, was remixed
          by none other than Canadian singer Justin Beiber.
        </p>
      </div>

      <div className="Sub-Header">
        <h2>Who is Luis Fonsi?</h2>
      </div>
      <div className="PartFour">
        <p>
          Although Luis Fonsi is most well-known for his 2017 hit song
          “Despacito” featuring Daddy Yankee, Fonsi is not new to the
          music industry.
        </p>
        <p>
          After dropping out of Florida State University to pursue a music
          career, Fonsi was very quickly offered a recording contract by
          Universal Music. Soon after, Fonsi recorded his debut album
          Comenzare, which was met with much success.
        </p>
        <p>
          Peaking at number 11 on Billboard’s Top Latin Albums, Fonsi
          continued to release new albums and was able to collaborate
          with many great artists, such as Rauw Alejandro and Daddy
          Yankee. Becoming a well-known artist played in many Latin
          households across the world, Fonsi still did not expect the
          success that came after January of 2017 when he released “Despacito”
          featuring Daddy Yankee.
        </p>
        <p>
          Although the song did well for the first couple of months, what
          really propelled it to the charts was the remix featuring Justin
          Bieber that was released three months later.
        </p>
        <p>
          “The interesting thing about Despacito is that it’s really just a
          Spanish song,” Fonsi explained in an interview for E!News. “I’ve
          been releasing music for over 20 years now. I just got lucky I was
          able to cross over without forcing it.”
        </p>
        <p>
          Fonsi further explains how much Justin Beibers’ remix had an impact
          on expanding his audience in the U.S.
        </p>
        <p>
          “It just blew up,” Fonsi said. “It blew up in places where my music
          hadn’t been played before.”
        </p>
        <p>
          As more and more people heard the song, it quickly became a summer
          classic. Hearing it in local shops, grocery stores, and on radio
          stations, this feature brought a lot of success for not only Fonsi,
          but also Justin Beiber.
        </p>
        <p>
          The remix featuring Justin Bieber ended up reaching number one on
          the US Billboard Hot 100, becoming Beiber’s fifth number one on the
          chart, and both Fonsi and Yankee’s first.
        </p>
        <p>
          Because of this success, Fonsi earned his first Grammy nomination
          at the 51st Grammy Awards for Best Latin Pop Album. Despite not
          winning, Fonsi was able to reach a much broader audience and was
          the first Latin single to hit 1 Billion streams on Spotify.
        </p>
        <p>
          On the Billboard charts, “Despacito” was also the first Spanish
          song to spend 16 weeks atop the Billboard Hot 100.
        </p>
        <p>
          Despite his success, Fonsi not winning a Grammy and only receiving
          a couple nominations simply left many fans confused.
        </p>
        <p>
          “I know the Grammys have their own criteria for judging and choosing
          a winner, but I just don’t understand how ‘Despacito’ could have
          lost,” explained Ashley Ayala,a long-time fan who had been keeping
          up with Fonsi’s nomination. “The fact that the song broke a lot of
          records was cool but the song was so much more than that. It really
          brought people together.”
        </p>
        <p>
          Many other fans were dissatisfied with the outcome of the award show
          that night. To them, it seemed as though the song was only nominated
          to drive off controversy, and more so seen as a way to increase their
          viewership and not actually looking at these artists for their impact.
        </p>
        <p>
          Fonsi’s fans aren’t the only people feeling this way.
        </p>
        <p>
          Recently, J Balvin has also spoken his thoughts about the Recording
          Academy and how they continue to undervalue non-english speaking
          artists.
        </p>
      </div>
      <div className="Sub-Header">
        <h2>Ratings, Streams and Respect</h2>
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
