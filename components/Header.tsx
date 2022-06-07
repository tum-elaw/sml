import { useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { MarkGithubIcon, ThreeBarsIcon, XIcon } from '@primer/octicons-react'
import { ButtonOutline } from '@primer/components'

import { Link } from 'components/Link'
import { useMainContext } from './context/MainContext'
import { LanguagePicker } from './LanguagePicker'
import { HeaderNotifications } from 'components/HeaderNotifications'
import { ProductPicker } from 'components/ProductPicker'
import { useTranslation } from 'components/hooks/useTranslation'
import { HomepageVersionPicker } from 'components/landing/HomepageVersionPicker'
import { Search } from 'components/Search'

export const Header = () => {
  const router = useRouter()
  const { relativePath, currentLayoutName, error } = useMainContext()
  const { t } = useTranslation(['header', 'homepage'])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const showVersionPicker =
        relativePath == 'iwqsqwsqws.md'
   /* relativePath === 'index.md' ||
    currentLayoutName === 'product-landing' ||
    currentLayoutName === 'product-sublanding' ||
    currentLayoutName === 'release-notes'                     commented out to remove version Picker*/

  return (
    <div className="border-bottom color-border-secondary no-print">
      {error !== '404' && <HeaderNotifications />}

      <header
        className="container-xl px-3 px-md-6 pt-3 pb-3 position-relative"
        style={{ zIndex: 2 }}
      >
        {/* desktop header */}
        <div className="d-none d-lg-flex flex-justify-end" data-testid="desktop-header">
          {showVersionPicker && (
            <div className="py-2 mr-4">
              <HomepageVersionPicker />
            </div>
          )}

<div className='"float-left pt-1 mr-4'>
          <a href="https://www.tum-cdps.de/" target='_blank' rel="noopener noreferrer">
            <img src="/assets/images/site/cdpslogo.png" height="33px"></img>
            </a>
            </div>

          <div className="pt-1">
            {/*<LanguagePicker />                            commented out to remove Language Picker */}
            <a href="https://www.tum.de/" target='_blank' rel="noopener noreferrer">
            <svg width="60px" height="32px" viewBox="0 0 740 390" version="1.1">

<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="2015_Logo_TUM_neg_RGB"  fill="#e3e3e3">
        <path d="M405,9.13352234e-15 L370,2.70412665e-15 L370,320 L290,320 L290,1.5562918e-14 L255,9.13352234e-15 L0,1.35206332e-15 L0,70 L70,70 L70,390 L140,390 L140,70 L220,70 L220,390 L255,390 L405,390 L440,390 L440,70 L520,70 L520,390 L590,390 L590,70 L670,70 L670,390 L740,390 L740,35 L740,1.35206332e-15 L405,1.35206332e-15 Z" id="Rectangle-1"></path>
    </g>
</g>
</svg>
            </a>
          </div>

          

          {/* <!-- GitHub.com homepage and 404 page has a stylized search; Enterprise homepages do not --> */}
          {relativePath !== 'index.md' && error !== '404' && (
            <div className="d-inline-block ml-4">
              <Search />
            </div>
          )}
        </div>

        {/* mobile header */}
        <div className="d-lg-none" data-testid="mobile-header">
          <div className="d-flex flex-justify-between">
            <div className="d-flex flex-items-center" id="github-logo-mobile" role="banner">
              <Link aria-hidden="true" tabIndex={-1} href={`/${router.locale}`}>
                {/*<MarkGithubIcon size={32} className="color-icon-primary" />*/}
                
              </Link>

              <Link
                href={`/${router.locale}`}
                className="h4-mktg color-text-primary no-underline no-wrap pl-2"
              >
                {t('github_docs')}
              </Link>
            </div>

            <div>
              <ButtonOutline
                data-testid="mobile-menu-button"
                css
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Navigation Menu"
              >
                {isMenuOpen ? <XIcon size="small" /> : <ThreeBarsIcon size="small" />}
              </ButtonOutline>
            </div>
          </div>

          {/* mobile menu contents */}
          <div className="relative">
            <div
              className={cx(
                'width-full position-absolute left-0 right-0 color-shadow-large color-bg-primary px-3 px-md-6 pb-3',
                isMenuOpen ? 'd-block' : 'd-none'
              )}
            >
              <div className="mt-3 mb-2">
                <h4 className="text-mono f5 text-normal color-text-secondary">
                  {t('explore_by_product')}
                </h4>

                <ProductPicker />
              </div>
                
              {/* <!-- Versions picker that only appears in the header on landing pages --> */}
              {showVersionPicker && (
                <div className="border-top py-2">
                  <HomepageVersionPicker variant="inline" />
                </div>
              )}

              {/* <!-- Language picker - 'English', 'Japanese', etc --> */}
              
          

              {/* <!-- GitHub.com homepage and 404 page has a stylized search; Enterprise homepages do not --> */}
              {relativePath !== 'index.md' && error !== '404' && (
                <div className="pt-3 border-top">
                  <Search />
                  
                </div>
                
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
