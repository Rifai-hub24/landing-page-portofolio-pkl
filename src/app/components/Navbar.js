'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const path = usePathname()

  const menu = [
    { name: 'Home', href: '/' },
    { name: 'Rifa’i', href: '/irfan' },
    { name: 'Iqbal', href: '/iqbal' },
    { name: 'Zaki', href: '/zaki' },
  ]

  return (
    <nav>
      <div><strong>Portofolio</strong></div>
      <div>
        {menu.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={path === item.href ? 'active' : ''}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
