import fs from 'fs'
export function greeter(person: string): string {
  return 'Hello, ' + person
}

if (!fs.existsSync('temp')) {
  console.info('not exist temp file')
}
