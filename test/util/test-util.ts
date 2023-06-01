import * as fs from 'fs';
import * as path from 'path';

function readFile(filePath: string) {
  const jsonData = fs.readFileSync(path.resolve(__dirname, '..', filePath), 'utf8');
  const data = JSON.parse(jsonData);

  return data;
}

export { readFile };
