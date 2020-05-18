import { access_id } from "./config.ts"

const accessId = access_id

const MARY_HAD_A_LITTLE_LAMB = "http://www.freeabcsongs.com/mp3/mary.mp3"

type SonicApiResponseFormat = 'xml' | 'json' | 'jsonp' | 'xmlp'

type SonicApiParameters = {
  blocking: boolean
  format: SonicApiResponseFormat
  access_id: string | undefined
  input_file: string
}

const taskUrl = 'analyze/key';
const parameters: SonicApiParameters = { blocking: false, format: 'json', access_id: accessId, input_file: MARY_HAD_A_LITTLE_LAMB };

async function analyzeKey(taskUrl: string, parameters: SonicApiParameters): Promise<any> {
  if (!parameters.access_id) {
    return ""
  }

  const url = `https://api.sonicapi.com/${taskUrl}?access_id=${parameters.access_id}&input_file=${parameters.input_file}&format=json`
  
  const response = await fetch(url)
  return response.json();
}
const data = await analyzeKey(taskUrl, parameters)
console.log(JSON.stringify(data, null, 4))
