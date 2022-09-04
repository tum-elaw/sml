import { Survey } from 'components/Survey'
import { Contribution } from 'components/Contribution'
import { Support } from 'components/Support'
import { useMainContext } from './context/MainContext'
import { useVersion } from 'components/hooks/useVersion'
import { useTranslation } from './hooks/useTranslation'

export const SupportSection = () => {
  const { currentVersion } = useVersion()
  const { enterpriseServerReleases } = useMainContext()
  const { t } = useTranslation('support')

  const isDeprecated =
    enterpriseServerReleases.isOldestReleaseDeprecated &&
    currentVersion.includes(enterpriseServerReleases.oldestSupported)

  return (
    <section className="mt-lg-9 py-7 px-3 px-md-6 no-print color-bg-tertiary">
      <div className="container-xl gutter-lg-spacious clearfix">
        <div className="col-7 float-left">
        <h3 className="mb-2 f4">{"Gesetzestexte"}</h3>
        <div>
          <a id="GG" href="https://www.gesetze-im-internet.de/gg/" target="_blank" className="btn btn-outline mr-4 mt-2">
            {t`GG`}
          </a>
          <a id="NetzDG" href="https://www.gesetze-im-internet.de/netzdg/index.html" target="_blank" className="btn btn-outline mr-4 mt-2">
            {t`NetzDG`}
          </a>
          <a id="UrhG" href="https://www.gesetze-im-internet.de/urhg/" target="_blank" className="btn btn-outline mr-4 mt-2">
            {t`UrhG`}
          </a>
          <a id="KUG" href="https://www.gesetze-im-internet.de/kunsturhg/index.html" target="_blank" className="btn btn-outline mr-4 mt-2">
            {t`KUG`}
          </a>
          <a id="DSGVO" href="https://dejure.org/gesetze/DSGVO'" target="_blank" className="btn btn-outline mr-4 mt-2">
            {t`DSGVO`}
          </a>
          <a id="StGB" href="https://www.gesetze-im-internet.de/stgb/" target="_blank" className="btn btn-outline mr-4 mt-2">
            {t`StGB`}
          </a>
        </div>
        <div>
          
        </div>
        </div>
        <div className="col-12 col-lg-12 col-xl-4 float-right">
          <Support />
        </div>
      </div>
    </section>
  )
}
