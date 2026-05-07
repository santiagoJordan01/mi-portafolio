import { FaCss3Alt, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaLaravel, FaNodeJs, FaReact } from 'react-icons/fa'
import { GiBullHorns } from 'react-icons/gi'
import { LuShieldCheck } from 'react-icons/lu'
import { MdSpaceDashboard } from 'react-icons/md'
import { SiExpress, SiJavascript, SiMongodb, SiMysql, SiPostman, SiRedis, SiSupabase } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const iconMap = {
  React: { Icon: FaReact, color: '#57d4ff' },
  JavaScript: { Icon: SiJavascript, color: '#f7df1e' },
  HTML: { Icon: FaHtml5, color: '#ff744a' },
  CSS: { Icon: FaCss3Alt, color: '#4fb2ff' },
  'Admin Panels': { Icon: MdSpaceDashboard, color: '#9ec9ff' },
  Laravel: { Icon: FaLaravel, color: '#ff5e57' },
  'Node.js': { Icon: FaNodeJs, color: '#84d25b' },
  Express: { Icon: SiExpress, color: '#cfd8eb' },
  'REST APIs': { Icon: TbApi, color: '#72b8ff' },
  RBAC: { Icon: LuShieldCheck, color: '#7ce8ff' },
  MySQL: { Icon: SiMysql, color: '#79b6ff' },
  MongoDB: { Icon: SiMongodb, color: '#66d17f' },
  Supabase: { Icon: SiSupabase, color: '#58e6a8' },
  Redis: { Icon: SiRedis, color: '#ff7a70' },
  Git: { Icon: FaGitAlt, color: '#ff7a45' },
  GitHub: { Icon: FaGithub, color: '#f2f6ff' },
  Docker: { Icon: FaDocker, color: '#6ad3ff' },
  Bull: { Icon: GiBullHorns, color: '#ffb76a' },
  Postman: { Icon: SiPostman, color: '#ff9559' },
}

export function getTechnologyIcon(name) {
  return iconMap[name] ?? { Icon: TbApi, color: '#8ac9ff' }
}
