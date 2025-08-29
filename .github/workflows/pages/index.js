import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'

export default function NotionPage({ recordMap }) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
    />
  )
}

export async function getStaticProps() {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage('YOUR-NOTION-PAGE-ID')
  
  return {
    props: {
      recordMap,
    },
    revalidate: 60
  }
}
