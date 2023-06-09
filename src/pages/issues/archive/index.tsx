import File from '@/components/File'
import Page from '@/components/Page'

export default function Home() {
  return (
    <Page
      description="an archive of all of our digital releases"
      title="Archive"
      h1="Archive"
      h2="An archive of all of our digital releases"
    >
        <p>sorted by month:</p>
        <ul>
          <File path="2023/February.pdf" name="February">february</File>
          <File path="2023/March.pdf" name="March">march</File>
        </ul>
    </Page>
  )
}
