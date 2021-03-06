import { TX_SERVICE_HOST, SIGNATURES_VIA_METAMASK, RELAY_API_URL, SAFE_APPS_URL } from 'src/config/names'

const testConfig = {
  [TX_SERVICE_HOST]: 'http://localhost:8000/api/v1/',
  [SIGNATURES_VIA_METAMASK]: false,
  [RELAY_API_URL]: 'https://safe-relay.staging.gnosisdev.com/api/v1',
  [SAFE_APPS_URL]: 'http://localhost:3002/'
}

export default testConfig
