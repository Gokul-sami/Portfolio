import {
  ArrowUpIcon,
  ArrowUpRightIcon,
  CheckIcon,
  CloseIcon,
  CodeIcon,
  CopyIcon,
  FileIcon,
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
  SparkIcon,
} from './icons.jsx'

const icons = {
  'arrow-up': ArrowUpIcon,
  'arrow-up-right': ArrowUpRightIcon,
  check: CheckIcon,
  close: CloseIcon,
  code: CodeIcon,
  copy: CopyIcon,
  email: MailIcon,
  file: FileIcon,
  github: GithubIcon,
  globe: GlobeIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
  menu: MenuIcon,
  spark: SparkIcon,
}

/** Renders an icon by key so data files can stay plain JavaScript. */
export default function Icon({ name, ...props }) {
  const SvgIcon = icons[name]

  if (!SvgIcon) return null

  return <SvgIcon {...props} />
}
