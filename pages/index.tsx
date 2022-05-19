import Link from 'next/link'
import FeatureSection from '../components/FeatureSection'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <FeatureSection title="Keep everything organized in one place" />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
