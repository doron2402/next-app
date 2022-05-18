import Link from 'next/link'
import FeatureSection from '../components/FeatureSection'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello Next.js 👋</h1>
    <FeatureSection title="Blah Blah" />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
