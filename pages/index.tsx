import { GetServerSideProps } from 'next'

import {
  MainContextT,
  MainContext,
  getMainContextFromRequest,
  useMainContext,
} from 'components/context/MainContext'

import { DefaultLayout } from 'components/DefaultLayout'
import { useTranslation } from 'components/hooks/useTranslation'
import { useVersion } from 'components/hooks/useVersion'
import { LinkExternalIcon, ArrowRightIcon, CommentDiscussionIcon } from '@primer/octicons-react'
import { useRouter } from 'next/router'
import { HfPHeader } from 'components/landing/HfPHeader'
import { ArticleList } from 'components/landing/ArticleList'
import { Search } from 'components/Search'

type FeaturedLink = {
  href: string
  title: string
  intro: string
}

type Props = {
  mainContext: MainContextT
  popularLinks: Array<FeaturedLink>
  gettingStartedLinks: Array<FeaturedLink>
}
export default function MainLanding({ mainContext, gettingStartedLinks, popularLinks }: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        <LandingPage gettingStartedLinks={gettingStartedLinks} popularLinks={popularLinks} />
      </DefaultLayout>
    </MainContext.Provider>
  )
}

type LandingPageProps = {
  popularLinks: Array<FeaturedLink>
  gettingStartedLinks: Array<FeaturedLink>
}
function LandingPage(props: LandingPageProps) {
  const router = useRouter()
  const { gettingStartedLinks, popularLinks } = props
  const { activeProducts, isFPT } = useMainContext()
  const { currentVersion } = useVersion()
  const { t } = useTranslation(['homepage', 'search', 'toc'])
  return (
    <div>
      {/* <!-- Hero --> */}
      <section id="landing" className="color-bg-tertiary">
        <Search isStandalone={true}>
          {({ SearchInput, SearchResults }) => {
            return (
              <div className="container-xl px-3 px-md-6 pb-6 pb-lg-0">
                <div className="gutter gutter-xl-spacious pt-6 pt-lg-0 d-lg-flex flex-row-reverse flex-items-center">
                  <div className="col-lg-7">
                    <HfPHeader />
                  </div>
                  <div className="col-lg-5 mt-6">
                    <h1 className="h1-mktg mb-3">{t('search:need_help')}</h1>
                    {SearchInput}
                  </div>
                </div>
                <div className="mt-3">{SearchResults}</div>
              </div>
            )
          }}
        </Search>
     
      </section>


      {/* <!-- Explore by product -->      REMOVED siehe altes TUMGOVWIKI */}
      <section className="container-xl pb-lg-4 my-1 px-3 px-md-6">
        
      </section>

      <div className="px-3 px-md-6 container-xl">
      <div className="col-12 col-lg-10 float-left">
      <h3 className="display-4">„Demokratie heißt auch nah an den Menschen zu sein. Social Media schafft Nähe zwischen dem Staat und seinen Bürgerinnen und Bürgern.”</h3>
          </div>
          <div className="mt-5 float-left">
            <img className="float-left mt-2" src ="/assets/images/Profilbild_DH_Credits_an_Kilian_Blues_bidt_test.png" width="60px"></img>
            <div className="col-12 col-lg-6 float-left">
          <h3 className="display-4 ml-3 float-left color-text-link">Prof. Dr. Dirk Heckmann</h3>
          <h5 className="display-4 ml-3 float-left">Technische Universität München, Direktor des TUM Center for Digital Public Services (CDPS)</h5>
          <div className="display-4 ml-3 float-left">Bildcredits an Kilian Blues bidt</div>
          </div>
          </div>
       
          <div className="featured-links container-xl">
          <div className="gutter gutter-xl-spacious clearfix">
            <div className="col-12 col-lg-12 mt-6 mb-md-4 mb-lg-0 float-left">
              <h2 className="h2-mktg">Einleitung</h2>
              <div className='mt-3'>
          <p>Social Media gehört inzwischen unstreitig zum Alltag der meisten Menschen.  Darunter versteht man Medien, die es einem ermöglichen, im Internet in wechselseitigen Austausch mit anderen Personen zu treten und dadurch soziale Beziehungen aufzubauen.  Dabei kann die Art und Weise, wie man mit anderen in Kontakt tritt, je nach dem konkreten De-sign des sozialen Mediums variieren.  Beispiele für Social Media-Plattformen sind face-book, Instagram, TikTok, LinkedIn und Twitter.</p>

<p>Die Vorteile von Social Media sind vielen bekannt. Dagegen ist öfters nicht bekannt, was im Umgang mit Social Media erlaubt bzw. nicht erlaubt ist. Diese Webseite soll Unklarhei-ten beseitigen und einen ersten Einblick darin geben, was bei der privaten Nutzung von Social Media aus rechtlicher Sicht zu beachten ist.</p>

<p>Man muss stets bedenken, dass jeder Sachverhalt für sich genommen einzeln zu betrach-tet und zu beurteilen ist, sodass die Ausführungen auf dieser Webseite eine individuelle Rechtsberatung nicht ersetzen können.</p>
          
          </div>
          </div>
          </div>
          </div>
          
        
          <div className="featured-links container-xl">
          <div className="gutter gutter-xl-spacious clearfix">
            <div className="col-12 col-lg-6 mt-6 mb-md-4 mb-lg-0 float-left">
            
              <ArticleList
                title={t('toc:getting_started')}
                variant="spaced"
                articles={gettingStartedLinks}
              />
            </div>

            <div className="col-12 col-lg-6 mt-8 float-left">
              <ArticleList title={t('toc:popular')} variant="spaced" articles={popularLinks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any

  return {
    props: {
      mainContext: getMainContextFromRequest(req),
      gettingStartedLinks: req.context.featuredLinks.gettingStarted.map(
        ({ title, href, intro }: any) => ({ title, href, intro })
      ),
      popularLinks: req.context.featuredLinks.popular.map(({ title, href, intro }: any) => ({
        title,
        href,
        intro,
      })),
    },
  }
}
