import * as React from 'react'
import Link from 'next/link'

const containerStyle = {
  display: 'flex',
}

const itemStyle = {
  padding: 10,
}

const Navigation: React.FC = () => {
  return (
    <div style={containerStyle}>
      <Link href="/">
        <p style={itemStyle}>Index</p>
      </Link>
      <Link href="/about">
        <p style={itemStyle}>About</p>
      </Link>
      <Link href="/blogs">
        <p style={itemStyle}>Blogs</p>
      </Link>
    </div>
  )
}
export default Navigation
