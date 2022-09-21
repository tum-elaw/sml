import { PeopleIcon, CommentDiscussionIcon, QuestionIcon } from '@primer/octicons-react'

import { useTranslation } from 'components/hooks/useTranslation'
import { useVersion } from 'components/hooks/useVersion'

export const Support = () => {
  const { isEnterprise } = useVersion()
  const { t } = useTranslation('support')

  return (
    <div>
      <div>
      <h3 className="mt-2 mb-2 f4">Kontakt</h3>
      Du benötigst Hilfe oder hast Feedback zum Social Media Leitfaden?
      <p>Schreibe uns gerne eine Mail an: </p>
      <p>sml.elaw@sot.tum.de</p>
      </div>
    </div>
  )
}
