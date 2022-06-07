import { MarkGithubIcon } from '@primer/octicons-react'
import { useTranslation } from 'components/hooks/useTranslation'

export const SmallFooter = () => {
  const { t } = useTranslation('footer')
  return (
    <footer className="py-6 text-small">
      <div className="container-xl d-flex px-3 px-md-6">
        <ul className="d-flex list-style-none flex-wrap flex-justify-center flex-xl-justify-start">
          <li className="d-flex mr-xl-3 color-text-secondary">
            {/*<MarkGithubIcon className="mr-2 mr-xl-3" size={20} />*/}
            
            <div style={{marginLeft: 1 + 'em'}}><span>&copy; {new Date().getFullYear()} TUM Center for Digital Public Services</span></div>
          </li>
          <li className="ml-3 no-print">
            <a href="https://www.gov.sot.tum.de/elaw/impressum/">{`Impressum`} </a>
          </li>
          <li className="ml-3">
            <a href="https://sml.cdps.wiki">{`sml.cdps.wiki`} </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
