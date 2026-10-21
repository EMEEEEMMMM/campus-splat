import { Link } from 'react-router-dom'
import { useAuth } from '../auth'
import { LanguageSwitcher } from '../components/common'
import { BrandMark, Icon } from '../components/Icon'
import { useI18n } from '../i18n'

const STEPS = [
  { num: '01', title: 'landing.step1.title', desc: 'landing.step1.desc' },
  { num: '02', title: 'landing.step2.title', desc: 'landing.step2.desc' },
  { num: '03', title: 'landing.step3.title', desc: 'landing.step3.desc' },
] as const

export default function Landing() {
  const { t } = useI18n()
  const { session, isAdmin } = useAuth()

  return (
    <div className="landing">
      <header className="landing-top">
        <div className="landing-brand">
          <BrandMark size={28} />
          {t('app.name')}
        </div>
        <LanguageSwitcher compact />
      </header>

      <main className="landing-main">
        <div className="landing-copy">
          <h1>{t('landing.title')}</h1>
          <p className="lead">{t('landing.subtitle')}</p>
          <ol className="landing-steps">
            {STEPS.map((step) => (
              <li key={step.num}>
                <span className="step-num">{step.num}</span>
                <div>
                  <strong>{t(step.title)}</strong>
                  <span className="step-desc">{t(step.desc)}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="landing-actions">
          <Link className="entry" to={session?.role === 'volunteer' ? '/v' : '/join'}>
            <span className="entry-icon">
              <Icon name="phone" size={22} />
            </span>
            <span className="entry-text">
              <strong>{t('landing.volunteer')}</strong>
              <span className="desc">{t('landing.volunteer.desc')}</span>
            </span>
            <Icon name="arrowRight" size={18} className="entry-go" />
          </Link>

          <Link className="entry is-admin" to={isAdmin ? '/admin' : '/admin/login'}>
            <span className="entry-icon">
              <Icon name="desktop" size={22} />
            </span>
            <span className="entry-text">
              <strong>{t('landing.admin')}</strong>
              <span className="desc">{t('landing.admin.desc')}</span>
            </span>
            <Icon name="arrowRight" size={18} className="entry-go" />
          </Link>

          {session && (
            <p className="landing-foot">
              {t('landing.signedIn', {
                name: session.nickname ?? (session.role === 'admin' ? t('common.admin') : '').trim(),
              })}
              {session.task_name ? ` · ${session.task_name}` : ''}
            </p>
          )}
        </div>
      </main>

      <footer className="landing-meta">{t('landing.meta')}</footer>
    </div>
  )
}
