import { GetServerSideProps } from 'next'

import {
  MainContextT,
  MainContext,
  getMainContextFromRequest,
  useMainContext,
} from 'components/context/MainContext'

import { DefaultLayout } from 'components/HomepageLayout'
import { useTranslation } from 'components/hooks/useTranslation'
import { useVersion } from 'components/hooks/useVersion'
import { LinkExternalIcon, ArrowRightIcon, CommentDiscussionIcon } from '@primer/octicons-react'
import { useRouter } from 'next/router'
import { HfPHeader } from 'components/landing/HfPHeader'
import { ArticleList } from 'components/landing/ArticleList'
import { Search } from 'components/Search'
import { Einleitung } from 'content/fragen/Einleitung'
import { UeberUns } from 'content/fragen/UeberUns'

type FeaturedLink = {
  href: string
  title: string
  intro: string
}

type Props = {
  mainContext: MainContextT
  popularLinks: Array<FeaturedLink>
}
export default function MainLanding({ mainContext, popularLinks }: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        <LandingPage popularLinks={popularLinks} />
      </DefaultLayout>
    </MainContext.Provider>
  )
}

type LandingPageProps = {
  popularLinks: Array<FeaturedLink>
}
function LandingPage(props: LandingPageProps) {
  const router = useRouter()
  const {popularLinks } = props
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
                  <div className="col-lg-6">
                    {/*Headline above search input */}
                    <h1 className="h0-mktg mb-3">{t('search:need_help')}</h1>
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
      <h3 className="display-4">„Social Media ist Ausdruck persönlicher Lebensgestaltung, auch für Beschäftigte im Öffentlichen Dienst. Sie sollten aber die Stoppschilder und Vorfahrtsregeln der Datenverkehrsordnung kennen.”</h3>
          </div>
          <div className="mt-5 float-left">
            <img className="float-left mt-2" src ="/assets/images/Profilbild_DH_Credits_an_Kilian_Blues_bidt_test.png" width="60px"></img>
            <div className="col-12 col-lg-6 float-left">
          <div className="display-4 ml-3 h3-mktg float-left color-text-link"><a href="https://www.gov.sot.tum.de/elaw/lehrstuhlinhaber/" target="_blank">Prof. Dr. Dirk Heckmann</a></div>
          <h5 className="display-4 ml-3 float-left">Technische Universität München, Direktor des TUM Center for Digital Public Services (CDPS)</h5>
          <div className="display-4 ml-3 float-left">Foto: Kilian Blues bidt</div>
          </div>
          </div>
       
          <div className="featured-links container-xl">
          <div className="gutter gutter-xl-spacious clearfix">
          <Einleitung/>
          </div>
          </div>

          <div className="container-xl">
        <div className="col-12 col-lg-12 mt-3 float-left h2-mktg">
              <a href="https://sml.tum-cdps.de/en/fragen/glossar">
                Glossar
              </a>
          </div>
          <div className="mt-3">
          Glossar über einschlägige Begriffe im Zusammenhang mit Social Media
          </div>
        </div>
          
          <div className="featured-links container-xl">
          <div className="gutter gutter-xl-spacious clearfix">
            <div className="col-12 col-lg-6 mt-6 mb-md-4 mb-lg-0 float-left">
              <h4 className='mb-2'>Empfohlene Beiträge</h4>
              <ArticleList title={t('toc:pAopular')} variant="compact" articles={popularLinks} />
            </div>
            <div className="float-left col-12 col-lg-6 mt-6">
              <h4 className="mb-2">PDF Version</h4>
              <div className="border-top"></div>
              <div className="clearfix">
                <div className="float-left col-auto">
                <a href="/assets/Social_Media_Leitfaden_Quickguide.pdf" target="_blank">
                  <img className="my-3 mr-3" src="/assets/images/sml/quickguide_frontpage.png" width="150px" alt="Erste Seite des Leitfadens als PDF Version"></img>
               </a>
               </div>
                <div className="float-left col-6 ml-2">
                  <div className="float-left col-12">
                    <div className="mt-3">Den Social Media Leitfaden gibt es auch als PDF!</div>
                    <a href="/assets/Social_Media_Leitfaden_Quickguide.pdf" target="_blank">
                    <button className="btn btn-primary float-left mt-3" type="button">
                      <span>Download</span>
                    </button>
                    </a>
                  </div>
                  <div className="float-left col-12">
                    <div className="mt-4">Hier geht es zur tintensparenden und barrierefreien Version!</div>
                    <a href="/assets/Social_Media_Leitfaden_Quickguide_barrierefrei_tintensparend.pdf" target="_blank">
                    <button className="btn float-left mt-3" type="button">
                      <span>Download</span>
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
          <div className="featured-links container-xl">
          <div className="gutter gutter-xl-spacious clearfix">
        <UeberUns/>
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
      popularLinks: req.context.featuredLinks.popular.map(({ title, href, intro }: any) => ({
        title,
        href,
        intro,
      })),
    },
  }
}
