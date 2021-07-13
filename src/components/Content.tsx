import makeStyles from '@src/styles/makeStyles'
import { Link, Text, ZeitUIThemes } from '@zeit-ui/react'
import React from 'react'
import ElementCard from './ElementCard'
import ListItem from './ListItem'

const useStyles = makeStyles((ui: ZeitUIThemes) => ({
  content: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    boxSizing: 'border-box',
    margin: '0 auto',
    padding: `0 ${ui.layout.pageMargin}`,
    transform: 'translateY(-35px)'
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minWidth: 1,
    maxWidth: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  projects: {
    width: '100%'
  },
  activity: {
    flex: 1
  },
  [`@media screen and (min-width: ${ui.layout.pageWidthWithMargin})`]: {
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    projects: {
      width: 600,
      maxWidth: '100%',
      marginRight: 80
    },
    activityTitle: {
      marginTop: '0 !important',
      marginBottom: 30,
      fontSize: '14px !important',
      textAlign: 'start !important'
    },
    viewAll: {
      marginBottom: '0 !important',
      textAlign: 'start !important'
    }
  },
  viewAll: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: ui.layout.gap,
    textAlign: 'center'
  },
  activityTitle: {
    fontWeight: 700,
    marginTop: ui.layout.gap,
    fontSize: 24,
    textAlign: 'center'
  },
  footer: {
    display: 'flex !important',
    alignItems: 'center !important',
    height: 50,
    width: '100% !important'
  },
  footerText: {
    fontSize: 14,
    fontWeight: 500,
    marginLeft: '6px !important'
  },
}))

const Content = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.row}>
          <div className={classes.projects}>
            <ElementCard
              title="소개"
              points={[
                '제품과 경험을 만드는 프로그래머입니다.',
                '여러 난치성 질환과 싸우면서 살아가고 있습니다.',
                '프로그래밍, IT나 음향 기기, 음악과 만화 등에 관심이 많습니다.',
                '사람의 보편적인 권리나 인권(장애인, 성소수자, 여성)에 관심이 많습니다.',
                <div key='kr1'><Link href="https://realignist.me" target="_blank" rel="noopener" pure underline>미디엄</Link>에 가끔 글을 올리고 있습니다.</div>,
                <div key='kr2'>프로그래밍과 관련한 이야기는 트위터&nbsp;<Link href="https://twitter.com/Hazealign" target="_blank" rel="noopener" pure underline>@Hazealign</Link>에서 이야기합니다.</div>,
                '이름은 영어로 헤이즈라고 읽고, 한글로는 하제라고 읽습니다.',
              ]}
            />
            <ElementCard
              title="自己紹介"
              points={[
                'サービスと経験を作るプログラマーです。',
                '色んな難治性疾患と戦いながら生きています。',
                'プログラミングとか、ガジェット、日本の音楽や漫画に興味深いです。',
                '人権、障害者や性的少数者の権利に高い関心を持っています。',
                '日本の文化に興味があります。特に日本の食べ物とか。',
                <div key='jp1'>プログラミングの話はTwitterの<Link href="https://twitter.com/Hazealign" target="_blank" rel="noopener" pure underline>@Hazealign</Link>でつぶやいています。</div>,
                <div key='jp3'>オタクの活動はTwitterの<Link href="https://twitter.com/BrumeDawn" target="_blank" rel="noopener" pure underline>@BrumeDawn</Link>でつぶやいています。</div>,
                '韓国では名前で呼ぶのが基本なので、ヘイズと呼んでくれると嬉しいです。',
              ]}
            />
            <ElementCard
              title="Who?"
              points={[
                'I am developer, who makes service and experiences.',
                'I fighting and living with Refractory Chronic Diseases.',
                'I like Programming, Digital Gadgets, Music and Comics.',
                'I’m interested at improving human rights for minorities.',
                'Just call me Haze. :)',
              ]}
            />
          </div>
          <div className={classes.activity}>
            <Text h2 className={classes.activityTitle}>
              My Favorites
            </Text>
            <ListItem imageUrl="./images/pikachu.jpg">
              <b>Pikachu</b> ♥
            </ListItem>
            <ListItem imageUrl="./images/miyavi.jpg">
              <b>MIYAVI</b>
            </ListItem>
            <ListItem imageUrl="./images/hyde.jpg">
              <b>HYDE</b>
            </ListItem>
            <ListItem imageUrl="./images/oneokrock.jpg">
              <b>ONE OK ROCK</b>
            </ListItem>
            <ListItem imageUrl="./images/myfirststory.jpg">
              <b>MY FIRST STORY</b>
            </ListItem>
            <ListItem imageUrl="./images/sekainoowari.jpg">
              <b>SEKAI NO OWARI</b> a.k.a. End of the World
            </ListItem>
            <ListItem imageUrl="./images/straightener.jpg">
              <b>ストレイテナー</b> (Straightener)
            </ListItem>
            <ListItem imageUrl="./images/sigure.jpg">
              <b>凛として時雨</b> (Ling tosite sigure)
            </ListItem>
            <ListItem imageUrl="./images/mrsgreenapple.jpg">
              <b>Mrs. GREEN APPLE</b>
            </ListItem>
            <ListItem imageUrl="./images/164203.jpg">
              <b>164</b>
            </ListItem>
            <ListItem imageUrl="./images/machikado.jpg">
              <b>まちカドまぞく</b><br/>(The Demon Girl Next Door, 길모퉁이 마족)
            </ListItem>
            <ListItem imageUrl="./images/rst.jpg">
              <b>Re:ステージ！</b> (Re:Stage!, 리스테이지)
            </ListItem>
            <ListItem imageUrl="./images/minase_inori.jpg">
              <b>水瀬いのり</b> (Minase Inori, 미나세 이노리)
            </ListItem>
            <ListItem imageUrl="./images/ueda_reina.jpg">
              <b>上田麗奈</b> (Ueda Reina, 우에다 레이나)
            </ListItem>
            <ListItem imageUrl="./images/kito_akari.jpg">
              <b>鬼頭明里</b> (Kito Akari, 키토 아카리)
            </ListItem>
            <ListItem imageUrl="./images/kohara_konomi.jpg">
              <b>小原好美</b> (Kohara Konomi, 코하라 코노미)
            </ListItem>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
