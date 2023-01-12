import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Link from 'next/link'

import Image from 'next/image'

const config: DocsThemeConfig = {
  
  logo: <span> <Image
  src='/arenalogo-rb.png'
  alt="Picture of the author"
  width="100"
  height="100"
    />   ACTOR III</span>,
  logoLink: "https://www.arenasystemsgroup.com/",
  feedback: {content:null},
  editLink: {text: null},
  
}

export default config

