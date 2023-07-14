import fs from 'fs';

type GetFiles = (
  entry: string,
  extensions: string[],
  excludeExtensions: string[]
) => string[];

export const getFiles: GetFiles = (
  entry,
  extensions = [],
  excludeExtensions = []
) => {
  let fileNames: string[] = [];
  const dirs = fs.readdirSync(entry) as string[];

  dirs.forEach(dir => {
    const path = `${entry}/${dir}`;

    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [
        ...fileNames,
        ...getFiles(path, extensions, excludeExtensions)
      ];

      return;
    }

    if (
      !excludeExtensions.some(exclude => dir.endsWith(exclude)) &&
      extensions.some(ext => dir.endsWith(ext))
    ) {
      fileNames.push(path);
    }
  });

  return fileNames;
};
