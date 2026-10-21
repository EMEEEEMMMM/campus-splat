import type { CSSProperties, ReactNode } from 'react'

/**
 * One stroke-icon set for the whole app, so nav, buttons and empty states
 * share the same optical weight. Emoji are reserved for user text, never for
 * interface chrome.
 */
export type IconName =
  | 'overview'
  | 'building'
  | 'inbox'
  | 'users'
  | 'image'
  | 'cpu'
  | 'settings'
  | 'phone'
  | 'desktop'
  | 'folder'
  | 'download'
  | 'refresh'
  | 'logout'
  | 'user'
  | 'plus'
  | 'arrowLeft'
  | 'arrowRight'
  | 'check'
  | 'warning'
  | 'play'
  | 'cube'
  | 'file'
  | 'trash'
  | 'retry'
  | 'camera'
  | 'close'
  | 'move'
  | 'search'

const PATHS: Record<IconName, ReactNode> = {
  overview: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="3.5" width="7" height="4.5" rx="1.2" />
      <rect x="13.5" y="11" width="7" height="9.5" rx="1.2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
    </>
  ),
  building: (
    <>
      <path d="M4 20.5V4.8a1.3 1.3 0 0 1 1.3-1.3h8.4a1.3 1.3 0 0 1 1.3 1.3v15.7" />
      <path d="M15 9.5h3.7a1.3 1.3 0 0 1 1.3 1.3v9.7M3 20.5h18" />
      <path d="M7.5 7.5h2.5M7.5 11h2.5M7.5 14.5h2.5M7.5 18h2.5" />
    </>
  ),
  inbox: (
    <>
      <path d="M3.5 13.5h4l1.5 2.5h6l1.5-2.5h4" />
      <path d="M3.5 13.5 6 5.7A1.8 1.8 0 0 1 7.7 4.5h8.6A1.8 1.8 0 0 1 18 5.7l2.5 7.8v4.2a1.8 1.8 0 0 1-1.8 1.8H5.3a1.8 1.8 0 0 1-1.8-1.8v-4.2Z" />
    </>
  ),
  users: (
    <>
      <path d="M16 19.5v-1.4c0-2.1-1.8-3.7-4-3.7H7c-2.2 0-4 1.6-4 3.7v1.4" />
      <circle cx="9.5" cy="7.5" r="3.3" />
      <path d="M17 4.7a3.2 3.2 0 0 1 0 6.1M21 19.5v-1.2c0-1.8-1.4-3.2-3.4-3.5" />
    </>
  ),
  image: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <circle cx="8.8" cy="9.6" r="1.5" />
      <path d="m20.5 15-4.3-4.3L7 20" />
    </>
  ),
  cpu: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="1.8" />
      <rect x="4" y="4" width="16" height="16" rx="2.6" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </>
  ),
  settings: (
    <>
      <path d="M4 7h7M15 7h5M4 17h5M13 17h7" />
      <circle cx="13" cy="7" r="2" />
      <circle cx="11" cy="17" r="2" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.4" />
      <path d="M10.5 18.6h3" />
    </>
  ),
  desktop: (
    <>
      <rect x="3" y="4" width="18" height="12.5" rx="1.8" />
      <path d="M9 20.5h6M12 16.5v4" />
    </>
  ),
  folder: (
    <>
      <path d="M3 7.4A1.4 1.4 0 0 1 4.4 6H9l2 2.4h8.6A1.4 1.4 0 0 1 21 9.8v7.8a1.4 1.4 0 0 1-1.4 1.4H4.4A1.4 1.4 0 0 1 3 17.6V7.4Z" />
    </>
  ),
  download: (
    <>
      <path d="M12 3.5v11.5M7.5 10.5 12 15l4.5-4.5M4 20h16" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 4.5V11h-6.5" />
    </>
  ),
  logout: (
    <>
      <path d="M9.5 4H6.2A2.2 2.2 0 0 0 4 6.2v11.6A2.2 2.2 0 0 0 6.2 20h3.3" />
      <path d="m15.5 8 4 4-4 4M19.5 12H9" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  plus: <path d="M12 4.5v15M4.5 12h15" />,
  arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  warning: (
    <>
      <path d="M12 4.2 21 20H3L12 4.2Z" />
      <path d="M12 10v4.2M12 17.2h.01" />
    </>
  ),
  play: <path d="M8 5.2 19 12 8 18.8V5.2Z" />,
  cube: (
    <>
      <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </>
  ),
  file: (
    <>
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </>
  ),
  trash: (
    <>
      <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <path d="m6 7 1 13h10l1-13M10 11v5.5M14 11v5.5" />
    </>
  ),
  retry: (
    <>
      <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" />
      <path d="M3.5 4.5V10H9" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.4-2h7.2L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.2" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  move: (
    <>
      <path d="M12 3v18M3 12h18" />
      <path d="m9 6 3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
}

export function Icon({
  name,
  size = 18,
  strokeWidth = 1.7,
  className,
  style,
}: {
  name: IconName
  size?: number
  strokeWidth?: number
  className?: string
  style?: CSSProperties
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      {PATHS[name]}
    </svg>
  )
}

/** Survey mark: four corner ticks around a point grid. */
export function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <span className="brandmark" style={{ width: size, height: size }}>
      <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 8V3h5M16 3h5v5M21 16v5h-5M8 21H3v-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="currentColor">
          <circle cx="9" cy="9" r="1.35" />
          <circle cx="15" cy="9" r="1.35" />
          <circle cx="12" cy="12" r="1.35" />
          <circle cx="9" cy="15" r="1.35" />
          <circle cx="15" cy="15" r="1.35" />
        </g>
      </svg>
    </span>
  )
}
