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
              <div className="container-xl px-3 px-md-6 pb-6 pb-lg-9">
                <div className="gutter gutter-xl-spacious pt-6 pt-lg-0 d-lg-flex flex-row-reverse flex-items-center">
                  <div className="col-lg-7">
                    <HfPHeader />
                  </div>
                  <div className="col-lg-5 mt-6">
                    <h1 className="h1-mktg mb-3">{t('search:need_help')}</h1>
                    {SearchInput}
                  </div>
                </div>
                <a id="ask-community" href="/artikel" className="btn btn-outline mr-4 mt-0">
        <ArrowRightIcon size="small" className="octicon mr-1" />
        {`Zum Q & A`}
                             </a>
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
            <div className="col-12 col-lg-6 mt-8 mb-md-4 mb-lg-0 float-left">
            
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
