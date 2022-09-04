import { PeopleIcon, CommentDiscussionIcon, QuestionIcon } from '@primer/octicons-react'

import { useTranslation } from 'components/hooks/useTranslation'
import { useVersion } from 'components/hooks/useVersion'

export const Support = () => {
  const { isEnterprise } = useVersion()
  const { t } = useTranslation('support')

  return (
    <div>
      <div>
      <h3 className="mb-2 f4">{t`still_need_help`}</h3>
      <a
        id="contact-us"
        href={
          isEnterprise
            ? 'https://www.gov.sot.tum.de/elaw/team/michael-bressler/'
            : 'https://www.gov.sot.tum.de/elaw/team/michael-bressler/'
         
        }
        target="_blank"
        className="btn btn-outline mt-2"
      >
        <CommentDiscussionIcon size="small" className="octicon mr-1" />
        {t`contact_support`}
      </a>
      </div>
      <div>
      <h3 className="mt-6 mb-2 f4">Feedback?</h3>
      <a
        id="feedback"
        href={
          isEnterprise
            ? 'https://www.gov.sot.tum.de/elaw/team/michael-bressler/'
            : 'https://www.gov.sot.tum.de/elaw/team/michael-bressler/'
         
        }
        target="_blank"
        className="btn btn-outline mt-2"
      >
        <CommentDiscussionIcon size="small" className="octicon mr-1" />
        E-Mail schreiben
      </a>
      </div>
    </div>
  )
}
